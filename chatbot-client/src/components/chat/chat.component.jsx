import React, { Component } from 'react';
import { GuestCard } from '../guest/guest.component';
import { Message } from '../message/message.component';
import './chat.component.scss'

export const ChatContainer = props => (
    
    <div class="card fin-chat-container">
        <div class="card-body p-0">
            <div class="row">
                <div class="col-md-auto">
                    <GuestCard></GuestCard>
                </div>
                <div class="col-sm">
                    <Message></Message>
                </div>
            </div>
        </div>
    </div>
);