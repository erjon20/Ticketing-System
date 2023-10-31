// Entry.js
import React from 'react';
import { useState } from 'react';
import './entry.style.css';
import Login from '../../components/login/Login.comp';
import PasswordReset from '../../components/password-reset/PasswordReset.comp';

const Entry = () => {
  const [Email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  const [frmLoad, setFrmLoad] = useState('login');

  const handleOnchange = (e) => {
    const { name, value } = e.target;
    if (name === 'Email') {
      setEmail(value);
    } else if (name === 'Password') {
      setPassword(value);
    }
  };

  const handleOnsubmit = (e) => {
    e.preventDefault();
    if (!Email || !Password) {
      alert('Please fill in both Email and Password');
    } else {
      console.log(Email, Password);
      // TODO: Call your API to submit the form
    }
  };

  const handleOnResetsubmit = (e) => {
    e.preventDefault();
    if (!Email) {
      alert('Please enter email');
    } else {
      console.log(Email);
      // TODO: Call your API to submit the form
    }
  };
  const formSwitcher = (formType) => {
    setFrmLoad(formType);
  };

  return (
    <div className="entry-page">
      {frmLoad === 'login' && (
        <Login
          handleOnchange={handleOnchange}
          handleOnsubmit={handleOnsubmit}
          formSwitcher={formSwitcher}
          Email={Email}
          Password={Password}
        />
      )}

      {frmLoad === 'reset' && (
        <PasswordReset
          handleOnchange={handleOnchange}
          handleOnResetsubmit={handleOnResetsubmit}
          formSwitcher={formSwitcher}
          Email={Email}
          Password={Password}
        />
      )}
    </div>
  );
};

export default Entry;
