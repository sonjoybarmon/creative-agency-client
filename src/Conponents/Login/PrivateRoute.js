import React, { useEffect, useState } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';
import jwt_decode from "jwt-decode";

const PrivateRoute = ({children, ...rest}) => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    
    const [adminEmail, setAdminEmail] = useState([]);

    useEffect(()=>{
        fetch("http://localhost:8080/getEmail?email=" + loggedInUser.email)
        .then(res=>res.json())
        .then(data => setAdminEmail(data))
    }, [])
    
    const isLoggedIn = () => {
      const token = sessionStorage.getItem('token');
      if (!token) {
          return false;
      }
      const decodedToken = jwt_decode(token);
      const currentTime = new Date().getTime() / 1000;
      return decodedToken.exp > currentTime;
  }
    return (
        <Route
      {...rest}
      render={({ location }) =>
        (loggedInUser.email || loggedInUser.name || adminEmail.email || isLoggedIn() ) ? (
          children
        ) : (
          <Redirect
            to={{
              pathname: "/login",
              state: { from: location }
            }}
          />
        )
      }
    />
    );
};

export default PrivateRoute;