# sf-b0951-nodejs-nve-arrays-app-web
For Skill Factory study project (B9, Task B9.5.1) (nodejs webapp)

<br>

### 00. Dependencies

* "express" ([npm_repo](https://www.npmjs.com/package/express))
* "mustache-express" ([npm_repo](https://www.npmjs.com/package/mustache-express))
* "nodemon" ([npm_repo](https://www.npmjs.com/package/nodemon))
* "csvtojson" ([npm_repo](https://www.npmjs.com/package/csvtojson))
* "nve-arrays" ([npm_repo](https://www.npmjs.com/package/nve-arrays), [github_repo](https://github.com/VictorNuzhdin/sf-task951-nodejs-nve-arrays-package))

### 01. Install Dependencies from package.json

```bash
$ npm install

or manually

$ npm install express
$ npm install mustache-express
$ npm install nodemon
$ npm install csvtojson
$ npm install nve-arrays

$ npm list

=OUTPUT:
├── csvtojson@2.0.10
├── express@4.18.2
├── mustache-express@1.3.2
├── nodemon@2.0.22
└── nve-arrays@1.0.0
```

### 02. Run

```bash
$ cd src && node server.js
or
$ cd src && npm run start
or
$ cd src && npm run start.dev
or
$ docker-compose up

=OUTPUT:
> nve-arrays-app-web@1.0.0 start.dev
> nodemon
[nodemon] 2.0.22
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,json
[nodemon] starting `node server.js`
Running on http://0.0.0.0:5000

or

=OUTPUT:
[+] Running 2/2
 ✔ Network webapp_dockernet  Created                                                                                                                                                      0.2s 
 ✔ Container nodejs         Created                                                                                                                                                      0.4s 
Attaching to nodejs
nodejs  | 
nodejs  | > nve-arrays-app-web@1.0.0 start.dev
nodejs  | > nodemon
nodejs  | 
nodejs  | [nodemon] 2.0.22
nodejs  | [nodemon] to restart at any time, enter `rs`
nodejs  | [nodemon] watching path(s): *.*
nodejs  | [nodemon] watching extensions: js,mjs,json
nodejs  | [nodemon] starting `node server.js`
nodejs  | Running on http://0.0.0.0:5000
```

### 03. Stop, Clear, Checkout

```bash
$ docker-compose down
or
$ docker container stop $(docker ps -a -q) && \
docker container rm $(docker ps -a -q) && \
docker image rm $(docker image ls -q) && \
docker network rm webapp_frontend
$ docker volume rm $(docker volume ls -q)
$ docker system prune
and
$ docker images && docker ps -a && docker volume ls && docker network ls
```

### 04. Bugfixes

```bash
$ clear && docker images && docker ps -a && docker network ls && docker volume ls
$ docker images
$ docker image rm <image_id_or_name>
$ docker image rm $(docker image ls -q)
$ docker ps
$ docker ps -a
$ docker container stop <container_id_or_name>
$ docker container rm <container_id_or_name>
$ docker container stop $(docker container ls -q)
$ docker network ls
$ docker network rm <network_id_or_name>
$ docker volume ls
$ docker volume rm <volume_id_or_name>
$ docker volume rm $(docker volume ls -q)
$ docker system prune
$ docker volume rm $(docker volume ls -q)
$ docker-compose up
```

### 05. Output/Preview: http://your_node_host_ip:5000

Screen#1: Initial "Hello World" page (from v1.0.0)
![screen](_screens/01_index-page_helloWorld.png?raw=true)

Screen#2: Sample CSV data from "sampleDataCSV.csv" file<br>
![screen](_screens/02_sampleCSVdata.png?raw=true)

Screen#3: Input form
![screen](_screens/03_inputForm.png?raw=true)

Screen#4: Final result
![screen](_screens/04_outputResult.png?raw=true)
