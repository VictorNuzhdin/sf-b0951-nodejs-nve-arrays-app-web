# sf-task951-nodejs-nve-arrays-app
For Skill Factory study project (B9, Task B9.5.1) (nodejs webapp)

<br>

### 00. Dependencies

* "express" ([npm_repo](https://www.npmjs.com/package/express))
* "nodemon" ([npm_repo](https://www.npmjs.com/package/nodemon))

### 01. Install Dependencies from package.json

```bash
$ npm install
$ npm list --depth=1

=OUTPUT:
├─┬ express@4.18.2
│ ├── accepts@1.3.8
│ ├── array-flatten@1.1.1
│ ├── body-parser@1.20.1
│ ├── content-disposition@0.5.4
│ ├── content-type@1.0.5
│ ├── cookie-signature@1.0.6
│ ├── cookie@0.5.0
│ ├── debug@2.6.9
│ ├── depd@2.0.0
│ ├── encodeurl@1.0.2
│ ├── escape-html@1.0.3
│ ├── etag@1.8.1
│ ├── finalhandler@1.2.0
│ ├── fresh@0.5.2
│ ├── http-errors@2.0.0
│ ├── merge-descriptors@1.0.1
│ ├── methods@1.1.2
│ ├── on-finished@2.4.1
│ ├── parseurl@1.3.3
│ ├── path-to-regexp@0.1.7
│ ├── proxy-addr@2.0.7
│ ├── qs@6.11.0
│ ├── range-parser@1.2.1
│ ├── safe-buffer@5.2.1
│ ├── send@0.18.0
│ ├── serve-static@1.15.0
│ ├── setprototypeof@1.2.0
│ ├── statuses@2.0.1
│ ├── type-is@1.6.18
│ ├── utils-merge@1.0.1
│ └── vary@1.1.2
└─┬ nodemon@2.0.22
  ├── chokidar@3.5.3
  ├── debug@3.2.7
  ├── ignore-by-default@1.0.1
  ├── minimatch@3.1.2
  ├── pstree.remy@1.1.8
  ├── semver@5.7.1
  ├── simple-update-notifier@1.1.0
  ├── supports-color@5.5.0
  ├── touch@3.1.0
  └── undefsafe@2.0.5
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

Screen#1: Initial "Hello World" page
![screen](_screens/01_index-page_helloWorld.png?raw=true)
