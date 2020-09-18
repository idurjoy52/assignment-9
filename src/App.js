import React, { createContext, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './App.css';
import Header from './Components/Header/Header';
import Home from './Components/Home/Home';
import Booking from './Components/Booking/Booking';
import LogIn from './Components/LogIn/LogIn';
import HotelRoom from './Components/HotelRoom/HotelRoom';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Error from './Components/Error/Error';
import ComingSoon from './Components/ComingSoon/ComingSoon';


export const UserContext = createContext();
function App() {
  const [loggedInUser,setLoggedInUser] = useState({});
  return (
    <UserContext.Provider value = {[loggedInUser,setLoggedInUser]}>
    <div className="app">
    <Router> 
      <Header></Header>
      <Switch> 
        <Route path="/booking/:nameOfPlace">
            <Booking></Booking>
        </Route>
        <Route exact path ="/">
            <Home></Home>
        </Route>
        <Route path = "/login">
          <LogIn></LogIn>
        </Route>
        <PrivateRoute path = "/hotel">
          <HotelRoom></HotelRoom>
        </PrivateRoute>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/destination">
          <ComingSoon></ComingSoon>
        </Route>
        <Route path="/blog">
          <ComingSoon></ComingSoon>
        </Route>
        <Route path="/contact">
          <ComingSoon></ComingSoon>
        </Route>
        <Route path = "*">
          <Error></Error>
        </Route>
      </Switch>
    </Router>
    </div>
    </UserContext.Provider>
  );
}

export default App;
