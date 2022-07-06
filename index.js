const core = require('@actions/core');
const github = require('@actions/github');
const yaml = require('js-yaml');
try {
  const configData = core.getInput('config');
  fs.readFile(configData, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
  const configYaml = yaml.load(configData, 'utf8');
  console.log(configYaml);
  core.setOutput("test", configYaml["variables"]["resource_group"]);
} catch (error) {
  core.setFailed(error.message);
}
