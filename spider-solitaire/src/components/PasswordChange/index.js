import React, { Component } from 'react';

import { withFirebase } from '../Firebase';

const INITIAL_STATE = {
    passwordOne: '',
    passwordTwo: '',
    error: null
};

class PasswordChangeForm extends Component{
    constructor(props) {
        super(props);

        this.state = { ...INITIAL_STATE };
    }

    handleSubmit = (e) => {
        e.preventDefault();

        const { passwordOne } = this.state;

        this.props.firebase
            .doPasswordUpdate(passwordOne)
            .then (() => {
                this.setState({ ...INITIAL_STATE });
            })
            .catch (error => {
                this.setState({ error });
            });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value});
    }

    render() {
        const { passwordOne, passwordTwo, error } = this.state;

        const isInvalid =
            passwordOne !== passwordTwo || passwordOne === '';

        return(
            <form onSubmit={this.handleSubmit}>
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
                <button disabled={isInvalid} type="submit">
                    Reset Password
                </button>

                {error && <p>{error.message}</p>}
            </form>
        );
    }
}

export default withFirebase(PasswordChangeForm);