import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useTranslation} from 'react-i18next';
import './Header.css'
import AuthUser from "../../UsersInfo/AuthUser";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoginValue} from "../../store/actions/isLogin";
import {getCartProducts} from "../../store/actions/product";
import {resetCart} from "../../store/actions/cartProducts";
import {resetWishlist} from "../../store/actions/wishlistProducts";

const HeaderTop = () => {

    const dispatch = useDispatch()

    const isLogin = useSelector(state => state.isLogin.isLogin)

    const {t, i18n} = useTranslation();

    function languageChangeHandler(lang){
        i18n.changeLanguage(lang);
    }

    const checkToken = () => {
        if(localStorage.getItem('token')){
        dispatch(getIsLoginValue(true))
        }
    }

    const logOutHandler = () => {
        dispatch(getIsLoginValue(false))
        dispatch(resetCart())
        dispatch(resetWishlist())
        localStorage.clear()
    }
    useEffect(()=> {
        checkToken()
    },[dispatch])

    return(
        <div className='container'>
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <a href="tel:#"><i className="icon-phone"></i> {t("CallNumber.1")}: +996 773 020 304</a>
                    </div>

                    <div className="header-right">

                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#" style={{fontWeight: "600", fontSize: 17}}>{t("Lang.1")}</a>
                                            <div className="header-menu lang_style">
                                                <ul>
                                                    <li><div
                                                           onClick={()=> languageChangeHandler('kyr')}
                                                    >Кыр</div></li>
                                                    <li><div
                                                           onClick={()=> languageChangeHandler('ru')}
                                                    >Ru</div></li>
                                                    <li><div
                                                           onClick={()=> languageChangeHandler('tr')}
                                                    > Tr</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    {/*<i className='icon-user' style={{fontSize: 20}}></i>*/}
                                    {
                                        isLogin ?
                                            <li style={{ display: "flex", flexDirection: "row", gap: 10}}
                                        >
                                                <NavLink to='/userpage'>
                                                    <img src="/assets/svg_logo/user.svg" alt="user" style={{textAlign: 'center'}} className="logOut"/>
                                                </NavLink>
                                            <span className="logOut" style={{color: "grey"}} onClick={logOutHandler}>Выйти</span></li> :

                                            <li className="login logIn" >
                                                <img src="/assets/svg_logo/userAuth.svg" alt="user"/>
                                                <a href="#signin-modal" data-toggle="modal"
                                               style={{fontWeight: "600"}}>{t("Reg.1")} / {t("Reg.2")} </a>
                                        </li>
                                    }
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop