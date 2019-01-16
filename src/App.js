import React, { Component } from 'react';
import { HashRouter, Route } from 'react-router-dom'
import './App.css';

import Header from './components/Header'
import Main from './components/Main'
import HowItWorks from './components/HowItWorks'
import StepOne from './components/StepOne';

class App extends Component {
  render() {
    return (
      <div className="App">
        <HashRouter>
          <React.Fragment>
            <Header/>
            <Route path="/" exact component={Main} />
            <Route path="/stepone" component={StepOne}/>
            <Route path="/howitworks" component={HowItWorks} />
          </React.Fragment>
        </HashRouter>
      </div>
    );
  }
}

export default App;