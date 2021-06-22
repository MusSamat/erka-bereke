import React, {useEffect, useState} from "react";
import CatalogProducts from "./CatalogProducts";
import {useDispatch, useSelector} from "react-redux";
import {LengthOfProductsBySubCategory} from "./LengthOfProductsBySubCategory";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Categories = (props) => {
    const {t, i18n} = useTranslation();
    const [sale, setSale] = useState(false)
    const id = parseInt(props.props.match.params.id)
    const categories = useSelector(state => state.category.category)
    const subcategoreis = useSelector(state => state.subcategory.subcategory)
    const prodLength = useSelector(state => state.product.products.filter((item, index) => {
        if (item.category_id === id) {
            return item
        }
    }).length)


    useEffect(() => {
        let loadScript = function (src) {
            let tag = document.createElement('script');
            tag.async = false;
            tag.src = src;
            document.getElementsByTagName('body')[0].appendChild(tag);
        }
        loadScript('/assets/js/owl.carousel.min.js')
        loadScript('/assets/js/bootstrap-input-spinner.js')
        loadScript('/assets/js/main.js')
        loadScript('/assets/js/demos/demo-13.js')
    }, [])


    return (
        <div className="page-content">
            <div className="container">
                <div className="row">

                    <CatalogProducts
                        props={props}
                        sizeOfProd={prodLength}
                        sale={sale}
                    />

                    <aside className="col-lg-3 col-xl-5col order-lg-first">
                        <div className="sidebar sidebar-shop"
                             style={{border: '1px solid #d2d0d0', borderRadius: '8px'}}>
                            <div className="widget widget-categories">
                                <h3 className="widget-title"
                                    style={{paddingTop: 20, paddingLeft: 20, fontWeight: "bold"}}>
                                    {categories.map((it, i) => {
                                        if (it.id === id) {
                                            return (
                                                it.title
                                            )
                                        }
                                    })}</h3>
                                <h5 style={{paddingLeft: 20}}> {prodLength} түр</h5>

                                <div className="widget-body">
                                    <div className="accordion" id="widget-cat-acc">
                                        <hr/>
                                        <div className="prodCategor">
                                            <h6>Категориялар</h6>
                                            <ul>
                                                {subcategoreis.map((subItem, i) => {
                                                    if (subItem.categories === id) {

                                                        return (
                                                            <NavLink
                                                                activeStyle={{
                                                                    color: "#ccbc30"
                                                                }}
                                                                to={{
                                                                    pathname: '/subcategories/' + subItem.id
                                                                }}
                                                            >
                                                                {console.log(<LengthOfProductsBySubCategory id={subItem.id}/>)}
                                                            <li style={{
                                                                fontSize: 16,
                                                            }}>
                                                                    {subItem.title} <span>(
                                                                <LengthOfProductsBySubCategory
                                                                    id={subItem.id}
                                                                />)
                                                                </span>
                                                            </li></NavLink>
                                                        )
                                                    }

                                                })}

                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="widget" style={{paddingLeft: 20}}>
                                <h3 className="widget-title" style={{fontSize: 20, fontWeight: 600}}>Брендтер</h3>

                                <div className="widget-body brandScroll">
                                    <div className="filter-items">
                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-1"/>
                                                <label className="custom-control-label"
                                                       htmlFor="brand-1">Next</label>
                                            </div>

                                        </div>

                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-2"/>
                                                <label className="custom-control-label" htmlFor="brand-2">River
                                                    Island</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-3"/>
                                                <label className="custom-control-label"
                                                       htmlFor="brand-3">Geox</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-4"/>
                                                <label className="custom-control-label" htmlFor="brand-4">New
                                                    Balance</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-5"/>
                                                <label className="custom-control-label"
                                                       htmlFor="brand-5">UGG</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-6"/>
                                                <label className="custom-control-label"
                                                       htmlFor="brand-6">F&F</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-7"/>
                                                <label className="custom-control-label"
                                                       htmlFor="brand-7">Nike</label>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="widget" style={{paddingLeft: 20}}>
                                <h3 className="widget-title" style={{fontSize: 20, fontWeight: 600}}>Товары со скидкой</h3>

                                <div className="widget-body brandScroll">
                                    <div className="filter-items">
                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="sale"
                                                    onChange={() => setSale(!sale)}
                                                />
                                                <label className="custom-control-label"
                                                       htmlFor="sale">{t("Sale.title")}</label>
                                            </div>

                                        </div>
                                    </div>

                                </div>

                            </div>


                        </div>

                    </aside>


                </div>
            </div>
        </div>
    )
}

export default Categories