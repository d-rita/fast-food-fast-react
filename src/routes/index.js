import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import App from '../components/App';

const Routes = () => (
  <Router>
    <Route path="/home" component={App} />
  </Router>
);

export default Routes;