var express = require('express');
var path = require('path');
var bodyparser = require('body-parser');

var app = express();
var PORT = 3000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

var currentReservations = [{

}];

var waitingList = [{

}];

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "home.html"));
});

app.get("/add", function(req, res) {
    res.sendFile(path.join(__dirname, "add.html"))
});

app.get("/view", function(req, res) {
    res.sendFile(path.join(__dirname, "view.html"))
});

app.post("/")




