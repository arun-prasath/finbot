import React, { Component } from 'react';
import { GuestCard } from '../guest/guest.component';
import { Messenger } from '../messenger/messenger.component';
import './chatpanel.component.scss'

export const ChatContainer = props => (
    
    <div class="card fin-chat-container">
        <div class="card-body pt-0">
            <div class="row">
                <div class="col-md-auto">
                    <GuestCard></GuestCard>
                </div>
                <div class="col-sm">
                    <Messenger></Messenger>
                </div>
            </div>
        </div>
    </div>
);