import React from 'react';
import { Link } from 'react-router-dom';

import LogoutButton from '../Logout';
import * as ROUTES from '../../constants/routes';

const Navbar = () => (
    <div>
        <ul>
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
    </div>
);

export default Navbar;