import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Navbar from '../Navbar/index';

import * as ROUTES from '../../constants/routes';

class App extends Component {
    render(){
        return(
            <main>
                <Router>
                    <div>
                        <Navbar />
                        <hr />
                        <Switch>
                            <Route exact path={ROUTES.LANDING}></Route>
                            <Route path={ROUTES.REGISTER}></Route>
                            <Route path={ROUTES.LOGIN}></Route>
                            <Route path={ROUTES.PROFILE}></Route>
                        </Switch>
                    </div>
                </Router>
                
            </main>
        )
    }
}

export default App;