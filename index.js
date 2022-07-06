const core = require('@actions/core');
const github = require('@actions/github');
try {
  // `who-to-greet` input defined in action metadata file
  
  const configData = core.getInput('config');
  const configJSON = JSON.parse(configData);
  core.setOutput("test", configJSON.test);
} catch (error) {
  core.setFailed(error.message);
}
