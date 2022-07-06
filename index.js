const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('js-yaml');
try {
  const configData = yaml.load(core.getInput('config'), 'utf8');
  core.setOutput("test", configData );
} catch (error) {
  core.setFailed(error.message);
}
