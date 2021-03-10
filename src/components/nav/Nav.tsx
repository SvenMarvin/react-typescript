import React, { useContext } from 'react'
import './nav.scss';
import { Link } from 'react-router-dom';
// Import GLobal Store (Context)
import { LoginContext } from '../../store/login/LoginContextContainer';
// Components
import Login from '../login/Login';

const Nav: React.FC = () => {

    const {isAuth, logIn} = useContext(LoginContext);

    return (
        <div id='navigation'>
            <nav>
                <ul>
                    <li><Link to='/'>Home</Link></li>
                    <li><Link to='/docs'>Documentation</Link></li>
                    {isAuth ? <li><Link to='/useddata'>Used Data</Link></li>: null}
                </ul>
            </nav>
                <Login/>
        </div>
    )
}

export default Nav;