import React, { Component } from 'react';
import { Header } from './components/header/header.component';
import { ChatContainer } from './components/chatpanel/chatpanel.component';
import Passport from './services/passport';


import './App.scss';

class App extends Component {

  componentDidMount(){
    const jwt_auth_token = localStorage.getItem('jwt_auth_token');
    this.checkSession(jwt_auth_token);
  }

  checkSession(jwt_auth_token){

    /* if token exists - check for session validity , else generate a new token & user */
    if(jwt_auth_token){
      // check for session validity
      const isValid = Passport.validateSession(jwt_auth_token);
      // get user details

    }else{
      // generate a new user & access token 
      const token = Passport.generatenewToken();
    }
  }

  render(){
    return (
      <div className='App'>
        <div className="container-fluid">
          <Header></Header>
          <div className="row justify-content-md-center">
            <div className="col col-lg-9">
              <ChatContainer></ChatContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
