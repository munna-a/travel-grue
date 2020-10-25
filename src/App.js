import React, { createContext, useState } from 'react';
import './App.css';
import Home from './Components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Nav from './Components/Navbar/Nav';
import Login from './Components/Login/Login';
import Contact from './Components/Contact/Contact';
import Signup from './Components/Login/Signup';
import Booking from './Components/Booking/Booking';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Hotels from './Components/Hotels/Hotels';
import NotFound from './Components/NotFound/NotFound'; 

export const UserContext = createContext();

function App(props) {
  const [loggedInUser, setLoggedInUser ] = useState({});
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
      <Router>
      {/* <Nav></Nav> */}
      
        <Switch>
          <Route exact path="/">
          <Home></Home>
          </Route>
          <Route path="/login">
          <Login></Login>
          </Route>
          <Route path="/booking/:id">
            <Booking></Booking>
          </Route>
          <PrivateRoute path="/hotels/:name" exact>
            <Hotels></Hotels>
          </PrivateRoute>
          <Route path="/signup">
            <Signup></Signup>
          </Route>
          <Route path="/contact">
            <Contact></Contact>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
