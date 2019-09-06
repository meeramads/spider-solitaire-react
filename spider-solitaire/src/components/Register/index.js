import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import * as ROUTES from '../../constants/routes';

const RegisterPage = () => (
    <div>
        <h1>SignUp</h1>
    </div>
);

const INITIAL_STATE = {
    username: '',
    email: '',
    passwordOne: '',
    passwordTwo: '',
    error: null
}

class RegisterForm extends Component {
    constructor(props){
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = (e) => {
        const { username, email, passwordOne } = this.state;

        this.props.firebase
            .doCreateUserWithEmailAndPassword(email,passwordOne)
            .then(authUser => { 
                this.setState({ ...INITIAL_STATE })
            })

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
                <button type="submit">Sign Up</button>

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

export default RegisterPage;

export { RegisterForm, RegisterLink };