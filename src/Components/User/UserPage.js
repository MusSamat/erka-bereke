import React, {useEffect} from "react";
import Nav from "../Nav/Nav";
import NavBanner from "../Nav/NavBanner";
import './User.css'
import UserInfo from "./UserInfo";
import OrderHistory from "./OrderHistory";
import {Route, Switch} from "react-router";
import {Link, NavLink} from "react-router-dom";
import {getIsLoginValue} from "../../store/actions/isLogin";
import {useDispatch} from "react-redux";
import {resetCart} from "../../store/actions/cartProducts";
import {resetWishlist} from "../../store/actions/wishlistProducts";

const UserPage = () => {

    const dispatch = useDispatch()
    useEffect(() => {
        window.scrollTo(0,0)
    }, [])

    const logOutHandler = () => {
        dispatch(getIsLoginValue(false))
        localStorage.clear()
        dispatch(resetCart())
        dispatch(resetWishlist())
        window.location.href = "/"
    }
    return (
        <>
            <NavBanner/>
            <Nav
                name={"Личный кабинет"}
            />
            <div className='container'>
                <div className='row'>
                    <div className="col-lg-4  col-md-4col-sm-12">
                        <div className=' nav flex-column nav-pills db_active" id="v-pills-tab" role="tablist userPage'>
                            <NavLink  activeStyle={{backgroundColor: "#ccbc30", color: "white"}} to="/userpage" className="userPage-link "> Личные данные </NavLink>
                            <NavLink  activeStyle={{backgroundColor: "#ccbc30", color: "white"}} to="/history" className="userPage-link" activeClass={{backgroundColor: "yellow"}}> История заказов</NavLink>
                            <button style={{border: "none", fontSize: 20}}   className="userPage-link " onClick={logOutHandler}> Выйти </button>
                        </div>
                    </div>
                    <div className="col-lg-7 offset-1 col-md-7 offset-1  col-sm-12  tab-content" id="v-pills-tab">
                        <Switch>
                            <Route path="/userpage" component={UserInfo}/>
                            <Route path="/history" component={OrderHistory}/>
                        </Switch>
                    </div>
                </div>
            </div>
        </>
    )
}

export default UserPage