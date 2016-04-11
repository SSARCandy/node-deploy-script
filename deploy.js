var cp = require('child_process');
var path = require('path');
var os = require('os');
var appDir;

var out = str => {
	console.log(str);
};

var job = (str, options) => {
	return cp.execSync(str, {cwd: appDir}).toString();
};

if (process.argv.length <= 2) {
	out('please define [app] and [branch]')
}

var appName = process.argv[2];
var appBranch = process.argv[3];
appDir = path.resolve(os.homedir(), `./${appName}`);

out(`[1] update code from ${appName}:${appBranch}`);
job(`cd ${appDir}`);
job('git pull');
job(`git checkout ${appBranch}`);
job('git pull');

out('[2] npm install & bower install');
job('npm i');
job('bower i');

out('[3] pm2 restart app');
job('pm2 restart app.js');

out('[3] done.');
