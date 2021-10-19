import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import Navbar from './Navbar';
import Home from './Home';
import Listo from './Listo';
import ListoCopy from './ListoCopy';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

ReactDOM.render(

  <BrowserRouter>
  <Navbar />
  <Switch>
    <Route exact path="/Home" component={Home}></Route>
    <Route exact path="/ListoCopy" component={ListoCopy}></Route>
    <Route exact path="/Listo" component={Listo}></Route>

  </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
