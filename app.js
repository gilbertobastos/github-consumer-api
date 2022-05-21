const express = require("express");
const bodyParser = require("body-parser");

const GitHubApiClientController = require("./src/controllers/GitHubApiClientController.js");
const gitHubApiClientController = new GitHubApiClientController();

const app = express();
app.use(bodyParser.json());

const API_KEY = "sLrPrztqgLqrAYpgBCExDDweLWaUsHzP";
app.use((req, res, next) => {
  if (req.get('API_KEY') !== API_KEY) {
    throw new Error('Unauthorized');
  }
  next();
});

app.use("/repositories/:username", gitHubApiClientController.getRepositoriesByUser);
app.use((err, req, res, next) => {res.status(400).send({ error: err.message });});

module.exports = app;
