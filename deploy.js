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
out('');

//out(`[2] pm2 delete ${appName}`);
//job(`pm2 delete ${appName}`);
//job(`pm2 start ${appDir}/${appName}.js`);
//out('');

out('[3] done.');
