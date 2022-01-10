module.exports = {
  branches: 'master',
  repositoryUrl: 'https://github.com/KG-Gurley/react_workflow',
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    // '@semantic-release/npm',
    '@semantic-release/github'
  ]
};
