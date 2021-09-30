let fetch = require('node-fetch');
let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    fetch('https://dog.ceo/api/breeds/image/random').then(response => response.json()).then(jsonObject => {
        res.header('Access-Control-Allow-Origin', "*");
        res.status(200).json(jsonObject).end();
    });
});

module.exports = router;