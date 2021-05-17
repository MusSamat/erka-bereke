import React from "react";
import {Route} from "react-router";
import Header2 from "./Header2";
import Catalog from "../../Catalog/Catalog";
import Product from "../../Product/Product";
import Cart from "../../Cart/Cart";
import Wishlist from "../../Wishlist/Wishlist";
import Blog from "../../Blog/Blog";
import Contact from "../../Contact/Contact";
import NotFound from "../../NotFoundPage/NotFound";

const Header2Route =  () => {
    return(
        <>

            <Header2/>
            <Route path='/categories' component={Catalog}/>
            <Route path='/product' component={Product}/>
            <Route path="/cart" component={Cart}/>
            <Route path='/wishlist' component={Wishlist}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/404' component={NotFound}/>
        </>
    )
}

export default Header2Route