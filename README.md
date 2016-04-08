# node-deploy-script

## Requires
 - git
 - node v4
 - pm2 (`npm install -g pm2`)
 - forever (`npm install -g forever`)
 
 
## Setting up

start `deployBot.js` using `forever`, then done.

## Trigger the deploy event

The default trigger url is `http://yourdomain:3000/deploy/:appName/:branch`  

###for example:   

1. `POST` request send to `http://yourdomain:3000/deploy/helloworld/master`
2. deployBot will go to `helloworld` repository, checkout to `master` branch
3. then `git pull` to update code
