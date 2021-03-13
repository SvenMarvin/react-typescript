<<<<<<< HEAD
import React, { useContext, useRef } from 'react'
import './login.scss';
// Import Global State (Context)
import {LoginContext}  from '../../store/login/LoginContextContainer';

const Login: React.FC = () => {

    // Dom Elements
    const pwInput = useRef<HTMLInputElement>(null);
    const userInput = useRef<HTMLInputElement>(null);

    // Global State (Login Context)
    const {isAuth, logIn} = useContext(LoginContext);

    // State
    const [inputValues, setInputValues] = React.useState<{pw: string, user: string}>({
        pw: '',
        user: ''
    })

    // Handle Input
    const inputHandleChange = (event: any): void => {
        setInputValues(event.target.value);
    };

     // Delete Value of Input during closing
    const toggleLoginHandler = () => {        
        setInputValues({
            pw: '',
            user: ''
        })
    }

    // get input values
    const getInputValues = () => {
        const pwEnteredText =  pwInput.current!.value;
        const userEnteredText =  userInput.current!.value;
        logIn();
        // console.log(pwEnteredText);
        // console.log(userEnteredText);
    };

    return (
        <div className="menu">
        <input type="checkbox" className="menu-open" name="menu-open" id="menu-open" onClick={toggleLoginHandler}/>
        <label className="menu-open-button" htmlFor="menu-open">
            {/* LogIn */}
        </label>
        
        <button type='submit' className="menu-item" id='submit_item' onClick={getInputValues}>LogIn</button>
        <input ref={pwInput} id='pwInput' type="password" placeholder='Password' className="menu-item" value={inputValues.pw} onChange={el => inputHandleChange(el)}></input>
        <input ref={userInput} id='userInput' type="text" placeholder='Username' className="menu-item" value={inputValues.user} onChange={el => inputHandleChange(el)}></input>
        </div>
    )
}

export default Login;
=======
import React, { useContext, useRef, useState } from "react";
import "./login.scss";
// Import Global State (Context)
import { LoginContext } from "../../store/login/LoginContextContainer";
// import axios
import axios from "axios";
//Import History
import { useHistory } from "react-router-dom";

const Login: React.FC = () => {
  // History
  let history = useHistory();

  // Dom Elements
  const pwInput = useRef<HTMLInputElement>(null);
  const userInput = useRef<HTMLInputElement>(null);

  // Global State (Login Context)
  const { isAuth, logIn, logOut } = useContext(LoginContext);

  // State
  const [inputValues, setInputValues] = useState<{
    pw: string;
    user: string;
  }>({
    pw: "",
    user: "",
  });

  // Handle Input
  const inputHandleChange = (event: any): void => {
    setInputValues(event.target.value);
  };

  // Delete Value of Input during closing
  const toggleLoginHandler = () => {
    document.getElementById("wrong_LoginData")!.classList.add("displayNone");
    setInputValues({
      pw: "",
      user: "",
    });
  };

  // Get LoginData
  const getLoginData = async () => {
    const jsonDataUrl: string = "./loginData/loginData.json";
    return await axios.get(jsonDataUrl).then((res) => res.data);
  };

  // get input values
  const getInputValues = () => {
    const userEnteredText: string = userInput.current!.value.toString();
    const pwEnteredText: string = pwInput.current!.value.toString();
    return { user: userEnteredText, pw: pwEnteredText };
  };

  // LoginHandler
  const loginHandler = () => {
    const inputData = getInputValues();

    getLoginData().then((res: any) => {
      let loginCorrect = false;
      for (let i = 0; i < res.length; i++) {
        if (
          inputData.user.toString() === res[i].user.toString() &&
          inputData.pw.toString() === res[i].pw.toString()
        ) {
          document
            .getElementById("wrong_LoginData")!
            .classList.add("displayNone");
          logIn(inputData.user.toString());
          loginCorrect = true;
        }
      }
      if (!loginCorrect) {
        document
          .getElementById("wrong_LoginData")!
          .classList.remove("displayNone");
        loginCorrect = true;
      }
    });
  };

  const LogoutHandler = () => {
    logOut();
    if (
      history.location.pathname !== "/docs"
    ) {
      history.push('/');
    }
  };

  const loginfields = (
    <div className="menu">
      <input
        type="checkbox"
        className="menu-open"
        name="menu-open"
        id="menu-open"
        onClick={toggleLoginHandler}
      />
      <label className="menu-open-button" htmlFor="menu-open"></label>
      <button
        type="submit"
        className="menu-item"
        id="submit_item"
        onClick={loginHandler}
      >
        LogIn
      </button>
      <input
        ref={pwInput}
        id="pwInput"
        type="password"
        placeholder="Password"
        className="menu-item"
        value={inputValues.pw}
        onChange={(el) => inputHandleChange(el)}
      ></input>
      <input
        ref={userInput}
        id="userInput"
        type="text"
        placeholder="Username"
        className="menu-item"
        value={inputValues.user}
        onChange={(el) => inputHandleChange(el)}
      ></input>
      <div id="wrong_LoginData" className="displayNone">
        LogInData is incorrect
      </div>
    </div>
  );

  const logOutField = (
    <div className="menu">
      <button
        type="submit"
        className="menu-item"
        id="submit_item"
        onClick={LogoutHandler}
      >
        Logout
      </button>
      <div id="loogedUser">loggedIn as: {isAuth[1]}</div>
    </div>
  );

  return <div>{isAuth[0] ? logOutField : loginfields}</div>;
};

export default Login;
>>>>>>> release/0.0.2
