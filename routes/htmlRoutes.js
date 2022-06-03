// Dependencies
const express = require("express");
const path = require("path");

const app = express();

// HTML GET Requests

app.get("/notes", function (request, response) {
  response.sendFile(path.join(__dirname, "../public/notes.html"));
});

app.get("*", function (request, response) {
  response.sendFile(path.join(__dirname, "../public/index.html"));
});

module.exports = app;
