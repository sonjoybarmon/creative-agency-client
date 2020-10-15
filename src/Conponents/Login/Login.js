import React, { useContext } from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { UserContext } from '../../App';
import logo from '../../images/logos/logo.png'

const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
      }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const history = useHistory();
    const location = useLocation();
    const { from } = location.state || { from: { pathname: "/" } };
    
    
        const handleGoogleSignIn = () => {
            var provider = new firebase.auth.GoogleAuthProvider();
            firebase.auth().signInWithPopup(provider).then(function (result) {
              const { displayName, email } = result.user;
              const signedInUser = { name: displayName, email }
              setLoggedInUser(signedInUser);
              storeAuthToken();
            }).catch(function (error) {
              const errorMessage = error.message;
              console.log(errorMessage);
            });
          }
        
          const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true)
              .then(function (idToken) {
                sessionStorage.setItem('token', idToken);
                history.replace(from);
              }).catch(function (error) {
                // Handle error
              });
          }
          
          const loginStyle = {
              border :' 1px solid #666666',
              padding : '20px',
              margin : 'auto',
              textAlign : 'center',
              height : '400px',
              borderRadius : '15px'
          }
          const loginLogo ={
            width : '180px',
            margin: '50px 0',
          }

    return (
        <div className="login-page container" style={{ height: "100vh" }}>
            <div className=" d-flex justify-content-center" >
             <Link to='/home'><img style={loginLogo} src={logo} alt="logo"/> </Link> 
            </div>
            <div className="row justify-content-center" >
                <div style={loginStyle} className="col-md-6 d-flex align-items-center justify-content-center">
                  <div className="box">
                      <h1>Login With</h1>
                      <button className="btn btn-brand btn-primary my-3" onClick={handleGoogleSignIn}>
                        Continue with Google 
                      </button>
                      <p>Don’t have an account? <Link to='/login'>Create an account</Link> </p>
                  </div>
                </div>
            </div>
        </div>
    );
};

export default Login;