import axios from 'axios';
import React, { useState } from 'react';
import './Login.scss'

export default function Login () {
  const [state, setState] = useState({})

  function handleSubmit(e) {
    e.preventDefault();
    axios
      .post('http://localhost:3000/api/login/', {state})
      .then(response => {
 
        console.log(response)
      })
      .catch(error => {
        console.log(error)
      })
    }

    function changeHandler(e) {
      setState({...state, [e.target.name]: e.target.value })
  }

  return (
    <section className="login-page">
      
      <div className="login-container">
        <p className="login-label">Login Page</p>
        <label>Email</label>
        <input className="input-email" type="email" name="email" placeholder="Email" onChange = {changeHandler}/>
        <label>Password</label>
        <input className="input-password" type="password" name="password" placeholder="Password" onChange = {changeHandler}/>
        <button onClick ={handleSubmit} type="submit">
          Save
        </button>
      </div>

    </section>
  )
}