class GitHubApiClientRepositoryModel {
  constructor(name, description, language, avatarUrl) {
    this.name = name;
    this.description = description;
    this.language = language;
    this.avatarUrl = avatarUrl;
  }
}

module.exports = GitHubApiClientRepositoryModel;