const express = require("express");
const path = require("path");
const fs = require("fs");
const bodyParser = require("body-parser");
const PORT = 8080;
const heroFile = __dirname + "/heroes.json";
const teamsFile = __dirname + "/teams.json";

const app = express();

app.use(bodyParser.json());

app.get("/heroes", (req, res) => {
  fs.readFile(heroFile, (err, data) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.status(200).send(JSON.parse(data));
  })
});

app.post("/heroes", (req, res) => {
  fs.readFile(heroFile, (err, data) => {
    const heroes = JSON.parse(data).data;
    console.log(heroes);
    const newHero = req.body;
    newHero.id = heroes.length + 1;
    heroes.push(newHero);
    fs.writeFile(heroFile,JSON.stringify({data: heroes}), () => {
      res.setHeader("Access-Control-Allow-Origin", "*");
      res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
      res.status(200).send("Received hero: " + req.body.name);
    });
  })
});

app.get("/teams", (req, res) => {
  fs.readFile(teamsFile, (err, data) => {
    console.log(data);
    res.status(200).send(JSON.parse(data));
  })
});

app.listen(PORT, () => {
  console.log("Listening...");
});