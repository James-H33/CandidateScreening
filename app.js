const express    = require('express');
const bodyParser = require('body-parser');
const request    = require('request');


// Declare var app
const app = express();


// Routes
const indexRoutes = require('./routes/indexRoutes');
const dataRoutes  = require('./routes/dataRoutes');
const sqlRoutes   = require('./routes/sqlRoutes');

const port = process.env.PORT || 3000;
const portIP = process.env.IP;


// express settings
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Use Routes
app.use('/', indexRoutes);
app.use('/', dataRoutes);
app.use('/', sqlRoutes);


app.listen(port, portIP, function() {
  console.log('Server has started...');
});
