import React, { Fragment } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Home from "./components/pages/Home"
import Dashboard from "./components/pages/Dashboard"
import About from "./components/pages/About"
import NewFooter from "./components/layout/NewFooter"
import NavigationBar from "./components/layout/NavigationBar";
import { withAuthenticator, AmplifySignOut } from '@aws-amplify/ui-react';
import Amplify, { Analytics } from 'aws-amplify';
import awsconfig from './aws-exports';
Amplify.configure(awsconfig);

const analyticsConfig = {
  AWSPinpoint: {
        // Amazon Pinpoint App Client ID
        appId: 'e536884a49a649078bccc0de59c5c1d5',
        // Amazon service region
        region: 'us-east-1',
        mandatorySignIn: false,
  }
}

Analytics.configure(analyticsConfig)

const App = () => {
  return (
    <Fragment>
    <Router>
      <NavigationBar/>
      <Switch>
         <Route exact path="/home" component={Home} />
         <Route exact path="/about" component={About} />
         <Route exact path="/dashboard" component={Dashboard} />
        <Route component={Home} />
      </Switch>
      <NewFooter/> 
    </Router>

    </Fragment>
  );
}
export default withAuthenticator(App);