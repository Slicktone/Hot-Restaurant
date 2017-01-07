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
var reservations = [{


}];

// Routes



// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "add.html"));
});

app.get("/add", function(req, res) {
  res.sendFile(path.join(__dirname, "all.html"));
});

// Search for Specific Character (or all reservations) - provides JSON
app.get("/api/:reservations?", function(req, res) {
  var chosen = req.params.reservations;

  if (chosen) {
    console.log(chosen);

    for (var i = 0; i < reservations.length; i++) {
      if (chosen === reservations[i].routeName) {
        res.json(reservations[i]);
        return;
      }
    }

    res.json(false);
  }
  else {
    res.json(reservations);
  }
});


// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
