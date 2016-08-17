const express     = require('express');
const router      = express.Router();
const request     = require('request');


// Client Request
router.get('/users', function(req, res, next) {
    var query = 0;

    var options = {
        url: 'http://jsonplaceholder.typicode.com/users',
    }

    request(options, function(error, response, body) {
        if (!error && response.statusCode == 200) {
            var info = JSON.parse(body);
            var data = info;
            console.log(data);
            res.render('data/data', { title: 'Users', data: data });
        }
        console.log('Error message: ' + error);
    });

});



module.exports = router;
