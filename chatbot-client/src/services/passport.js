const axios = require('axios');
const config = require('../config/config.json');
const host = config.host;
const app_server_port = config.app_server_port;

export default class Passport {
    static validateSession = (jwt_token) => {

        return null;
    }

    static generatenewToken = () => {

        let endpoint = 'http://'+host+':'+app_server_port+'/v1/jwt_auth/new_session';
        axios.get(endpoint,{
            params: {
                timezone : 'Asia/Calcutta'
            }
        }).then((response) => {
            // handle success
            console.log(response);
        })
        .catch((error) => {
            // handle error
            console.log(error);
        })
        .then(() => {
            // always executed
        });
    }

}