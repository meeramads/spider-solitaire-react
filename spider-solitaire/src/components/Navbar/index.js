import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from '../Logout';
import * as ROUTES from '../../constants/routes';
import { AuthUserContext } from '../Session';


const Navbar = () => (
    <div>
        <AuthUserContext.Consumer>
            { authUser => 
                authUser ? <NavbarAuth /> : <NavbarNonAuth />
            }
        </AuthUserContext.Consumer>
    </div>
)

const NavbarAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.LOGIN}>Log In</Link>
        </li>
        <li>
            <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
        <li>
            <LogoutButton />
        </li>
    </ul>
);

const NavbarNonAuth = () => (
    <ul>
        <li>
            <Link to={ROUTES.LANDING}>Landing</Link>
        </li>
        <li>
            <Link to={ROUTES.LOGIN}>Log In</Link>
        </li>

    </ul>
);

export default Navbar;