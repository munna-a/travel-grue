import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import LogNav from '../Navbar/LogNav';
import { createUserWithEmailAndPassword, handleFbSignIn, handleGoogleSignIn,  initializeLoginFramework, signInWithEmailAndPassword } from './LoginManagement';
import './signup.css'

const Signup = () => {
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
      });

    const [passConfMessage, setPassConfMessage] = useState("")
    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    initializeLoginFramework();

    const googleSignIn = () => {
        handleGoogleSignIn()
        .then(res => {
          handleResponse(res, true);
        })
    }

     const fbSignIn = () => {
        handleFbSignIn()
        .then(res => {
          handleResponse(res, true);
        })
  
    }

    const handleResponse = (res, redirect) =>{
        setUser(res);
        setLoggedInUser(res);
        if(redirect){
            history.replace(from);
        }
      }
      const handleBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'name'){
            isFieldValid = e.target.value.length > 3;
            // if(e.target.value.length > 3){
            //     setPassConfMessage("password was to long")
            // }
        }
        if(e.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            isFieldValid = e.target.value.length >= 6;

        }
        if(isFieldValid){
          const newUserInfo = {...user};
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
      }
      const handleSubmit = (e) => {
        if(user.email && user.password){
          createUserWithEmailAndPassword(user.name, user.email, user.password)
          .then(res => {
              alert("Account create success")
            handleResponse(res, true);
          })
          .catch(err => {
              alert("account create error")
          })
        }
    
        e.preventDefault();
      }

    return (
        <div className="sign-up">
          <LogNav></LogNav>
            <form onClick={handleSubmit} className="form-costomize" action="">
            <h3>Create an account</h3>
            <input onBlur={handleBlur} type="text" name="name" placeholder="Name" required/><br/>
            {/* {
                user.name.length  < 3 ? <small style={{color: 'red'}}>type 4 digit name</small> : <small></small>
            } */}
            <input onBlur={handleBlur} type="email" name="email" id="" placeholder="Username or Email" required/><br/>
           
            <input onBlur={handleBlur} type="password" name="password" id="" placeholder="Password" required/><br/>
            {/* {
                user.password.length  <= 6 ? <small style={{color:'red'}}>type 6 digit password</small> : <small></small>
            } */}
            <input className="submit-btn btn btn-warning" type="submit" value="Create an Account"/>
            <p className="pera-tag">Already have an account? <Link to="/login">Login</Link></p>
            </form>
            <div className="another-method">
                <h6 style={{textAlign: 'center'}}>Or</h6>
               <button onClick={fbSignIn} className="social-button">
                   <img className="social-icon" src="https://www.freepngimg.com/thumb/facebook/62487-bluetie-icons-computer-facebook-login-icon-email.png" alt=""/>
                   <span className="align-self-center button-text">Continue with facebook</span>
                </button><br/>
                <button onClick={googleSignIn} className="social-button">
                    <img className="social-icon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/53/Google_%22G%22_Logo.svg/1004px-Google_%22G%22_Logo.svg.png" alt=""/>
                    <span className="align-self-center button-text">Continue with Google</span>
                </button>
            </div>

        </div>
    );
};

export default Signup;