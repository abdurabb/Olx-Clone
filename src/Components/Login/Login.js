import React,{useState,useContext} from 'react';
import { FirebseContext } from '../../store/Context';
import{useNavigate}from "react-router-dom"
import Logo from '../../olx-logo.png';
import './Login.css';

function Login() {
  const Navigate = useNavigate()
  const [email,setEmail] = useState('')
  const [password,setPassword] = useState('')
  const {firebase} = useContext(FirebseContext)

  const handleLogin =(e)=>{
    e.preventDefault()
    console.log("new Email = "+email);
    console.log("new Password = "+ password);

    firebase.auth().signInWithEmailAndPassword(email,password).then(()=>{
      Navigate('/')
    }).catch((error)=>{
      alert(error.message)
    })

  }
  return (
    <div>
      <div className="loginParentDiv">
        <img width="150px" height="100px" src={Logo}></img>
        <form onSubmit={handleLogin}>
          <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            value={email}
            type="email"
            onChange={(e)=>setEmail(e.target.value)}
            id="fname"
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            id="lname"
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Login</button>
        </form>
        <br />
        <span onClick={()=>{
          Navigate('/signup')
        }}>SignUP</span>
      </div>
    </div>
  );
}

export default Login;
