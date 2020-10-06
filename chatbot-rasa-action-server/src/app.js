'use strict';
const express = require('express');
const app = express();
const port = process.env.RASA_ACTION_SERVER_PORT || 5055;
const actionRoutes = require('./routes/action')

class ChatbotActionServer {
    constructor() {
        this.initRoutes();
        this.initServer();
    }

    initRoutes() {
        app.use('/webhook', actionRoutes);
    }

    initServer() {
        app.listen(port, () => console.log(`Listening on port ${port}..`));
    }
}

new ChatbotActionServer();