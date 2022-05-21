const axios = require("axios").default;
const GitHubApiClientRepositoryModel = require("../models/GitHubApiClientRepositoryModel.js");

class GitHubApiClient {
  constructor(baseApiUrl = "https://api.github.com/") {
    this.baseApiUrl = baseApiUrl;
    this.axiosInstance = axios.create({
      baseURL: this.baseApiUrl,
      headers: { accept: "application/vnd.github.v3+json" }, // Recommended by GitHub
    });
  }

  async getRepositoriesInfoByUser(
    username,
    sorting = "asc",
    language,
    maxResults
  ) {
    try {
      const res = await this.axiosInstance.get(
        this.baseApiUrl + `users/${username}/repos`,
        {
          params: {
            sort: "created",
            direction: sorting,
          },
        }
      );

      let repositoriesList = res.data.map((repository) => {
        return new GitHubApiClientRepositoryModel(
          repository.name,
          repository.description,
          repository.language,
          repository.owner.avatar_url
        );
      });

      /* Filtering the repos based on the language */
      if (language) {
        repositoriesList = repositoriesList.filter(
          (repository) => repository.language === language
        );
      }

      /* Slicing if necessary... */
      if (maxResults) {
        repositoriesList = repositoriesList.slice(0, maxResults);
      }

      return repositoriesList;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = GitHubApiClient;
