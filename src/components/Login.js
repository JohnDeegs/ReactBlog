import React, { Component } from 'react';
import '../css/Login.css';
import * as rb from 'react-bootstrap';

class Login extends Component {
  render() {
    return (
        <div>
            <h2>Login</h2>
            <form>
                <rb.FormGroup>
                    <rb.ControlLabel>Email:</rb.ControlLabel>
                    <rb.FormControl type="text" placeholder="Enter Email" />
                    <rb.Button bsStyle="primary">Submit</rb.Button>
                    <rb.FormControl.Feedback />
                </rb.FormGroup>
            </form>
        </div>
    );
  }
}

export default Login;