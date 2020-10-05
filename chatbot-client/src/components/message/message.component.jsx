import React, { Component } from 'react';
import './message.component.scss';

export const Message = props => (
    <div className="message-container">
        <div className="chat-container">
            <div className="input-group">
                <input type="text" className="form-control" placeholder="Enter your message" aria-label="Enter your message" aria-describedby="send-message"/>
                <div className="input-group-append">
                    <button className="btn btn-primary" type="button" id="send-message">Send</button>
                </div>
            </div>
        </div>
        
    </div>
);