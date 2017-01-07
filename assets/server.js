// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");




// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));


// =============================================================
var reservation = [{


}];

// Routes


app.post('/api/view', function (req, res) {
  var newnewreservation = req.body;
  console.log(newnewreservation);
  
});





// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

// Search for Specific Character (or all Reservation) - provides JSON
app.get("/api/:Reservation?", function(req, res) {
  var chosen = req.params.Reservation;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < reservation.length; i++) {
      if (chosen === reservation[i].routeName) {
        res.json(reservation[i]);
        return;
      }
    }

    res.json(false);
  }
  else {
    res.json(reservation);
  }
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
