import React, { Component } from 'react';
import './message.component.scss';

export const MessageComponent = props => (
    <div className="message-container">
        <div class="yours messages">
            <div class="row">
                <div className="col-sm-auto">
                    <div className="avatar pl-1">
                        <img className="fin-bot-avatar" src="https://robohash.org/7?set=set3" alt="Bot Avatar"/>
                        <i className="text-center fin-timestamp">@ 1:23 pm</i>
                    </div>
                </div>
                <div className="col-lg-auto">
                    <div class="row">
                        <div class="message">
                                Hey!
                        </div>
                    </div>
                    <div class="row">
                        <div class="message">
                            You there?
                        </div>
                    </div>
                    <div class="row">
                        <div class="message last">
                            Hello, how's it going?
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="mine messages pr-3">
            <div class="message">
            Great thanks!
            </div> 
            <div class="message last">
            How about you?
            </div>
        </div>
    </div>
);