## Install
``` 
cd ~/git/testProj/
cd Frontend
npm update
``` 

## Serve to localhost:
``` 
cd ~/git/testProj/Frontend
npm update
npm audit fix
ng serve --proxy-config proxy.conf.json --open
```
- Open Browser: http://localhost:4200/.

## Deploy
```
cd ~/git/testProj/Frontend
ng build --configuration pronpm-upgrade checkduction
```
* copy files to aws from:
``~/git/testProj/Frontend/dist/Frontend``
* to
https://s3.console.aws.amazon.com/s3/buckets/test.arambeszerzes.hu?region=eu-central-1&tab=objects


## Test
``` 
cd ~/git/testProj/Frontend/src/app/_helpers
ng test --include='**/_helpers/*.spec.ts'
```

## How to start
``` 
git clone git@gitlab.com:nyilas.rp/testProj.git testProj/
cd ~/git/testProj/
cd /Frontend
npm install
npm update
npm audit fix
ng serve --proxy-config proxy.conf.json --open
``` 

## Update Versions
https://angular.io/cli/update
https://update.angular.io/

# nodejs update
``` 
node -v

npm install -g n
npm install --save --legacy-peer-deps
nvm install v16.10.0
npm update
``` 

# angular lib updates
``` 
npm i -g npm-upgrade
npm-upgrade check
npm install --save --legacy-peer-deps
``` 

## Other commands
Kill port 4200 in ubuntu
``` 
lsof -t -i:4200
kill -9 $(lsof -t -i:4200)
```
Git commands
```
git diff origin/master 
git add *
git status
git commit
(Ctrl + Y)
```

``` 
cd ~/git/testProj/.git
cat config
url = git@gitlab.com:nyilas.rp/testProj.git
``` 

ng update commands
```
ng update
ng update @angular/cli @angular/core
npm update --force
npm audit fix --force
npm install
``` 

