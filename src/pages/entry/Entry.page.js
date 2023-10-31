import React from 'react';
import { useState } from 'react';
import './entry.style.css';
import Login from '../../components/login/Login.comp';
import PasswordReset from '../../components/password-reset/PasswordReset.comp';

const Entry = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const handleOnchange = (e) => {
    const { name, value } = e.target;

    switch (name){
      case"Email" :
      setEmail(value);
      break;
      case"Password" :
      setPassword(value);
      break;
      default:
      break;
    };

    if (name === 'Email') {
      setEmail(value);
    } else if (name === 'Password') {
      setPassword(value);
    }
  };
  const handleOnsubmit = (e) => {
    e.preventDefault();
  
    if (!Email || !Password) {
      return alert("Please fill in both Email and Password");

      //To do call API to submit the FORM
    } 
    console.log(Email,Password);
  };

  return (
    <div className='entry-page'>
      <Login handleOnchange={handleOnchange} handleOnsubmit={handleOnsubmit} Email={Email} Password={Password} />
      <PasswordReset handleOnchange={handleOnchange} handleOnsubmit={handleOnsubmit} Email={Email} Password={Password}/>

    </div>
  );
}

export default Entry;
