import React, { useContext, useState } from 'react';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import LogNav from '../Navbar/LogNav';
import './login.css'
import { handleFbSignIn, handleGoogleSignIn, initializeFirebaseConfig, initializeLoginFramework, signInWithEmail, signInWithEmailAndPassword } from './LoginManagement';



const Login = () => {
    const [passConfMessage, setPassConfMessage] = useState("")

    const [loggedInUser, setLoggedInUser ] = useContext(UserContext);
    // console.log(loggedInUser.email);
    const [user, setUser] = useState({
        isSignedIn: false,
        name: '',
        email: '',
        password: '',
        photo: ''
      });

      initializeLoginFramework();

    const history = useHistory();
  const location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

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
        console.log(res);
        if(redirect){
            history.replace(from);
        }
      }

    const handelBlur = (e) => {
        let isFieldValid = true;
        if(e.target.name === 'email'){
          isFieldValid = /\S+@\S+\.\S+/.test(e.target.value);
        }
        if(e.target.name === 'password'){
          const isPasswordValid = e.target.value.length > 6;
          const passwordHasNumber =  /\d{1}/.test(e.target.value);
          isFieldValid = isPasswordValid && passwordHasNumber;
        }
        if(isFieldValid){
          const newUserInfo = {...user};
          newUserInfo[e.target.name] = e.target.value;
          setUser(newUserInfo);
        }
    }

    const handelSubmit = (e) => {
        if( user.email && user.password){
            signInWithEmailAndPassword(user.email, user.password)
            .then(res => {
              alert("Login successful")
              handleResponse(res, true);
            })
          }
          e.preventDefault();
    }



    return (
       <div className="login-area">
         <LogNav></LogNav>
          <form onSubmit={handelSubmit} className="form-costomize" action="">
            <h3>Login</h3>
            <input onBlur={handelBlur} type="email" name="email" id="" placeholder="Username or Email" required/><br/>
            <input onBlur={handelBlur} type="password" name="password" id="" placeholder="Password" required/><br/>
            <input className="submit-btn btn btn-warning" type="submit" value="Login" required/><br/>
            <p className="pera-tag">Don't have an account? <Link to="/signup">Create an account</Link></p>
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

export default Login;