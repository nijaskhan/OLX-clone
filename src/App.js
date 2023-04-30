import React, {useEffect, useState, useContext} from 'react';
import './App.css';
import Signup from './Pages/Signup';
import Login from './Pages/Login';
import Create from './Pages/Create';
import View from './Pages/ViewPost';
import ViewPost from './store/postContext';
import {AuthContext, FirebaseContext} from './store/Context'
import {BrowserRouter as Router, Route} from 'react-router-dom'
import LoadingAnimation from './Components/Loading/loading';
import Home from './Pages/Home';

function App() {
  const {setUser} = useContext(AuthContext);
  const {firebase} = useContext(FirebaseContext);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setTimeout(()=>{
      setIsLoading(false);
    }, 2000);
    firebase.auth().onAuthStateChanged((user)=>{
      setUser(user);
    });
  }, [])
  
  return (
    <>
      {isLoading ? (
        <LoadingAnimation />
      ) : (
        <div>
          <ViewPost>
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
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/view'>
              <View />
            </Route>
          </Router>
          </ViewPost>
        </div>
      )}
    </>
  );
}

export default App;
