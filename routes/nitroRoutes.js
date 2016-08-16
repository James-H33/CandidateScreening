const express     = require('express');
const router      = express.Router();
const request     = require('request');


// Client Request
router.get('/clients', function(req, res, next) {

    var options = {
        url: 'http://armdev.nitrotransit.com/NitroServer/Screening/Client/List',
        headers: {
            'ApiKey': '55AE3655-9C10-46FA-B24E-281638C7421E'
        }
    }


    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            var data = info.Payload.Data;
            console.log(info.Payload.Data);
            res.render('nitro/data', { title: 'Client', data: data });
        }
        console.log('Error message: ' + error);
    });
});


// Company Request
router.get('/company', function(req, res, next) {

    var options = {
        url: 'http://armdev.nitrotransit.com/NitroServer/Screening/Company/List',
        headers: {
            'ApiKey': '55AE3655-9C10-46FA-B24E-281638C7421E'
        }
    }


    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            var data = info.Payload.Data;
            console.log(info.Payload.Data);
            res.render('nitro/data', { title: 'Company', data: data });
        }
        console.log('Error message: ' + error);
    });
});

router.post('/new/company', function(req, res, next) {
    res.render('nitro/form');
});


module.exports = router;
