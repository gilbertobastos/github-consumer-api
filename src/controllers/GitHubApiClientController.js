const GitHubApiClient = require("../services/GithubApiClient.js");

let gitHubApiClientInstance;

class GitHubApiClientController {
  constructor(baseApiUrl) {
    gitHubApiClientInstance = new GitHubApiClient(baseApiUrl);
  }

  async getRepositoriesByUser(req, res, next) {
    try {
      let username = req.params.username;
      let { sorting, language, maxResults } = { ...req.query };

      let repoList = await gitHubApiClientInstance.getRepositoriesInfoByUser(
        username,
        sorting,
        language,
        maxResults
      );

      res.send(repoList);
      res.end();
    } catch (e) {
      throw e;
    }
  }
}

module.exports = GitHubApiClientController;
