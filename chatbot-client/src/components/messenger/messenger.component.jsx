import React, { Component } from 'react';
import './messenger.component.scss';
import { ActionComponent } from '../actions/actions.component';
import { MessageComponent } from '../message/message.component';

export const Messenger = props => (
    <div className="messenger-container">
        <div className="chat-container">
            <MessageComponent></MessageComponent>
            <div className="chat-messenger">
                <ActionComponent></ActionComponent>
            </div>
        </div>
    </div>
);