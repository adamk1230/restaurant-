// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Star Wars Characters (DATA)
// =============================================================
var tables = [{
  name: "Adam Kwan",
  phone: "555-555-5555",
  email: "adam@yoda.com",
  id: "AK Money"
}, {
  name: "Vivian Fung",
  phone: "777-777-7777",
  email: "vivian@yoda.com",
  id: "Pinky"
}, {
  name: "Angelina Jolie",
  phone: "232-555-4412",
  email: "Angeline@yoda.com",
  id: 2000
}, {
  name: "Mila Kunis",
  phone: "235-515-8987",
  email: "mila@yoda.com",
  id: "M. Kool"
}, {
  name: "Scarlet Johanson",
  phone: 619-716-7458,
  email: "scar@yoda.com",
  id: "ScarJo"
}];

var waitlist = [];
// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/reserve", function(req, res) {
  res.sendFile(path.join(__dirname, "reserve.html"));
});

app.get("/tables", function(req, res) {
  res.sendFile(path.join(__dirname, "tables.html"));
});


// Create New Characters - takes in JSON input
app.post("/api/new", function(req, res) {
  var newcharacter = req.body;

  console.log(newcharacter);
  if (tables.length < 5) {
    tables.push(newcharacter);
    res.json(true);
  }

  else {
    waitlist.push(newcharacter);
    res.json(false);
  }
  

  
});

app.get("/api/tables", function(req, res) {
 
    res.json(tables);
  
});

app.get("/api/waitlist", function(req, res) {

    
    res.json(waitlist);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});
