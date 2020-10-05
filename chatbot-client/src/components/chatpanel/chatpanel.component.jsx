import React from 'react';
import { GuestCard } from '../guest/guest.component';
import { Messenger } from '../messenger/messenger.component';
import './chatpanel.component.scss'

export const ChatContainer = props => (
    
    <div className="card fin-chat-container">
        <div className="card-body pt-0">
            <div className="row">
                <div className="col-md-auto">
                    <GuestCard></GuestCard>
                </div>
                <div className="col-sm">
                    <Messenger></Messenger>
                </div>
            </div>
        </div>
    </div>
);