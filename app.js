const express    = require('express');
const bodyParser = require('body-parser');
const request    = require('request');


// Declare var app
const app = express();


// Routes
const indexRoutes = require('./routes/indexRoutes');
const nitroRoutes = require('./routes/nitroRoutes')

const port = process.env.PORT || 3000;
const portIP = process.env.IP;


// express settings
app.set('view engine', 'pug');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));


// Use Routes
app.use('/', indexRoutes);
app.use('/', nitroRoutes);


app.listen(port, portIP, function() {
  console.log('Server has started...');
});
