/* eslint-disable import/no-named-as-default */
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterView from '../views/registerView';
import Header from '../components/Header';
import Footer from '../components/Footer';
import LoginView from '../views/LoginView';


const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={RegisterView} />
      <Route path="/login" exact strict component={LoginView} />
      <Footer />
    </div>
  </Router>
);

export default Routes;
