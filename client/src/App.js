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
import PlaceOrder from './Components/Modal/PlaceOrder';
import CartContainer from './Components/Cart/CartContainer';
import SingleItem from './Components/SingleItem/SingleItem';
import Query from './Components/Query/Query';
import Order from './Components/Pages/Order/Order';

export default function App() {

  return (
    <>
      <Router>
        <Navbar />
        <PlaceOrder />
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
          <Route path="/search/:query">
            <Query />
          </Route>
          <Route path="/order">
            <Order />
          </Route>
        </Switch>
      </Router>

    </>
  )
}


