const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());

const about = require("./JSON/About.json");
const portfolio = require("./JSON/Portfolio.json");

app.get("/", (req, res) => {
  res.send("/about o /portfolio para ver la API.");
});

app.get("/about", (req, res) => {
  res.json(about);
});

app.get("/portfolio", (req, res) => {
  res.json(portfolio);
});

const port = process.env.PORT || 4200;

app.listen(port, () => {
  console.log(`hola  ${port}`);
});
