'use strict';
const users = require('../models/user');
const chatHistory = require('../models/chatHistory');

class Dashboard{

    constructor(){}

    /**
     * The users who engaged with the bot.
     */
    async getUserEngagement(req, res) {
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
     * The users who left the chat conversation in-between.
     */
    async getDropOffs(req, res) {
        let droppedUsers = await chatHistory.find({ connectionStatus: 'dropped' }).select('userid');
        let responseObj = {
            users: []
        };

        droppedUsers.forEach(user => responseObj.users.push(user.userid))

        let totalUserCount = await users.countDocuments();
        responseObj.droppedUsersCount = droppedUsers.length;
        responseObj.totalUsersCount = totalUserCount;
        responseObj.dropOffRate = (( droppedUsers.length * 100 ) / totalUserCount).toFixed(2) + '%';

        res.status(200).json(responseObj);
    }

    /**
     * The users who completed the chat conversation
     */
    async getCompletedUsers(req, res) {
        let completedUsers = await chatHistory.find({ connectionStatus: 'completed' }).select('userid');
        let responseObj = {
            users: []
        };

        completedUsers.forEach(user => responseObj.users.push(user.userid))

        let totalUserCount = await users.countDocuments();
        responseObj.completedUsersCount = completedUsers.length;
        responseObj.totalUsersCount = totalUserCount;
        responseObj.completionRate = (( completedUsers.length * 100 ) / totalUserCount).toFixed(2) + '%';

        res.status(200).json(responseObj);
    }

}

module.exports = new Dashboard();