import React from "react";
import "./App.css";
import Booknow from "./pages/Booknow";
import Home from "./pages/Home";
import Rooms from "./pages/Rooms";
import SingleRoom from "./pages/SingleRoom";
import Error from "./pages/Error";
import Navbar from "./components/Navbar";
import { Switch, Route } from "react-router-dom";
import Body from "./components/Body"; 
import Location from "./Location";
import Profile from './pages/Profile';
import Login from "./Login";
import Bookings from './pages/Bookings';
import {AmplifySignOut, withAuthenticator} from '@aws-amplify/ui-react';

function App() {
  return (
    <>
      <Navbar />
      <Switch>
      <Route exact path="/" component={Login} />
        <Route exact path="/body" component={Body} />
        <Route exact path="/home" component={Home} />
        <Route exact path="/profile"component={Profile} />
        <Route exact path="/location"component={Location} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/bookings" component={Bookings} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
        <Route exact path="/booknow/:slug" component={Booknow} />
        
      
      </Switch>
    </>
  );
}

export default withAuthenticator(App);
