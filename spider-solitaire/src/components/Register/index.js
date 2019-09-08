import React, { Component } from 'react';
import { Link, withRouter } from 'react-router-dom';
import { compose } from 'recompose';

import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const RegisterPage = () => (
    <div>
        <h1>SignUp</h1>
        <RegisterForm />
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    highScore: 0,
    error: null
}

class RegisterFormBase extends Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    const isInvalid =
        passwordOne !== passwordTwo ||
        passwordOne === '' ||
        username === '';


    handleSubmit = (e) => {
        e.preventDefault();

        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email,passwordOne)
            .then(authUser => { 
                this.setState({ ...INITIAL_STATE });
                this.props.history.push(ROUTES.LANDING);
            })
            .catch(error => {
                this.setState({ error });
            });

    }

    handleChange = (e) => {
        this.setState({ [e.target.name] : e.target.value });
    }

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                <input
                    name="username"
                    value={username}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Username"
                />
                <input
                    name="email"
                    value={email}
                    onChange={this.handleChange}
                    type="text"
                    placeholder="Email"
                />
                <input
                    name="passwordOne"
                    value={passwordOne}
                    onChange={this.handleChange}
                    type="password"
                    placeholder="Password"
                />
                <input
                    name="passwordTwo"
                    value={passwordTwo}
                    onChange={this.handleChange}
                    type="password"
                    placeholder="Confirm Password"
                />
                <button disabled={this.isInvalid} type="submit">Sign Up</button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

const RegisterLink = () => (
    <p>
        Don't have an account? <Link to={ROUTES.REGISTER}>Register</Link>
    </p>
);

const RegisterForm = compose(
    withRouter, 
    withFirebase
  )(RegisterFormBase);

export default RegisterPage;

export { RegisterForm, RegisterLink };