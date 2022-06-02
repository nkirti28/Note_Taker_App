//Dependencies -
const express = require("express");
const fs = require("fs");

//import uuid from npm package module
const { v4: uuidv4 } = require("uuid");

const app = express();

//ROUTING

app.get("/api/get/notes",(res,req)=>{

console.log("\n\nExecuting GET notes request");



});