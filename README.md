# node-deploy-script

## Requires
 - pm2 
 - node v4
 - git
 
 
## Setting up

start `deployBot.js` using `pm2` or whatever, then done.

## Trigger the deploy event

The default trigger url is `http://yourdomain:3000/deploy/:appName/:branch`  

###for example:   

1. `POST` request send to `http://yourdomain:3000/deploy/helloworld/master`
2. deployBot will go to `helloworld` repository, checkout to `master` branch
3. then `git pull` to update code
