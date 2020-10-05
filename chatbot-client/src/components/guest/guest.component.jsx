import React from 'react';
import './guest.component.scss';

export const GuestCard = props => (
    <div className="guest-container">
        <img src="https://robohash.org/9?set=set2" class="rounded" alt="..."/>
        <ul class="list-group list-group-flush mt-3">
            <li class="list-group-item">Guest : 1346</li>
            <li class="list-group-item">IPv4 : 152.112.1.1</li>
            <li class="list-group-item">Timezone : Asia/Calcutta</li>
        </ul>
    </div>
);


