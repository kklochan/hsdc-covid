import React, { Component } from 'react';
import styles from '../styles/styles.css';
import { Redirect, NavLink } from 'react-router-dom';

class LoginPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            redirect: false
        };
        this.login = this.login.bind(this);
    }

    login() {
        console.log("Enetered FTECH");
        fetch('/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({username: this.state.username, password: this.state.password})
        }).then(data => {
            console.log(data);
            this.props.logIn();
        }).catch(err=>console.log(err));

    }

    render() {
        return (
            <div className="about-window">
                <h3>Username:</h3>
                <input id='username' onChange={(e) => this.setState({username: e.target.value})} type="text"></input>
                <h3>Password:</h3>
                <input id='password' onChange={(e) => this.setState({password: e.target.value})} type="text"></input>
                <br /><br />
                    <button onClick={() => this.login()}>Submit</button>
            </div>
        )
    }
    
}
export default LoginPage;