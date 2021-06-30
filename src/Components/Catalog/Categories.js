import React, {useEffect, useState} from "react";
import CatalogProducts from "./CatalogProducts";
import {useDispatch, useSelector} from "react-redux";
import {LengthOfProductsBySubCategory} from "./LengthOfProductsBySubCategory";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";
import GetData from "../../service/GetData";
import {fetchBrands} from "../../store/actions/brands_action";
import {resetSaleValue, setSaleValue} from "../../store/actions/sale";

const Categories = (props) => {
    const {t, i18n} = useTranslation();

    const dispatch = useDispatch()
    const id = parseInt(props.props.match.params.id)
    const categories = useSelector(state => state.category.category)
    const subcategoreis = useSelector(state => state.subcategory.subcategory)
    const prod = useSelector(state => state.product.products.filter((item, index) => {
        if (item.category_id === id) {
            return item
        }
    }))

    const brands = useSelector(state => state.brands.brands)

    const sale = useSelector(state => state.sale.sale)


    // const [brands, setBrands] = useState([])
    const [marka, setMarka] = useState([])

    console.log(brands)

    function getBrands() {
        new GetData().getData("/markas/").then(res => {
            setMarka(res)
        })
    }

    // const checkedBox = (id) => {
    //     const index = brands.indexOf(id)
    //     if(index !== -1){
    //         brands.splice(index, 1)
    //         setBrands(state => [...state])
    //     }else{
    //         setBrands(state => [...state,  id])
    //     }
    //
    // }

    useEffect(() => {
        console.log(brands)
        getBrands()
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
                        sizeOfProd={prod?.length}
                        sale={sale}
                        brandsId={brands}
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
                                <h5 style={{paddingLeft: 20}}> {prod?.length} түр</h5>

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

                                                                <li style={{
                                                                    fontSize: 16,
                                                                }}>
                                                                    {subItem.title} <span>(
                                                                <LengthOfProductsBySubCategory
                                                                    id={subItem.id}
                                                                />)
                                                                </span>
                                                                </li>
                                                            </NavLink>
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

                                        {


                                            marka?.map(marka => {
                                                for(let i = 0; i< prod.length; i++){
                                                    if(prod[i].marka_title === marka.title){
                                                        return (
                                                            <div className="filter-item">
                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox" className="custom-control-input"
                                                                           name="filter-price"
                                                                           id={marka.title}
                                                                           onClick={() => dispatch(fetchBrands(marka.id))}
                                                                    />
                                                                        <label className="custom-control-label"
                                                                               htmlFor={marka.title}>{marka.title}</label>
                                                                </div>
                                                            </div>

                                                    )
                                                        break;
                                                    }
                                                }
                                            })


                                        }

                                    </div>

                                </div>

                            </div>


                            <div className="widget" style={{paddingLeft: 20}}>
                                <h3 className="widget-title" style={{fontSize: 20, fontWeight: 600}}>Товары со
                                    скидкой</h3>

                                <div className="widget-body brandScroll">
                                    <div className="filter-items">
                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="sale"
                                                       checked={sale}
                                                       onChange={() => dispatch(setSaleValue(!sale))}
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