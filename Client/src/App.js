import React from 'react';
import "./app.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './components/Navbar/Navbar'
import Category from './components/Category/Category'
import MainBody from './components/MainBody/MainBody'
import Footer from './components/Footer/Footer'
import ViewAll from './components/MainBody/ViewAll/ViewAll';

// import FAQ from './components/FAQ/FAQ'
import Testing from './Testing/Testing';
import Login from './components/Modal/Login';
import Cart from './components/Cart/Cart';

export default function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Login />
        <Switch>
          <Route exact path="/">
            <Category />
            <MainBody />
            <Footer />
          </Route>
          <Route path="/viewall">
            <Category />
            <ViewAll />
          </Route>
          <Route path="/cart"><Cart /></Route>
        </Switch>
      </Router>

    </>
  )
}


