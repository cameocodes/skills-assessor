import React, { Component } from 'react';
import { HashRouter } from 'react-router-dom'
import './App.css';

import Header from './components/Header'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <Header/>        
        </HashRouter>
      </div>
    );
  }
}

export default App;
