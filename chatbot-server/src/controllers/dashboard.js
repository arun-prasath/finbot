'use strict';
const users = require('../models/user');

class Dashboard{

    constructor(){}

    async getAllUsers(req, res, next){
        users.find().then(items => {
            res.status(200).json(items);
        })
    }

    /**
     * Engagement Rate = total users visiting the site VS no of users who has initiated the chat
     */
    getEngagementRate(){
        
    }

    /**
     * Drop Rate = total users initiated a chat VS no of users who has left in between
     */
    getDropoffRate(){

    }

    /**
     * completion rate = total users initiated a chat VS no of users who has finished the thank you or goodbye intent
     */
    getCompletionRate(){

    }

}

module.exports = new Dashboard();