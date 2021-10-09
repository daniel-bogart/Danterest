import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom';
import { MdClose } from 'react-icons/md';

const Signup = (props) => {

  let [username, setUsername] = useState(null);
  let [email, setEmail] = useState('');
  let [password, setPassword] = useState('');
  let [age, setAge] = useState('');
  let [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    props.removeErrors();
  }, []);

  const handleInput = (type) => {
    return (e) => {
      if (type === 'email') {
        setEmail(e.target.value);
      } else if (type === 'password') {
        setPassword(e.target.value);
      } else {
        setAge(e.target.value);
      };
    };
  };

  const handleSubmit = (e) => {
    const userNumber = Math.floor(1000 + Math.random() * 8999);
    const userStringNum = userNumber.toString();
    e.preventDefault();
    setSubmitting(true);
    const emailArray = email.split('@');
    const username = emailArray[0] + userStringNum;
    const state = {
      username,
      email,
      password,
      age
    };
    setUsername(username);
    props.createNewUser(state)
      .then(() => props.closeModal())
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
  }

  const { openModal } = props;
  return (
      <div className="signup-form-container">
              <div onClick={props.closeModal} className="close-x"><MdClose size={25}/></div>
          <div className="auth1-logo-wrapper">
              <img className="dan-logo2" src={window.dLogo}/>
          </div>
          <div className="auth-title">
              <h2>Welcome to Danterest</h2>
              <h3>Find new ideas to try</h3>
          </div>
          <form className="signup-form-box" onSubmit={handleSubmit}>
          <br/>
          {displayErrors()}
              <div className="signup-form">
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
                  <label>
                      <input
                      type="number"
                      value={age}
                      onChange={handleInput('age')}
                      placeholder="Age"
                      maxLength="3"
                      />
                  </label>
                  <div className="auth-btn" onClick={handleSubmit}>Sign Up</div>
                  <div className="auth-footer">
                      <h6>By continuing, you agree to Danterest's Terms of</h6>
                      <h6>Service, Privacy policy.</h6>
                  </div>
                  <div className="already-member" onClick={() => openModal('login')}>
                      Already a member? Log in</div>
              </div>
          </form>
      </div>
  );
};

export default withRouter(Signup);