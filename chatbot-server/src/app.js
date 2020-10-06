'use strict';
const express = require('express');
const bodyParser = require('body-parser');
const chatbotDb = require('./services/connect');
const app = express();
const port = process.env.APP_SERVER_PORT;
const connectionURL = process.env.DATABASEURL;
const dashboardRoutes = require('./routes/dashboard');
const authRoutes = require('./routes/auth');
const accountRoutes = require('./routes/account');
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
                'user engagement' : { 'uri' : '/v1/dashboard/user_engagement', 'protected' : true },
                'drop offs' : { 'uri' : '/v1/dashboard/drop_offs','protected' : true },
                'completed users' : { 'uri' : '/v1/dashboard/completed_users', 'protected' : true }
            }
            res.status(201).json(available_routes);
        });

        app.use('/v1/jwt_auth',authRoutes);
        app.use('/v1/dashboard',dashboardRoutes);
        app.use('/v1/accounts',accountRoutes);

    }

    initServer(){
        const server = app.listen(port, () => {
            console.log('Server Running');
            // initialize socket 
            new SocketService(server);
        });
    }
    
}

new chatbotServer();