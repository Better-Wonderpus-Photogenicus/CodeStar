const dotenv = require('dotenv').config();
const { Cache } = require('../models/cacheModel');
const bloomController = {};
const dictionary = require('../dictionary.js')

bloomController.checkCache = async (req, res, next) => {
  const { id1, id2 } = req.body;
  const key = [id1, id2].sort().join();
  res.locals.key = key;

  try {
    const found = await Cache.findOne({key: key});
    if (!found) return next();
    else res.locals.text = found.text;
    return next();
  } catch (err) {
    return next({log: `error in bloomController checkcache ${err}`,
        status: 400,
      });
  }
}

bloomController.getCompatibility = (req, res, next) => {
    if (res.locals.text) return next();
    
    const { id1, id2 } = req.body;
    fetch('https://api.bloom.be/api/signtosign', {
        method: "POST", 
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer " + process.env.api_key,
            "Accept-Encoding": "application/json"
        },
        body: JSON.stringify({
            "sign1_id": id1,
            "sign2_id": id2,
        }),
    })
    .then(data => data.json())
    .then(data => {
        let text =  data.text.text;
        //REMOVES LAST </P>
        text = text.slice(0, text.length-4);
        //REMOVES BEGINNING BETWEEN OPEN P TAGS
        text = text.replace(/(<p>([^;]*)<p>)/, '')
        //REMOVES ALL CHARACTERS WITH &NBSP; AT THE END
        text = text.replace(/(&nbsp;)/g, '')
        //REMOVES THE BREAK TAGS LEFT OVER AT THE END
        text = text.replace(/<([^;]*)>/g, '')
        //REPLACES THE BROKEN APOSTROPHE
        text = text.replace(/&([^;]*);/g, "'")
        
        for (key in dictionary) {
            text = text.replaceAll(key, dictionary[key])
        };

        Cache.create({ key: res.locals.key, text: text })
          .then(data => {
            res.locals.text = text 
            return next();
          })
          .catch(err => {
            return next({
              log: 'Error in collectionController.getCompatibility in Cache.create',
            })
          });
    })
    .then(()=> next())
    .catch(err => next(err));

}

module.exports = bloomController;