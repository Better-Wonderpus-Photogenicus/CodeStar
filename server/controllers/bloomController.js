const dotenv = require('dotenv').config();
const cache = require('../models/cacheModel');
const bloomController = {};

bloomController.checkCache = async (req, res, next) => {
  const { id1, id2 } = req.body;
  const key = [id1, id2].sort().join();

  const found = await cache.findOne({ key });
  // look up what findOne returns
  // if it returns something, then pass that in to the user
  // if not, move on to getcompatibility from API
  // also write a storecompatibility function for when we get one :)
  // also error handling

}

bloomController.getCompatibility = (req, res, next) => {
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
        text = text.replace(/<([^;]*)>/, '')
        //REPLACES THE BROKEN APOSTROPHE
        text = text.replace(/&([^;]*);/, "'")

        // let pointer = 0;
        // for (let i = 0 ; i < text.length; i++) {
        //     if (text[i] === '>') pointer = i;
        // }
        // text = text.slice(pointer+1);
        res.locals.text = text})
    .then(()=> next())
    .catch(err => next(err));

}

module.exports = bloomController;