import React from 'react';
import { Route, Switch } from 'react-router-dom';
import '../styles/Header.css';

import home from '../images/home.jpg';
import products from '../images/products.jpg';
import contact from '../images/contact.jpg';
import admin from '../images/admin.jpg';
import error from '../images/error.jpg';


const Header = () => {

    return ( 
        <>
        <Switch>
            {/* zamiast pisać jako atrybut component można użyć render */}
             <Route path="/" exact render={() => (
                <img src={home} alt="technologia" />
            )} />
            <Route path="/products" render={() => (
                <img src={products} alt="produkty" />
            )} />
            <Route path="/product" render={() => (
                <img src={products} alt="produkty" />
            )} />
            <Route path="/contact"render={() => (
                <img src={contact} alt="kontakt" />
            )} />
            <Route path="/admin" render={() => (
                <img src={admin} alt="admin" />
            )} />
            <Route path="/login" render={() => (
                <img src={admin} alt="admin" />
            )} />
            <Route render={() => (
                <img src={error} alt="error" />
            )} />
        </Switch>
        </>
     );
}
 
export default Header;