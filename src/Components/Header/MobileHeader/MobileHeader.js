import React, {useEffect, useState} from "react";
import {NavLink, withRouter} from "react-router-dom";
import {mobile_menu} from "../../../service/accessFunctions";
import {searchProduct} from "../../../store/actions/searchProduct";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {getCategory} from "../../../store/actions/category";
import {setSaleValue} from "../../../store/actions/sale";
import {resetBrands} from "../../../store/actions/brands_action";



const MobileHeader = (props) => {
    const {t, i18n} = useTranslation();
    const [searchInput, setSearchInput] = useState()
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.category)

    useEffect(() => {
        dispatch(getCategory())
        mobile_menu()
    }, [])

    const redirectToSearch = (e) => {
        e.preventDefault()
        props.history.push("/search/" + searchInput)
    }

    return (
        <>
            <button id="scroll-top" title="Back to Top"><i className="icon-arrow-up"></i></button>
            <div className="mobile-menu-overlay"></div>


            <div className="mobile-menu-container mobile-menu-light">
                <div className="mobile-menu-wrapper">
                    <span className="mobile-menu-close"><i className="icon-close"></i></span>
                    <form onSubmit={(e) => redirectToSearch(e)} className="mobile-search">
                        <label htmlFor="mobile-search" className="sr-only">Search</label>
                        <input type="search" className="form-control" name="mobile-search" id="mobile-search"
                               placeholder="Поиск ..." required
                               onChange={(e) => {
                                   setSearchInput(e.target.value)
                                   dispatch(searchProduct(searchInput))
                               }}
                        />
                            <button className="btn btn-primary" type="submit"
                                style={{
                                    backgroundColor: "#ccbc30",
                                    border: "1px solid #ccbc30"
                                }}
                            ><i className="icon-search"></i></button>
                    </form>

                    <ul className="nav nav-pills-mobile nav-border-anim" role="tablist">
                        <li className="nav-item">
                            <a className="nav-link active" id="mobile-menu-link" data-toggle="tab"
                               href="#mobile-menu-tab" role="tab" aria-controls="mobile-menu-tab"
                               aria-selected="true">Меню</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" id="mobile-cats-link" data-toggle="tab" href="#mobile-cats-tab"
                               role="tab" aria-controls="mobile-cats-tab" aria-selected="false">Категории</a>
                        </li>
                    </ul>

                    <div className="tab-content">
                        <div className="tab-pane fade show active" id="mobile-menu-tab" role="tabpanel"
                             aria-labelledby="mobile-menu-link">
                            <nav className="mobile-nav">
                                <ul className="mobile-menu">
                                    <li style={{
                                        margin: 0,
                                        color: "#FFFFFF"
                                    }}><NavLink to="/"
                                                activeStyle={{
                                                    color: "#ccbc30",
                                                }}
                                    >{t("Main.Main")}</NavLink></li>
                                    <li style={{
                                        margin: 0,
                                        color: "#FFFFFF"
                                    }}><NavLink  to="/news-blogs"
                                                 activeStyle={{
                                                     color: "#ccbc30"
                                                 }}
                                    >{t("Footer.FooterMenu.1.4")}</NavLink>
                                    </li>
                                    <li style={{
                                        margin: 0,
                                        color: "#FFFFFF"
                                    }}><NavLink  to="/contact"
                                                 activeStyle={{
                                                     color: "#ccbc30"
                                                 }}
                                    >{t("Footer.FooterMenu.1.5")}</NavLink>
                                    </li>
                                    <li style={{
                                        margin: 0,
                                        color: "#FFFFFF"
                                    }}>Скидки
                                    </li>
                                </ul>
                            </nav>
                        </div>

                        <div className="tab-pane fade" id="mobile-cats-tab" role="tabpanel"
                             aria-labelledby="mobile-cats-link">
                            <nav className="mobile-cats-nav">
                                <ul className="mobile-cats-menu">{
                                    categories?.map((item, i) => (
                                        <li key={i}>
                                            <NavLink
                                                onClick={() => {
                                                dispatch(setSaleValue(false));
                                                dispatch(resetBrands())
                                            }}
                                                activeStyle={{
                                                    color: "#ccbc30"
                                                }}
                                                to={{
                                                    pathname: "/categories/" + item.id,
                                                }}>
                                            {item.title}
                                        </NavLink></li>
                                    ))
                                }
                                </ul>

                            </nav>

                        </div>

                    </div>


                    <div className="social-icons">
                        <a href="#" className="social-icon" target="_blank" title="Facebook"><i
                            className="icon-facebook-f"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Twitter"><i
                            className="icon-twitter"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Instagram"><i
                            className="icon-instagram"></i></a>
                        <a href="#" className="social-icon" target="_blank" title="Youtube"><i
                            className="icon-youtube"></i></a>
                    </div>
                </div>
            </div>
        </>
    )
}

export  default withRouter(MobileHeader)