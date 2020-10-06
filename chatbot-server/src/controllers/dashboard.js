'use strict';
const users = require('../models/user');
const chatHistory = require('../models/chatHistory');

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
    async getEngagementRate(req, res) {
        let engagedUsers = await chatHistory.find({ connectionStatus: 'engaged' }).select('userid');
        let responseObj = {
            users: []
        };

        engagedUsers.forEach(user => responseObj.users.push(user.userid))

        let totalUserCount = await users.countDocuments();
        responseObj.engagedUsersCount = engagedUsers.length;
        responseObj.totalUsersCount = totalUserCount;
        responseObj.engagementRate = (( engagedUsers.length * 100 ) / totalUserCount).toFixed(2) + '%';

        res.status(200).json(responseObj);
    }

    /**
     * Drop Rate = total users initiated a chat VS no of users who has left in between
     */
    async getDropoffRate(req, res) {
        let droppedUsers = await chatHistory.find({ connectionStatus: 'dropped' }).select('userid');
        let responseObj = {
            users: []
        };

        droppedUsers.forEach(user => responseObj.users.push(user.userid))

        let totalUserCount = await users.countDocuments();
        responseObj.droppedUsersCount = droppedUsers.length;
        responseObj.totalUsersCount = totalUserCount;
        responseObj.droppedRate = (( droppedUsers.length * 100 ) / totalUserCount).toFixed(2) + '%';

        res.status(200).json(responseObj);
    }

    /**
     * completion rate = total users initiated a chat VS no of users who has finished the thank you or goodbye intent
     */
    async getCompletionRate(req, res) {
        let completedUsers = await chatHistory.find({ connectionStatus: 'completed' }).select('userid');
        let responseObj = {
            users: []
        };

        completedUsers.forEach(user => responseObj.users.push(user.userid))

        let totalUserCount = await users.countDocuments();
        responseObj.completedUsersCount = completedUsers.length;
        responseObj.totalUsersCount = totalUserCount;
        responseObj.completedUsers = (( completedUsers.length * 100 ) / totalUserCount).toFixed(2) + '%';

        res.status(200).json(responseObj);
    }

}

module.exports = new Dashboard();