const express = require("express");
const path = require("path");
const notes = require("./db/db.json");

const PORT = 3001;

const app = express();

app.listen(PORT, () =>
  console.log(`Express server is start listening on port ${PORT}!`)
);
