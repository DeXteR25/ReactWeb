import React, { Component } from 'react';
//import logo from './logo.svg';
import { BrowserRouter as Router , Route } from 'react-router-dom';
import './App.css';

import home from './pages/home.jsx';

class App extends Component {
  render() {
    return (
        <Router>
          <div>
            <Route exact path= "/" component={home}/>
          </div>
        </Router>
      
    );
    
  }
}

export default App;
