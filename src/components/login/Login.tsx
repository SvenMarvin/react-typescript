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