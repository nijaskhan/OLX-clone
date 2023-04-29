import React, { useState, useContext } from 'react';
import {useHistory} from 'react-router-dom'
import Logo from '../../olx-logo.png';
import {FirebaseContext} from '../../store/firebaseContext';
import './Signup.css';

export default function Signup() {
  const history = useHistory();
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [mobile, setMobile] = useState('');
  const {firebase} = useContext(FirebaseContext);
  
  const handleSubmit=(e)=>{
    e.preventDefault()
    firebase.auth().createUserWithEmailAndPassword(email, password)
    .then((userCred)=> {
      userCred.user.updateProfile({displayName: username})
      .then(()=>{
        firebase.firestore().collection('users').add({
          id: userCred.user.uid,
          name : username,
          email : email,
          mobile : mobile
        })
        .then(()=>{
          history.push("/login");
        })
      })
    })
    .catch((err)=> console.log(err))
  }
  return (
    <div>
      <div className="signupParentDiv" style={{width: '25vw'}}>
        <div className='text-center'>
          <img width="250px" height="200px" src={Logo}></img>
        </div>
        <form style={{textAlign: 'center', lineHeight: '2rem'}} onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            id="fname"
            value={username}
            onChange={(e)=> setUsername(e.target.value)}
            name="username"
            placeholder='User Name'
          />
          <br />
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            name="email"
            placeholder='Email'
          />
          <br />
          <label htmlFor="mobile">Phone</label>
          <br />
          <input
            className="input"
            type="tel"
            id="mobile"
            value={mobile}
            onChange={(e)=> setMobile(e.target.value)}
            name="mobile"
            placeholder='phone No'
          />
          <br />
          <label htmlFor="password">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="password"
            value={password}
            onChange={(e)=> setPassword(e.target.value)}
            name="password"
            placeholder='password'
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a className='mt-3 btn btn-dark' style={{fontWeight: 'bold'}}>Login</a>
      </div>
    </div>
  );
}
