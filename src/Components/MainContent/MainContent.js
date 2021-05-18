import React from "react";
import {Route} from "react-router";
import Slider from "./Slider/Slider";
import MainSales from "./MainSales/MainSales";
import HotDealProducts from "./Products/HotDealProducts";
import ServiceSection from "./Slider/ServiceSection";
import CatBanner from "./Products/CatBanner";
import CatBanner2 from "./Products/CatBanner2";
import Catalog from "../Catalog/Catalog";
import Product from "../Product/Product";
import Cart from "../Cart/Cart";
import Wishlist from "../Wishlist/Wishlist";
import Blog from "../Blog/Blog";
import Contact from "../Contact/Contact";
import NotFound from "../NotFoundPage/NotFound";

const MainContent = () => {
    return (
        <div className='main'>

            <Route path='/' exact render={() => {
                return (
                    <>
                        <Slider/>
                        <ServiceSection/>
                        {/*<IconBoxes/>*/}
                        <MainSales/>
                        <HotDealProducts/>
                        <CatBanner/>
                        <CatBanner2/>
                    </>
                )
            }}/>
            <Route path='/categories' component={Catalog}/>
            <Route path='/product' component={Product}/>
            <Route path="/cart" component={Cart}/>
            <Route path='/wishlist' component={Wishlist}/>
            <Route path='/blog' component={Blog}/>
            <Route path='/contact' component={Contact}/>
            <Route path='/404' component={NotFound}/>
        </div>
    )
}

export default MainContent