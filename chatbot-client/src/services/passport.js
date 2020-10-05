const axios = require('axios');
const config = require('../config/config.json');
const host = config.host;
const app_server_port = config.app_server_port;

export default class Passport {
    constructor(){
        this.baseUrl = 'http://'+host+':'+app_server_port;
    }
    static validateSession = async (jwt_token) => {
        try {
            let endpoint = this.baseUrl+'/v1/jwt_auth/verify_session';
            const response = await axios.post(endpoint,{
                token : jwt_token
            });
            return response;
        }catch(error){
            return error;
        }
    }

    static generatenewToken = async () => {
        try{
            let endpoint = this.baseUrl+'/v1/jwt_auth/new_session';
            const response = await axios.get(endpoint,{
                params: {
                    timezone : 'Asia/Calcutta'
                }
            });
            return response;

        }catch(error){
            return error;
        }
    }

}