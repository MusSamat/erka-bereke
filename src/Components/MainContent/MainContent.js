import React, {useEffect, useState} from "react";
import {Route,Switch} from "react-router";
import Slider from "./Slider/Slider";
import MainSales from "./MainSales/MainSales";
import ServiceSection from "./Slider/ServiceSection";
import CatBanner from "./Products/CatBanner";
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
import Carousel2 from "./Carousel2";
import SearchPage from "../SearchPage/SearchPage";
import BrandsLeftTool from "../BrandsPage/BrandsLeftTool";

import GetData from "../../service/GetData";
import BlogById from "../Blog/BlogById";
import ThemeLeftTool from "../ThemeProducts/ThemeLeftTool";
import MobileHeader from "../Header/MobileHeader/MobileHeader";


const MainContent = () => {
    const isLogin = useSelector(state => state.isLogin.isLogin)
    const [themeProducts, setThemeProducts] = useState([])

    function GetThemeProducts(){
        new GetData().getData("/views/theme/").then(res => {
            setThemeProducts(res)
        })
    }

    useEffect(() => {
        GetThemeProducts()
    },[])

    return (
        <div className='main'>
            <Switch>
                <Route exact path='/' render={() => {
                    return (
                        <>

                            <Slider/>
                            <ServiceSection/>
                            <MainSales/>
                            <Carousel2/>
                            {
                                themeProducts?.map((item, i) => (
                                    <CatBanner
                                        id={item.id}
                                        image={item.image}
                                        title={item.title}
                                    />
                                ))
                            }
                        </>
                    )
                }}/>
                <Route exact={true} path='/search/:searchInput' component={SearchPage}/>
                <Route exact={true} path='/categories/:id' component={Catalog}/>
                <Route exact={true} path='/subcategories/:id' component={SubCatalog}/>
                <Route  exact={true} path='/subcategories1/:id' component={SubCatalog1}/>
                <Route exact={true}  path='/subcategories2/:id' component={SubCatalog2}/>
                <Route exact={true} path="/brands/:id" component={BrandsLeftTool}/>
                <Route exact={true}  path="/bytheme/:id" component={ThemeLeftTool}/>
                <Route  exact={true} path='/product/:id' component={Product}/>
                <Route exact path="/cart" component={Cart}/>
                <Route exact path='/wishlist' component={Wishlist}/>
                <Route exact path='/news-blogs' component={Blog}/>
                <Route exact path="/blog/:id" component={BlogById}/>
                <Route exact path='/contact' component={Contact}/>
                <Route exact path='/404' component={NotFound}/>
                <Route exact path="/order" component={Order}/>

                {
                    isLogin ? <Route path="/userpage" component={UserRoute}/> : ''
                }
            </Switch>
        </div>
    )
}

export default MainContent