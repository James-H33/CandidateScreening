const express = require('express');
const router = express.Router();
const mysql = require('mysql');

const db = mysql.createConnection({
    host       :   'localhost',
    user       :   'root',
    password   :     '',
    database   :   'nitrosolutions'
});

router.get('/customers/:id', function(req, res, next) {

    var pageEnd = req.params.id * 10;
    var pageStart = pageEnd - 10;
    var dataTable = 'customers'

    getSqlData(dataTable, pageStart, pageEnd, function(err, data) {
        if(err) console.log(err);
        console.log(data);
        res.render('sql/sql', { data: data, customers: true, items: false });
    });
});

router.get('/items/:id', function(req, res, next) {
    var pageEnd = req.params.id * 10;
    var pageStart = pageEnd - 10;
    var dataTable = 'items';

    getSqlData(dataTable, pageStart, pageEnd, function(err, data) {
        if (err) console.log(err);
        console.log(data);
        res.render('sql/sql', { data: data, customers: false, items: true });
    });
});


module.exports = router;



function getSqlData(table, start, end, cb) {
    var sql = 'SELECT * FROM '+table+' WHERE id BETWEEN '+start+' AND '+end+'';

    db.query(sql, function(err, results) {
        if(err) console.log(err);
        return cb(null, results)
    });
}



// SELECT customers.id, customers.name, items.name, items.cost
// FROM customers, items
// WHERE customers.id = seller_id
// ORDER BY customers.id
