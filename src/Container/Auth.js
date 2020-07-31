import React, { Component } from 'react';
import classes from './Auth.module.css';
import Button from '../Component/Button/Button';
import Input from '../Component/Input/Input';

import axios from 'axios';

class Auth extends Component {

    state = {
        formControls: {
            touched:false,
            valid: false
        },
        inputValues: {
            email: '',
            password: ''
        }
    }

    inputChangeHandler = (event, type) => {
        let formControls = {...this.state.formControls}; 
        formControls.touched = true; 
        let isValid = this.checkValidation(event.target.value, type); 
        formControls.valid = isValid;
        this.setState({formControls}); 
        
        let inputChange = {...this.state.inputValues}; 
        inputChange[type] = event.target.value; 
        this.setState({inputValues: inputChange});
    }

    checkValidation = (value, type) => {
        let isValid = false;
        if (type === 'email') {
            const regExPattern = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
            isValid = regExPattern.test(value); 
        } else {
            if (type === 'password') {
                const regExPattern = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
                isValid = regExPattern.test(value);
            }
        }

        return isValid;
    }

    onSubmitHandler = (event) => {
        event.preventDefault(); 
        const authCreds = {
            email: this.state.inputValues.email,
            password: this.state.inputValues.password
        }
        axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=APIKEY', authCreds);
    }


    render() {
        return (
           <React.Fragment>

               <div className={classes.AuthFormContainer}>

                   <h4>Welcome!</h4>
                   <h2>Join The Community</h2>

                   <form onSubmit={this.onSubmitHandler} className={classes.AuthForm}>
                       <Input 
                        type="email"
                        placeholder="e.g.: elonMusk@mars.com"
                        label="E-Mail or Username"
                        changed ={ (event) => this.inputChangeHandler(event, 'email')} 
                        touched = {this.state.formControls.touched}
                        invalid = {!this.state.formControls.valid}/>

                        <Input 
                        type="password" 
                        placeholder="eg: X Æ A-12" 
                        label="Password"
                        changed ={ (event) => this.inputChangeHandler(event, 'password')} 
                        touched = {this.state.formControls.touched}
                        invalid = {!this.state.formControls.valid}/>

                        <div className={classes.ButtonWrapper}>
                            <Button btnType="Active">Sign Up</Button>
                        </div>

                        <p>Already a member?</p>
                        <a href="/" className={classes.Link}>Login here →</a>
                    
                   </form>

               </div>
           </React.Fragment>
        );
    }
}

export default Auth;