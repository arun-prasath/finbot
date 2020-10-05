import React, { Component } from 'react';
import { Header } from './components/header/header.component';
import { ChatContainer } from './components/chatpanel/chatpanel.component';
import './App.scss';

class App extends Component {

  componentDidMount(){

  }

  render(){
    return (
      <div className='App'>
        <div class="container-fluid">
          <Header></Header>
          <div class="row justify-content-md-center">
            <div class="col col-lg-9">
              <ChatContainer></ChatContainer>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App;
