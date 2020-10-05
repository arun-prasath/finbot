'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const chatbotDb = require('./services/connect');
const app = express();
const port = process.env.APP_SERVER_PORT;
const connectionURL = process.env.DATABASEURL;

class chatbotServer{
    constructor() {
        this.initExpress();
        this.initRoutes();
        this.initServer();
        this.initDB();
    }

    initDB(){
        chatbotDb.connect(connectionURL);
    }

    initExpress(){
        app.use(bodyParser.json());
        app.use((req,res,next) => {
            res.setHeader('Access-Control-Allow-Origin', '*');
            res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, POST, PUT, PATCH, DELETE');
            res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');
            next();
        });
    }

    initRoutes(){
        app.get('/', function (req, res) {
            let sample = { foo : 'bar'}
            res.status(201).json(sample);
        })
    }

    initServer(){
        app.listen(port, () =>console.log(`Listening on port ${port}..`));
    }
    
}

new chatbotServer();