import React, { Component } from 'react';
import './messenger.component.scss';
import ActionComponent from '../actions/actions.component';
import MessageComponent from '../message/message.component';
import config from "../../config/config.json";
import socketIOClient from "socket.io-client";
import SocketClient from '../../services/socketclient';

class Messenger extends Component {
    
    constructor(){
        super();
        this.endpoint = 'http://'+config.host+':'+config.app_server_port;
        this.state = {
            chatHistory : []
        }
    }

    componentDidMount(){
        this.initSocketConnection();
    }

    relay = (message) => {
        // Add messages to State & Push messages to UI screen 
        console.log(message);
        let chat_message = {
            timestamp : new Date().toUTCString(),
            message : message,
            token : localStorage.getItem('jwt_auth_token')
        }

        // Push messages to server
        let socketService = new SocketClient(this.socket);
        socketService.sendMessage('message',message);
        
    }

    initSocketListeners = (socket) => {
        socket.on("reply",this.handleBotResponse);
    }

    handleBotResponse = (data) =>{
        // Add messages to state & Push messages to UI screen 
        console.log(data);
    }

    initSocketConnection = async () => {
        const socket = socketIOClient(this.endpoint);
        this.socket = socket;
        this.initSocketListeners(socket);
    }

    render(){
        const { socket, chatHistory } = this.state;
        return (
            <div className="messenger-container">
                <div className="chat-container">
                    <MessageComponent chatMessages={chatHistory}></MessageComponent>
                    <div className="chat-messenger">
                        <ActionComponent relayMessage={this.relay}></ActionComponent>
                    </div>
                </div>
            </div>
        )
    }
}

export default Messenger;