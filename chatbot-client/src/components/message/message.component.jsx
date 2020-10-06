import React, { Component } from 'react';
import './message.component.scss';


class MessageComponent extends Component {

    componentDidUpdate(){

    }

    render(){
        return (
            <div className="message-container">
                <div className="mine messages pr-3 pt-1">
                    <div className="animate__animated animate__fadeInUp animate__delay-1s message">
                    Great thanks!
                    </div> 
                    <div className="animate__animated animate__fadeInUp animate__delay-1s message last">
                    How about you?
                    </div>
                </div>
                <div className="bot messages">
                    <div className="row">
                        <div className="col-sm-auto">
                            <div className="avatar pl-1">
                                <img className="fin-bot-avatar" src="https://robohash.org/7?set=set3" alt="Bot Avatar"/>
                                <i className="text-center fin-timestamp">@ 1:23 pm</i>
                            </div>
                        </div>
                        <div className="col-lg-auto">
                            <div className="row">
                                <div className="animate__animated animate__fadeInUp animate__delay-1s message">
                                        Hey!
                                </div>
                            </div>
                            <div className="row">
                                <div className="animate__animated animate__fadeInUp animate__delay-1s message">
                                    You there?
                                </div>
                            </div>
                            <div className="row">
                                <div className="animate__animated animate__fadeInUp animate__delay-1s message last">
                                    Hello, how's it going?
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        )
    }

}

export default MessageComponent;