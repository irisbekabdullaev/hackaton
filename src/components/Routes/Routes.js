import React from 'react';
import {BrowserRouter, Switch, Route} from "react-router-dom";
import CartContextProvider from '../../contexts/CartContext';
import ContextItemProvider from '../../contexts/ContextItem';
import AddProduct from '../Admin/AddProduct';
import Login from '../Auth/Login/Login';
import RegisterForm from '../Auth/Register';
import Board from "../Board/Board";
import Buy from '../Buy/Buy'
import CheckoutForm from '../Buy/ChekOutForm'
import Favorite from '../Favorite/Favorite'
import Cart from '../ProductsCart/Cart';
// import Registration from '../Login/Registration';
// import ProductsCart from '../ProductsCart/ProductsCart';

import ProductsList from "../ProductsCategory/Products-list";

const Routes = () => {
    return (
        
        <CartContextProvider>
        <ContextItemProvider>
        <BrowserRouter>
            <Switch>
                <Route exact path='/' component={Board}/>
                <Route exact path='/products' component={ProductsList}/>
                <Route exact path='/admin' component={AddProduct}/>
                <Route exact path='/cart' component={Cart}/>
                <Route exact path='/favorite' component={Favorite}/>
                <Route exact path='/register' component={RegisterForm}/>
                <Route exact path='/login' component={Login}/>
                <Route exact path='/checkout' component={CheckoutForm}/>
                <Route exact path='/buy' component={Buy}/>

            </Switch>
        </BrowserRouter>
        </ContextItemProvider>
        </CartContextProvider>
    );
};

export default Routes;
