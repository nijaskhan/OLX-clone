import React,{useContext, useState} from 'react';
import { useHistory } from 'react-router-dom';
import Logo from '../../olx-logo.png';
import './Login.css';
import { FirebaseContext } from '../../store/Context';

function Login() {
  const history = useHistory();
  const [err, setErr] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext(FirebaseContext);

  const handleSubmit=(e)=>{
    e.preventDefault();
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then(()=>{
      setErr(false);
      history.push('/');
    })
    .catch((err)=>{
      setErr(err);
    })
  }
  return (
    <div>
      <div className="loginParentDiv" style={{width: '20vw'}}>
        <div style={{textAlign: 'center'}}>
          <img width="200px" height="200px" src={Logo}></img>
        </div>
        <form style={{textAlign: 'center', lineHeight: '2rem'}} onSubmit={handleSubmit}>
          <label htmlFor="email">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="email"
            value={email}
            onChange={(e)=> setEmail(e.target.value)}
            name="email"
            placeholder='email'
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
          <span className='text-danger'>{err && err.message}</span>
          <br />
          <button>Login</button>
        </form>
        <a href='/signup' className='mt-3 btn btn-dark' style={{fontWeight: 'bold'}}>Signup</a>
      </div>
    </div>
  );
}

export default Login;
