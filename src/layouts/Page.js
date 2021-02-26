import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomePage from '../pages/HomePage';
import ProductPage from '../pages/ProductPage';
import ProductListPage from '../pages/ProductListPage';
import ContactPage from '../pages/ContactPage';
import AdminPage from '../pages/AdminPage';
import ErrPage from '../pages/ErrPage';
import LoginPage from '../pages/LoginPage';

const Page = () => {
    return ( 
    <>
       <Switch>
            <Route path="/" exact component={HomePage} />
            <Route path="/products" component={ProductListPage} />
            {/* :id (może być cokolwiek aby po dwukropku, np. :name itd.) oznacza dowolny element żeby na sztywno nie przypisywać podstrony do której chcemy się odwołać */}
            <Route path="/product/:id" component={ProductPage} /> 
            <Route path="/contact" component={ContactPage} />
            <Route path="/admin" component={AdminPage} />
            <Route path="/login" component={LoginPage} />
            <Route component={ErrPage} />
        </Switch>
    </>
     );
}
 
export default Page;