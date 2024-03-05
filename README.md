# Name of the project &middot; [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg?style=flat-square)](https://github.com/Wawrzynn/todo-react/blob/main/LICENSE)

A todo app for managing tasks where user can create and mark finished and unfinished tasks. Project has its frontend written in React.js and backend using Express.js.

## Installing / Getting started

To run this project Node.js and npm are needed.


### Frontend
In order to install and run frontend after cloning the repo:

```shell
cd client
npm install
npm run dev
```
This commands navigate into client folder and install all required dependencies using npm. Than the development script is initiated and the project is available at [localhost:5137](http://localhost:5173/
).

### Backend
In order to install and run backend after cloning the repo:

```shell
cd server
npm install
npm run dev
```
This commands navigate into server folder and install all required dependencies using npm. Than the development script is initiated and the project is available at [localhost:8080](http://localhost:8080/
).

### Database
For its database project is using MongoDB. To link backend with database a mongodbURI is needed. The link must be generated from exisiting localhost MongoDB or MongoDB Atlas. Such link must be placed in a .env file with name MONGODB_URI.

```shell
cd server
touch .env
MONGODB_URI = your mongodb url
```
This commands help to setup the mongodb url. In order to obtain url a mongodb database instance must be created.


## Developing

### Built With
Frontend is build with JavaScript, React, TailwindCSS, Vite and Axios. Backend is build with JavaScript, Node.js, Express.js and Mongoose. Database used in this project is MongoDB.

### Prerequisites
To run the project LTS version of Node.js and npm is required. It can be found here [Node.js](https://nodejs.org/en). All other libraries used will be downoladed during project start setup using npm.

### Setting up Dev

After setting up project .env file needs to be added in order to support endpoints.
```shell
cd client
touch .env
VITE_LOCALHOST_URL = http://localhost:8080
```
This operation allows axios to reach endopints that are set up by backend. The localhost port may depend on your configuration. Default value for this project is 8080. After setting up both .env files project is ready to be developed onwards.


## Licensing

Project is using MIT license.
