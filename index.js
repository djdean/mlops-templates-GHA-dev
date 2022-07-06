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
    console.log(data);
    const configYaml = yaml.load(data, 'utf8');
    core.setOutput("test", configYaml["variables"]["resource_group"]);
  });
  
} catch (error) {
  core.setFailed(error.message);
}
