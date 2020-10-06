import React from 'react';
import './botMessage.component.scss';

export const BotMessage = props => (
    <div className={`${props.context} messages`}>
        <div className="row h-100">
            <div className="col-sm-auto p-0 m-0">
                <div className="avatar pl-2 animate__animated animate__fadeInUp animate__delay-1s">
                    <img className="fin-bot-avatar" src="https://robohash.org/111?set=set3&size=75x75" alt="Bot Avatar"/>
                </div>
            </div>
            <div className="col-lg-auto p-0 m-0">
                <div className="row h-100">
                    <div className="my-auto animate__animated animate__fadeInUp animate__delay-1s message">
                        {props.message}
                    </div>
                </div>
            </div>
        </div>
    </div>
);