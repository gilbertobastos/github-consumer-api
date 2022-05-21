const express = require('express');
const bodyParser = require('body-parser');

const GitHubApiClientController = require('./src/controllers/GitHubApiClientController.js');
const gitHubApiClientController = new GitHubApiClientController();

const app = express();
app.use(bodyParser.json());
app.use('/repositories/:username', gitHubApiClientController.getRepositoriesByUser);

module.exports = app;