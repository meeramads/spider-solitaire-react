import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { RegisterLink } from '../Register';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const LoginPage = () => (
    <div>
        <h1>Log In</h1>
        <LoginForm />
        <RegisterLink />
    </div>
);

const INITIAL_STATE = {
    email: '',
    password: '',
    error: null
}

class LoginFormBase extends Component {
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = (e) => {
        e.prevendDefault();

        const { email, password } = this.state;

        this.props.firebase
            .doSignInWithEmailAndPassword(email, password)
            .then (() => {
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.LANDING);
            })
            .catch (error => {
                this.setState({ error });
            })
    };

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    };

    render(){
        const { email, password, error } = this.state;

        const isInvalid = password === '' || email === '';

        return (
            <form onSubmit={this.onSubmit}>
                <input
                    name="email"
                    value={email}
                    onChange={this.onChange}
                    type="text"
                    placeholder="Email Address"
                />
                <input
                    name="password"
                    value={password}
                    onChange={this.onChange}
                    type="password"
                    placeholder="Password"
                />
                <button disabled={isInvalid} type="submit">
                    Log In
                </button>

                {error && <p>{error.message}</p>}

            </form>
        )
    }
}

const LoginForm = compose(
    withRouter,
    withFirebase,
)(LoginFormBase);

export default LoginPage;

export { LoginForm };
