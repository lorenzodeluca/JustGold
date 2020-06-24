import React from 'react';
import { Redirect, Link, useHistory } from 'react-router-dom';
import '../../../theme.css';
import './Login.css';


class Login extends React.Component {
    state = {
    }

    onSubmit = () => {
        const history = useHistory();

        let path = `myinventory`;
        history.push(path);
    }

    render() {

        return (
            <div className="home">
                <div className="container">
                    <header className="pb-5 row justify-content-between">
                        <div className="col-sm" className="logo align-items-center">
                            <img className="logo-img" src={require('../../../logo.png')} />
                            <h1 className="appname">
                                <font color="yellow">Just</font>
                            Gold</h1>
                        </div>
                        <div className="col-sm" className="browse">
                            <Link className="link" to="/">Home</Link>
                            <Link className="link" to="#">About</Link>
                            <Link className="link" to="#">Help</Link>
                            <Link className="link" to="#">Contact</Link>
                            <Link className="link" to="/login">Login</Link>
                        </div>
                    </header>
                    <main className="pt-1">
                        <form >
                            <div class="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email" />
                                <small id="emailHelp" class="form-text text-muted">We'll never share your email with anyone else.</small>
                            </div>
                            <div class="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password" />
                            </div>
                            <div class="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                                <label class="form-check-label" for="exampleCheck1">Remember me</label>
                            </div>
                            <Link className="link" to="/myinventory"><button class="btn btn-primary">Login</button></Link>
                        </form>
                    </main>
                </div>
            </div>
        );
    };
}

export default Login;
