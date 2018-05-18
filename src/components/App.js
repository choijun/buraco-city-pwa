import React, { Component } from 'react';
import List from '../containers/list';
import '../App.css';

import AppBar from 'material-ui/AppBar';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Logged from './LoggedButton';
import Login from './LoginButton';
import Map from './Map';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';

const floatingButtonStyle = {
  bottom: '25px',
  right: '25px',
  position: 'absolute'
}

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      logged: false
    };

    this.login = this.login.bind(this);
    this.logout = this.logout.bind(this);
  }

  login() {
    this.setState({logged: true});
  }

  logout() {
    this.setState({logged: false});
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className={'heeey'}>
          <AppBar
            title="Buracos City"
            showMenuIconButton={false}
            iconElementRight={this.state.logged ? <Logged logout={this.logout}/> : <Login onClick={this.login}/>}
          />
          <Map />
          <FloatingActionButton style={floatingButtonStyle}>
            <ContentAdd />
          </FloatingActionButton>
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
