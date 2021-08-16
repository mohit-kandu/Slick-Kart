import React from 'react';
import "./app.css"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navbar from './Components/Navbar/Navbar'
import Category from './Components/Category/Category'
import MainBody from './Components/MainBody/MainBody'
import Footer from './Components/Footer/Footer'
import ViewAll from './Components/MainBody/ViewAll/ViewAll';

// import FAQ from './components/FAQ/FAQ'
// import Testing from './Testing/Testing';
import Login from './Components/Modal/Login';
import CartContainer from './Components/Cart/CartContainer';
import SingleItem from './Components/SingleItem/SingleItem';

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
          <Route path="/cart">
            <CartContainer />
          </Route>
          <Route path="/singleItem/:itemID">
            <SingleItem />
            <Footer />
          </Route>
        </Switch>
      </Router>

    </>
  )
}


