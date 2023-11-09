import React, { Component } from 'react';
import './signup.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';

class Signup extends Component {
    constructor(props) {
        super(props);
        this.state = {
            step: 1,
            username: '',
            email: '',
            password: '',
        };
        this.clickSound = new Audio(process.env.PUBLIC_URL + '/click.mp3');
    }

    handleInputChange = (e) => {
        const { name, value } = e.target;
        this.setState({ [name]: value });
    }

    handleNextStep = () => {
        const { username, email, step } = this.state;

        if (step === 1 && username.trim() === '') {
            toast.error('Please enter a username!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else if (step === 2 && email.trim() === '') {
            toast.error('Please enter an email address!', {
                position: toast.POSITION.TOP_RIGHT,
            });
        } else {
            this.setState((prevState) => ({ step: prevState.step + 1 }));
            this.playClickSound();
        }
    }

    handleSignup = (e) => {
        e.preventDefault();
        const { username, email, password } = this.state;

        // Your existing signup logic here
        // ...

        // After successful signup, you can redirect or perform other actions
    }

    playClickSound = () => {
        this.clickSound.currentTime = 0;
        this.clickSound.play();
    }

    render() {
        const { step, username, email, password } = this.state;

        const stepIndicator = Array.from({ length: 3 }, (_, index) => (
            <div
                key={index}
                className={`step-indicator ${index + 1 === step ? 'active' : ''}`}
            ></div>
        ));

        return (
            <div className='form-container'>
                <div className='image-container'>
                    {/* Animation video component goes here (conditionally rendered) */}
                </div>
                <div className="signup-container">
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
                            <h2>Email</h2>
                            <form onSubmit={(e) => e.preventDefault()}>
                                <label htmlFor="email">Email:</label>
                                <input
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={this.handleInputChange}
                                    required
                                />
                                <button type="button" onClick={this.handleNextStep}>
                                    Next
                                </button>
                            </form>
                        </>
                    )}
                    {step === 3 && (
                        <>
                            <h2>Password</h2>
                            <form onSubmit={this.handleSignup}>
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
                                <button type="submit" onClick = {this.playClickSound}>Start Now!</button></Link>
                            </form>
                        </>
                    )}
                    <div className="step-indicators">{stepIndicator}</div>
                    <div>
                        <p>Already have an account? <Link to="/login">Login to your account</Link> </p>
                    </div>
                </div>
            </div>
        );
    }
}

export default Signup;
