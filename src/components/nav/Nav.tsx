import React, { useContext } from 'react'
import './nav.scss';
import { Link } from 'react-router-dom';
// Import GLobal Store (Context)
import { LoginContext } from '../../store/login/LoginContextContainer';
// Components
import Login from '../login/Login';

const Nav: React.FC = () => {

<<<<<<< HEAD
    const {isAuth, logIn} = useContext(LoginContext);
=======
    const {isAuth} = useContext(LoginContext);
>>>>>>> release/0.0.2

    return (
        <div id='navigation'>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/docs'>Documentation</Link></li>
<<<<<<< HEAD
                    {isAuth ? <li><Link to='/useddata'>Used Data</Link></li>: null}
=======
                    {isAuth[0] ? <li><Link to='/userdata'>User Data</Link></li>: null}
>>>>>>> release/0.0.2
                </ul>
            </nav>
                <Login/>
        </div>
    )
}

export default Nav;