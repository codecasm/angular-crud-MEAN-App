//creating a node server
const express = require('express'),
    bodyParser = require('body-parser'),
    cors = require('cors'),
    mongoose = require('mongoose');

//file inclusions
var config = require('./db');

var app = express();

app.use(bodyParser.json())
app.use(cors());


//Setting headers for Cross Origin
app.use('/*', function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,OPTIONS");
    res.header("Access-Control-Allow-Headers", "Content-type,Accept,X-Access-Token,X-Key");

    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.use('/', require('./route'));

//if no route found
app.use(function (req, res, next) {
    res.status(404).json({ status: "Page not found" }).end();
});


app.set('port', config.port);

var server = app.listen(app.get('port'), function () {
    console.log(`Listening to port :${server.address().port}`);
})

mongoose.connect(config.mongo.url, function (err, database) {
    if (err) {
        console.log(err);
        process.exit(1);
    }

    db = database;
    console.log("database connection is ready to communicate");

});