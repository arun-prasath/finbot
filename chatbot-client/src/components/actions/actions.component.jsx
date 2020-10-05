import React from 'react';
import './actions.component.scss';
import { faKeyboard, faPaperPlane } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const ActionComponent = props => (
    <div className="row">
        <div className="col-sm-auto">
            <div className="fin-input-icon my-2">
                <FontAwesomeIcon icon={faKeyboard} size="3x" pull="right" className="mt-1 fin-keyboard" ></FontAwesomeIcon>
            </div>
        </div>
        <div className="col-lg">
            <input type="text" className="form-control my-3 fin-input" placeholder="type a message..." aria-label="enter your message" aria-describedby="inputGroup-sizing-lg"/>
        </div>
        <div className="col-sm-auto">
            <div className="my-2">
                <button type="button" class="btn btn-md m-2 fin-btn-send">
                    <FontAwesomeIcon icon={faPaperPlane} size="1x" className="fin-paperplane m-0 p-0" ></FontAwesomeIcon>
                    <span className="px-3">Send</span>
                </button>
            </div>
        </div>
    </div>
);