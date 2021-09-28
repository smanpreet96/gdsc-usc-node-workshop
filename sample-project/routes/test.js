let express = require('express');
let router = express.Router();

router.get('/', function(req, res, next) {
    let reply = [];
    
    let obj = {};
    obj['title'] = "Google DSC";
    obj['genres'] = "Programming";
    obj['spoken_languages'] = "Language of the gods";
    obj['release_date'] = "Whenever you are ready";
    obj['runtime'] = "As long you can run";
    obj['vote_average'] = "Pretty high";
    reply.push(obj);

    obj = {};
    obj['title'] = "Node workshop";
    obj['genres'] = "Backend";
    obj['spoken_languages'] = "Javascript";
    obj['release_date'] = "Whenever you are ready";
    obj['runtime'] = "As long you can run";
    obj['vote_average'] = "Above & beyond";
    reply.push(obj);
    
    res.header('Access-Control-Allow-Origin', "*");
    res.status(200).json(reply).end();
});

module.exports = router;