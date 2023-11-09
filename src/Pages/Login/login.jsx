import React, { Component } from 'react';
import './login.css';
import { login } from '../../server/services/auth/auth.service';
import { toast } from 'react-toastify';
import { Link } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';


class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            username: '',
            password: '',
        };
        this.clickSound = new Audio(process.env.PUBLIC_URL + '/click.mp3');
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleNextStep = () => {
        const { username, step } = this.state;

        if (step === 1 && username.trim() === '') {
            toast.error('Please enter a username!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            this.setState((prevState) => ({ step: prevState.step + 1 }));
            this.playClickSound();
        }
    }

    handleSubmit = () => {
        const { username, password } = this.state;

        login({ username, password })
            .then((res) => {
                console.log(1, res);
                localStorage.setItem("user", JSON.stringify(res.data))
                localStorage.setItem("token", res.data.token);

                // Navigate to GamesBoard.jsx after successful login
                this.props.history.push('/gamesboard');
            })
            .catch((error) => {
                console.log(error.response.data.message);
                toast.error(`${error.response.data.message} !`, {
                    position: toast.POSITION.TOP_RIGHT,
                });
                window.alert(`${error.response.data.message} !`);
            });
    }
    playClickSound = () => {
        this.clickSound.currentTime = 0;
        this.clickSound.play();
    }


    render() {
        const { step, username, password } = this.state;
        const stepIndicator = Array.from({ length: 2 }, (_, index) => (
            <div
                key={index}
                className={`step-indicator ${index + 1 === step ? 'active' : ''}`}
            ></div>
        ));

        return (
            <div className='form-container'>
                <div className='image-container'>
                </div>
                <div className="login-container">
                    {step === 1 && (
                        <>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="username">Username:</label>
                                <input
                                    type="text"
                                    id="username"
                                    name="username"
                                    value={username}
                                    onChange={this.handleInputChange}
                                    required
                                />
                                <button type="button" onClick={this.handleNextStep}>
                                    Next
                                </button>
                            </form>
                        </>
                    )}
                    {step === 2 && (
                        <>
                            <form onSubmit={this.handleLogin}>
                                <label htmlFor="password">Password:</label>
                                <input
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={password}
                                    onChange={this.handleInputChange}
                                    required
                                />
                                <Link to = "/GamesBoard"> 
                                <button type="submit" onClick={this.playClickSound}>Let me in..</button></Link>
                            </form>
                        </>
                    )}
                    <div className="step-indicators">{stepIndicator}</div>
                    <div>
                        <p>Don’t have an account? <Link to="/signup">Create an account</Link> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;