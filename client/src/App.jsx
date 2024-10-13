import { useState, useEffect } from "react";
import SpaceFiller from "./SpaceFiller/SpaceFiller.jsx";
import { validateEmail, validatePassword } from "./utility/commonFunctions.jsx";
import {
  LOGIN,
  EMAIL_ADDRESS,
  INVALID_MAIL,
  PASSWORD,
  DONOT_HAVE_ACCESS,
  REGISTER,
  SIGN_UP,
  ALREADY_ACCOUNT,
  AT_LEAST_UPPER_CASE,
  AT_LEAST_DIGITS,
  AT_LEAST_SPECIAL_CHARACTERS,
  AT_LEAST_LETTERS,
  SHOW_PASSWORD,
} from "./constants/string.jsx";
import "./App.css";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);
  const [isLogin, setIsLogin] = useState(true);
  const [passwordValidation, setPasswordValidation] = useState({});
  const [showPassword, setShowPassword] = useState(false);
  
  const validationStringArray = [
    AT_LEAST_UPPER_CASE,
    AT_LEAST_DIGITS,
    AT_LEAST_SPECIAL_CHARACTERS,
    AT_LEAST_LETTERS,
  ];

  useEffect(() => {
    setPasswordValidation(validatePassword(password));
  }, [password]);

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
    } else {
      setPasswordError(false);
    }
  };

  const onSubmit = () => {
    console.log("asda");
  };

  const isLoginButtonEnabled = () => {
    if (
      !emailError &&
      !passwordError &&
      email.length > 0 &&
      password.length > 0
    )
      return true;
    return false;
  };

  const isSignUpButtonEnabled = () => {
    if (
      !emailError &&
      !passwordError &&
      email.length > 0 &&
      password.length > 0 && Object.values(passwordValidation).every(value => value === true)
    )
      return true;
    return false;
  };


  const onRegisterOrSignUp = () => {
    setIsLogin(!isLogin);
    reset();
  };

  const handleCheckboxChange = () => {
    setShowPassword(!showPassword);
  }

  const reset = () => {
    setEmail("");
    setPassword("");
    setEmailError(false);
    setPasswordError(false);
  };

  const loginStructure = () => {
    return (
      <div className="loginWrapper">
        <div className="loginHeader common-flex-box">{LOGIN}</div>
        <SpaceFiller margin="15px" />
        <div className="emailHeader">{EMAIL_ADDRESS}</div>
        <SpaceFiller />
        {emailAndPasswordStructure()}
        <SpaceFiller margin="30px" />
        <button
          className={
            isLoginButtonEnabled() ? "submitButton" : "submitButtonDisabled"
          }
          onClick={onSubmit}
        >
          {LOGIN}
        </button>
        <SpaceFiller margin="20px" />
        <div className="registerUserWrapper common-flex-box">
          <div className="donotHaveAccountText">{DONOT_HAVE_ACCESS}</div>
          <div className="registerText" onClick={onRegisterOrSignUp}>
            <u>{REGISTER}</u>
          </div>
        </div>
      </div>
    );
  };

  const signUpStructure = () => {
    return (
      <div className="signUpWrapper">
        <div className="loginHeader common-flex-box">{SIGN_UP}</div>
        <SpaceFiller margin="15px" />
        <div className="emailHeader">{EMAIL_ADDRESS}</div>
        <SpaceFiller />
        {emailAndPasswordStructure()}
        <SpaceFiller margin="10px" />
        {Object.keys(passwordValidation).map((key, index) => (
          <div className={"validationRow"} key={`${key}${index}`}>
            <div
              className={passwordValidation[key] ? "successText" : "errorText"}
            >
              {passwordValidation[key] ? "✔" : "✖"}
            </div>
            <div>{validationStringArray[index]}</div>
          </div>
        ))}

        <SpaceFiller margin="20px" />
        <button
          className={
            isSignUpButtonEnabled() ? "submitButton" : "submitButtonDisabled"
          }
          onClick={onSubmit}
        >
          {SIGN_UP}
        </button>
        <SpaceFiller margin="20px" />
        <div className="registerUserWrapper common-flex-box">
          <div className="donotHaveAccountText">{ALREADY_ACCOUNT}</div>
          <div className="registerText" onClick={onRegisterOrSignUp}>
            <u>{LOGIN}</u>
          </div>
        </div>
      </div>
    );
  };

  const emailAndPasswordStructure = () => {
    return (
      <>
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
          type={showPassword ? "text" : "password"}
          value={password} // Bind the input value to the state
          onChange={onPasswordChange} // Call handleInputChange on every keystroke
          placeholder={PASSWORD}
          className="inputPassword"
          required
        />
        <SpaceFiller margin="10px" />
        <div className="checkBoxWrapper">
          <input
            type="checkbox" // Checkbox input type
            checked={showPassword} // Set checked based on state
            onChange={handleCheckboxChange} // Handle change event
            className="passwordCheckbox"
          />
          <div>{SHOW_PASSWORD}</div>
        </div>
      </>
    );
  };

  return (
    <div className="parentLoginWrapper common-flex-box">
      <div className={`loginComponentWrapper ${!isLogin ? "flip" : ""}`}>
        {isLogin ? loginStructure() : signUpStructure()}
      </div>
    </div>
  );
}

export default App;
