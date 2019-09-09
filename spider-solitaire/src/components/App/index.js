import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';

import Navbar from '../Navbar/index';
import RegisterPage from '../Register';
import LoginPage from '../Login';

import * as ROUTES from '../../constants/routes';
import { withAuthentication } from '../Session';

const App = () => (
    <Router>
        <div>
            <Navbar />

            <hr />

            <Switch>
                {/* <Route exact path={ROUTES.LANDING}></Route> */}
                <Route path={ROUTES.REGISTER} component={RegisterPage} />
                <Route path={ROUTES.LOGIN} component={LoginPage} />
                <Route path={ROUTES.PROFILE}></Route>
            </Switch>

        </div>
    </Router>
);

export default withAuthentication(App);