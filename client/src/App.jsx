import React, { useState } from 'react';
import SpaceFiller from './SpaceFiller/SpaceFiller.jsx';
import { validateEmail } from './utility/commonFunctions.jsx'
import {
  LOGIN,
  EMAIL_ADDRESS,
  INVALID_MAIL,
  PASSWORD,
  DONOT_HAVE_ACCESS,
  REGISTER
} from "./constants/string.jsx";
import './App.css'

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const onEmailChange = (e) => {
    setEmail(e.target.value);
    if (e.target.value !== "") {
      setEmailError(validateEmail(e.target.value));
      
    } else {
      setEmailError(false);
    }
  };

  const onPasswordChange = (e) => {
    setPassword(e.target.value);
    if (e.target.value === "") {
      setPasswordError(true);
    }else {
      setPasswordError(false);
    }
  };

  const onSubmit = () => {
    console.log('asda')
  };

  const isButtonEnabled = () => {
    if (!emailError && !passwordError && email.length > 0 && password.length > 0) return true;
    return false;
  }

  return (
    <div className="parentLoginWrapper">
      <div className="loginComponentWrapper">
        <div className="loginHeader">{LOGIN}</div>
        <SpaceFiller margin="15px" />
        <div className="emailHeader">{EMAIL_ADDRESS}</div>
        <SpaceFiller />
        <input
          type="email"
          value={email} // Bind the input value to the state
          onChange={onEmailChange} // Call handleInputChange on every keystroke
          placeholder={EMAIL_ADDRESS}
          className="inputEmail"
          required
        />
        {emailError && (
          <>
            <SpaceFiller margin="5px" />
            <div className="errorMessage">{`**${INVALID_MAIL}`}</div>
          </>
        )}
        <SpaceFiller margin="15px" />
        <div className="passwordHeader">{PASSWORD}</div>
        <SpaceFiller />
        <input
          type="password"
          value={password} // Bind the input value to the state
          onChange={onPasswordChange} // Call handleInputChange on every keystroke
          placeholder={PASSWORD}
          className="inputPassword"
          required
        />
        <SpaceFiller margin="30px" />
        <button
          className={
            isButtonEnabled() ? "submitButton" : "submitButtonDisabled"
          }
          onClick={onSubmit}
        >
          {LOGIN}
        </button>
        <SpaceFiller margin="20px" />
        <div className="registerUserWrapper">
          <div className="donotHaveAccountText">{DONOT_HAVE_ACCESS}</div>
          <div className="registerText">
            <u>{REGISTER}</u>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App
