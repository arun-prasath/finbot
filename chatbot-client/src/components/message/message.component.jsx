import React, { Component } from 'react';
import socketIOClient from "socket.io-client"
import './message.component.scss';
import config from "../../config/config.json";

class MessageComponent extends Component { 

    constructor(){
        super();
        this.endpoint = 'http://'+config.host+':'+config.app_server_port;
    }

    componentDidMount(){
        const socket = socketIOClient(this.endpoint);
        socket.on("greet", data => {
            console.log(data);
        });
    }

    render(){
        return (
            <div className="message-container">
                <div className="yours messages">
                    <div className="row">
                        <div className="col-sm-auto">
                            <div className="avatar pl-1">
                                <img className="fin-bot-avatar" src="https://robohash.org/7?set=set3" alt="Bot Avatar"/>
                                <i className="text-center fin-timestamp">@ 1:23 pm</i>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="row">
                                <div className="message">
                                        Hey!
                                </div>
                            </div>
                            <div className="row">
                                <div className="message">
                                    You there?
                                </div>
                            </div>
                            <div className="row">
                                <div className="message last">
                                    Hello, how's it going?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="mine messages pr-3">
                    <div className="message">
                    Great thanks!
                    </div> 
                    <div className="message last">
                    How about you?
                    </div>
                </div>
            </div>
        )
    }

}

export default MessageComponent;