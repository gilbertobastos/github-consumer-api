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
    type = "owner",
    sort = "full_name",
    direction = "asc",
    perPage = 30,
    page = 1
  ) {
    let repositoriesList;

    try {
      const res = await this.axiosInstance.get(
        this.baseApiUrl + `users/${username}/repos`,
        {
          params: {
            type: type,
            sort: sort,
            direction: direction,
            per_page: perPage,
            page: page,
          },
        }
      );
      repositoriesList = res.data.map((repository) => {
        return new GitHubApiClientRepositoryModel(
          repository.name,
          repository.description,
          repository.owner.avatar_url
        );
      });

      console.log(repositoriesList);
      return repositoriesList;
    } catch (e) {
      throw e;
    }
  }
}

module.exports = GitHubApiClient;
