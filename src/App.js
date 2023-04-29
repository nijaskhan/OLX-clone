import React, {useEffect, useState} from 'react';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoadingAnimation from './Components/Loading/loading';

import Home from './Pages/Home';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);
  }, [])
  
  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
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
        </div>
      )}
    </>
  );
}

export default App;
