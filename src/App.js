import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import HowItWorks from './components/HowItWorks'

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <React.Fragment>
            <Header/>  
            {/* <Route path="/" exact component={Main} /> */}
            <Route path="/howitworks" component={HowItWorks} />
          </React.Fragment>
        </HashRouter>
      </div>
    );
  }
}

export default App;
