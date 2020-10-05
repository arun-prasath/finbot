const socket = require('socket.io');

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
        socket.on("message", async (msg) => {
            socket.emit("message", 'Welcome to chat');
        })
    }

    typing = (socket) => {
        socket.on("typing", (data) => {
            console.log(data);
        })
    }
}

module.exports = SocketService;