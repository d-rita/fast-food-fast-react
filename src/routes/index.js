import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RegisterView from '../views/registerView';
import Header from '../components/Header';
import Footer from '../components/Footer';

const Routes = () => (
  <Router>
    <div>
      <Header />
      <Route path="/" exact strict component={RegisterView} />
      <Footer />
    </div>
  </Router>
);

export default Routes;
