import React, { Component } from 'react';
import List from '../containers/list';
import '../App.css';

class App extends Component {
  render() {
    return (
      <div className="vertical-container">        
        <List />
      </div>
    );
  }
}

export default App;