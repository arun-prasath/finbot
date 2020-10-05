'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const chatbotDb = require('./services/connect');
const app = express();
const port = process.env.APP_SERVER_PORT;
const connectionURL = process.env.DATABASEURL;
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');
const SocketService = require('./services/socket');

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
            
            let available_routes = { 
                'new session' : { 'uri' : '/v1/jwt_auth/new_session', 'protected' : false },
                'validate session' : { 'uri' : '/v1/jwt_auth/verify_session', 'protected' : false },
                'engagement rate' : { 'uri' : '/v1/dashboard/engagement_rate', 'protected' : true },
                'drop off rate' : { 'uri' : '/v1/dashboard/drop_off_rate','protected' : true },
                'completion rate' : { 'uri' : '/v1/dashboard/completion_rate', 'protected' : true },
                'total users' : { 'uri' : '/v1/dashboard/all_users', 'protected' : true }
            }
            res.status(201).json(available_routes);
        });

        app.use('/v1/jwt_auth',authRoutes);
        app.use('/v1/dashboard',dashboardRoutes);

    }

    initServer(){
        const server = app.listen(port, () => {
            // initialize socket 
            new SocketService(server);
        });
    }
    
}

new chatbotServer();