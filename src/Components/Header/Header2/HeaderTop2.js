import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {getIsLoginValue} from "../../../store/actions/isLogin";
import {resetCart} from "../../../store/actions/cartProducts";
import {resetWishlist} from "../../../store/actions/wishlistProducts";

import {NavLink as Link, NavLink} from "react-router-dom";

const HeaderTop2 = () => {

    const dispatch = useDispatch()
    const token = JSON.parse(localStorage.getItem("token"))
    const isLogin = useSelector(state => state.isLogin.isLogin)

    const {t, i18n} = useTranslation();

    function languageChangeHandler(lang) {
        i18n.changeLanguage(lang);
    }

    const checkToken = () => {
        if (localStorage.getItem('token')) {
            dispatch(getIsLoginValue(true))
        }
    }

    const logOutHandler = () => {
        dispatch(getIsLoginValue(false))
        dispatch(resetCart())
        dispatch(resetWishlist())
        localStorage.clear()
    }
    useEffect(() => {
        checkToken()
    }, [dispatch])

    return (
        <div className="header-top">
            <div className="container">
                <div className="header-left">
                    <a href="tel:#"><i className="icon-phone"></i> {t("CallNumber.1")}: +996 773 020 304</a>
                </div>

                <div className="header-right">

                    <ul className="top-menu">
                        <li>
                            <a href="#">Линки</a>
                            <ul>
                                <li>
                                    <div className="header-dropdown">
                                        <a href="#" style={{fontWeight: "600", fontSize: 17}}>{t("Lang.1")}</a>
                                        <div className="header-menu lang_style">
                                            <ul>
                                                <li>
                                                    <div
                                                        onClick={() => languageChangeHandler('kyr')}
                                                    >Кыр
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        onClick={() => languageChangeHandler('ru')}
                                                    >Ru
                                                    </div>
                                                </li>
                                                <li>
                                                    <div
                                                        onClick={() => languageChangeHandler('tr')}
                                                    > Tr
                                                    </div>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </li>
                                {/*<i className='icon-user' style={{fontSize: 20}}></i>*/}
                                {
                                    token ?
                                        <li style={{display: "flex", flexDirection: "row", gap: 10}}
                                        >
                                            <NavLink to='/userpage'>
                                                <img src="/assets/svg_logo/user.svg" alt="user"
                                                     style={{textAlign: 'center'}} className="logOut"/>
                                            </NavLink>
                                            <span className="logOut" style={{color: "grey"}}
                                                  onClick={logOutHandler}>Выйти</span></li> :

                                        <li className="login logIn">
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
    )
}

export default HeaderTop2