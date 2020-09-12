const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");
const skills = require("./JSON/Skills.json");

app.get("/", (req, res) => {
  res.send("/about, /portfolio, /skills para ver la API.");
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

app.get("/skills", (req, res) => {
  res.json(skills);
});

const port = process.env.PORT || 4200;

// app.listen(port, () => {
//   console.log(`hola  ${port}`);
// });
