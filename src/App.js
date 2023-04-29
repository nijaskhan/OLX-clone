import React from 'react';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import Home from './Pages/Home';

function App() {
  return (
    <>
      <Router>
        <Route exact path='/'>
          <Home />
        </Route>
        <Route path='/signup'>
          <Signup />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
      </Router>
    </>
  );
}

export default App;
