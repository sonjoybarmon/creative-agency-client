import React, { createContext, useState } from 'react';
import Home from './Conponents/Home/Home/Home';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Conponents/Login/Login';
import Order from './Conponents/Customar/Order/Order';
import ServiceList from './Conponents/Customar/ServiceList/ServiceList';
import Review from './Conponents/Customar/Review/Review';
import User from './Conponents/Admin/User/User';
import AddService from './Conponents/Admin/AddService/AddService';
import MAkeAdmin from './Conponents/Admin/MakeAdmin/MAkeAdmin';
import ServiceCard from './Conponents/Customar/ServiceCard/ServiceCard';
import PrivateRoute from './Conponents/Login/PrivateRoute';
import NotFound from './Conponents/NotFound/NotFound';

export const UserContext = createContext();
function App() {
  const [loggedInUser, setLoggedInUser] = useState({});

  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
          <Switch>
              <Route exact path='/'>
                  <Home />
              </Route>
              <Route path='/home'>
                  <Home />
              </Route>
              <Route path='/login'>
                  <Login />
              </Route>
              <PrivateRoute path='/order'>
                  <Order />
              </PrivateRoute>
              <PrivateRoute path='/serviceOrder/:title'>
                  <Order />
              </PrivateRoute>
              <PrivateRoute path='/serviceList'>
                  <ServiceList />
              </PrivateRoute>
              <PrivateRoute path='/review'>
                  <Review />
              </PrivateRoute>
              <PrivateRoute path='/admin'>
                  <User />
              </PrivateRoute>
              <PrivateRoute path='/adminService'>
                  <User />
              </PrivateRoute>
              <PrivateRoute path='/addService'>
                  <AddService />
              </PrivateRoute>
              <PrivateRoute path='/makeAdmin'>
                  <MAkeAdmin />
              </PrivateRoute>
              <Route path='*'>
                    <NotFound />
              </Route>
          </Switch>
          
      </Router>
        
    </UserContext.Provider>
  );
}

export default App;
