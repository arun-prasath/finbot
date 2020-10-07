import React from 'react';
import './botMessage.component.scss';

export const BotMessage = props => (
    <div className="media">
        <div className="w-15 d-inline-block animate__animated animate__fadeInUp animate__delay-1s">
            <img className="align-self-center" src="https://robohash.org/111?set=set3&size=75x75" alt="Bot Avatar"/>
        </div>
        <div className="w-75 d-inline-block pr-2 media-body animate__animated animate__fadeInUp animate__delay-1s finbot-msg">
            {props.message}
        </div>
    </div>
);