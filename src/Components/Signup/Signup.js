
import React, { useState, useContext } from 'react';
import{ FirebseContext} from '../../store/Context'
import Logo from '../../olx-logo.png';
import './Signup.css';
import{useNavigate}from "react-router-dom"

export default function Signup() {
  const Navigate = useNavigate()
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [password, setPassword] = useState('');
  const {firebase} = useContext( FirebseContext)

 const handleSubmit = (e) => {
    e.preventDefault()

    firebase.auth().createUserWithEmailAndPassword(email,password).then((result) => { 
      result.user.updateProfile({displayName: username }).then(() => {
       firebase.firestore().collection('users').add({
        id:result.user.uid,
        username:username,
        phone:phone
       }).then(()=>{
          Navigate('/login')
       })
      });
    });
  } 

  return (
    <div>
      <div className="signupParentDiv">
        <img width="150px" height="100px" src={Logo}></img>
        <form onSubmit={handleSubmit}>
          <label htmlFor="fname">Username</label>
          <br />
          <input
            className="input"
            type="text"
            value={username}
            id="fname"
            name="name"
            onChange={(e) => setUsername(e.target.value)}
            defaultValue="John"
          />
          <br />
           <label htmlFor="fname">Email</label>
          <br />
          <input
            className="input"
            type="email"
            id="fname"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            name="email"
            defaultValue="John"
          />
          <br />
          <label htmlFor="lname">Phone</label>
          <br />
          <input
            className="input"
            type="number"
            value={phone}
            onChange={(e)=>setPhone(e.target.value)}
            id="lname"
            name="phone"
            defaultValue="Doe"
          />
          <br />
          <label htmlFor="lname">Password</label>
          <br />
          <input
            className="input"
            type="password"
            id="lname"
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            name="password"
            defaultValue="Doe"
          />
          <br />
          <br />
          <button>Signup</button>
        </form>
        <a onClick={()=>{
          Navigate('/login')
        }}>Login</a>
      </div>
    </div>
  );
}
