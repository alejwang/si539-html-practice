import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Link } from 'react-router-dom'
import Home from './containers/Home';
import App from './containers/App';

export default (
  <BrowserRouter>
    <div>
    <Route path="/" exact component={App} />
    <Route path="/home"component={Home} />
    </div>
  </BrowserRouter>
);
