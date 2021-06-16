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
import Order from "../Order/Order";
import UserRoute from "../User/UserRoute";
import UserPage from "../User/UserPage";
import {useSelector} from "react-redux";
import SubCatalog from "../SubCategories/SubCatalog";
import SubCatalog1 from "../SubCategories1/SubCatalog1";
import SubCatalog2 from "../SubCategories2/SubCatalog2";

const MainContent = () => {
    const isLogin = useSelector(state => state.isLogin.isLogin)

    return (
        <div className='main'>

            <Route exact path='/' exact render={() => {
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
            <Route  path='/categories/:id' component={Catalog}/>
            <Route  path='/subcategories/:id' component={SubCatalog}/>
            <Route  path='/subcategories1/:id' component={SubCatalog1}/>
            <Route  path='/subcategories2/:id' component={SubCatalog2}/>

            <Route  path='/product/:id' component={Product}/>
            <Route exact path="/cart" component={Cart}/>
            <Route exact path='/wishlist' component={Wishlist}/>
            <Route exact path='/blog' component={Blog}/>
            <Route exact path='/contact' component={Contact}/>
            <Route exact path='/404' component={NotFound}/>
            <Route exact path="/order" component={Order}/>
            {
               isLogin ? <Route path="/userpage" component={UserRoute}/> : ''
            }
            {/*<Route exact path='*' exact render={() => {*/}
            {/*    return (*/}
            {/*        <>*/}
            {/*            <Slider/>*/}
            {/*            <ServiceSection/>*/}
            {/*            /!*<IconBoxes/>*!/*/}
            {/*            <MainSales/>*/}
            {/*            <HotDealProducts/>*/}
            {/*            <CatBanner/>*/}
            {/*            <CatBanner2/>*/}
            {/*        </>*/}
            {/*    )*/}
            {/*}}/>*/}
        </div>
    )
}

export default MainContent