import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const Login = (props) => {

    const demo = {
      email: 'demo@danterest.com',
      password: '123123'
    }

    let [email, setEmail] = useState('');
    let [password, setPassword] = useState('');

    useEffect(() => {
      props.removeErrors();
    }, []);

  const handleInput = (type) => {
    return (e) => {
      if (type === 'email') {
        setEmail(e.target.value)
      } else {
        setPassword(e.target.value)
      };
    };
  };

  const handleSubmit = (e) => {
        e.preventDefault();
        const user = {
          email,
          password
        };
        props.login(user)
            .then (() => props.closeModal());
    }

  const demoSubmit = () => {
        props.login(demo)
            .then(() => props.closeModal());
  };

  const displayErrors = () => {
    if (!props.errors.length) {
        return null
    } else {
      return (
        <ul className="rendor-errors">
          {props.errors.map((error1, idx1) => {
              return <li key={idx1}>{error1}</li>
          })}
        </ul>
      )
    }
  };

  const { openModal } = props;
  return (
    <div className="login-form-container">
      <div onClick={props.closeModal} className="close-x"><MdClose size={25}/></div>
      <div className="auth1-logo-wrapper">
          <img className="dan-logo2" src={window.dLogo}/>
      </div>
      <h2 className="auth-title">Welcome to Danterest</h2>
      <form className="login-form-box" onSubmit={handleSubmit}>
          
      {displayErrors()}
        <div className="login-form">
          <div className="session-form-inputs">
            <label>
              <input
              type="email"
              value={email}
              onChange={handleInput('email')}
              placeholder="Email"
              maxLength="80"
              />
            </label>
            <label>
              <input
              type="password"
              value={password}
              onChange={handleInput('password')}
              placeholder="Password"
              />
            </label>
          </div>
          <div className="auth-btn" onClick={handleSubmit}>Log in</div>
          <p className="or">OR</p>
          <div onClick={demoSubmit} className="demo-user">
              Continue as Demo User
          </div>
          <div className="auth-footer">
              <h6>By continuing, you agree to Danterest's Terms of</h6>
              <h6>Service, Privacy policy.</h6>
          </div>
          <div className="need-account" onClick={() => openModal('signup')}>
              Not on Danterest yet? Sign up</div>
        </div>
      </form>
    </div>
  );
};

export default withRouter(Login);