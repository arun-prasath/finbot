const socket = require('socket.io');
const jwtAuth = require('../helpers/jwtAuth');
const axios = require('axios');

class SocketService {

    constructor(server){
        this.io = socket(server);
        this.init();
    }
     
    init = () => {
        this.io.on("connection",(socket)=>{
            console.log('Socket Connection Estabished');
            this.message(socket);
            this.typing(socket);
            this.disconnect(socket);
        });
    }

    disconnect = (socket) => {
        socket.on("disconnect", () => {
            console.log('User disconnected');
        });
    }

    message = (socket) => {

        socket.on("message", async (data) => {
            let token = data.token;
            // verify token 
            let auth = new jwtAuth();
            let guestDetails = auth.decode(token);
            let audience = process.env.CLIENT_HOST_URL;
            auth.setOptions('finchatbot',guestDetails.payload.userid,audience);
            try{
                let result = auth.verifyToken(token);
                // Store Message to User Chat Session
                console.log(result);

                // Send Message to Rasa Server for NLU
                let endpoint = 'http://rasa:'+process.env.RASA_PORT+'/webhooks/rest/webhook'
                let response = await axios.post(endpoint, {
                    sender: token,
                    message: data.message
                });
                response.data.forEach(data => {
                    socket.emit('reply', data.text);
                });
            }catch(err){
                console.log(err);
                socket.emit("reply", 'JWT Authentication Failed !!');
            }
            
        })
    }

    typing = (socket) => {
        socket.on("typing", (data) => {
            console.log(data);
        })
    }
}

module.exports = SocketService;