var cp = require('child_process');
var path = require('path');
var os = require('os');
//var working_path = path.resolve(__dirname, './');

var out = str => {
	console.log(str);
};

var job = (str, options) => {
	return cp.execSync(str, {}).toString();
};

if (process.argv.length <= 2) {
	out('please define [app] and [branch]')
}

var appName = process.argv[2];
var appBranch = process.argv[3];
var appDir = path.resolve(os.homedir(), `./${appName}`);

out('[1] update code from github');
job(`cd ${appDir}`);
job('git pull');
job(`git checkout ${appBranch}`);
out('');

//out('[2] pm2 restart app');
//job(`pm2 restart ${appName}`);
out('[2] done.');
