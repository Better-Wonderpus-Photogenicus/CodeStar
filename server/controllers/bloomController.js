const dotenv = require('dotenv').config();
const bloomController = {};

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
        text = text.slice(0, text.length-4);
        // const newText = text.replace(/<p>(.*?)<p>/g, '')
        let pointer = 0;
        for (let i = 0 ; i < text.length; i++) {
            if (text[i] === '>') pointer = i;
        }
        text = text.slice(pointer+1);
        res.locals.text = text})
    .then(()=> next())
    .catch(err => next(err));

}

module.exports = bloomController;