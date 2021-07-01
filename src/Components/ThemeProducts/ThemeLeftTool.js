import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {setSaleValue} from "../../store/actions/sale";
import ThemeProducts from "./ThemeProducts"
import {NavLink} from "react-router-dom";
import GetData from "../../service/GetData";
import {setloading} from "../../store/actions/laod_action";



const ThemeLeftTool = (props) => {
    const {t, i18n} = useTranslation();
    const dispatch = useDispatch()
    const sale = useSelector(state => state.sale.sale)
    const id = parseInt(props.match.params.id)

    const [theme, setTheme] = useState([])
    const getTheme = () => {
        dispatch(setloading(true))
        new GetData().getData("/views/theme/" + id).then(res => {
            dispatch(setloading(false))
            setTheme(res)
        })
    }
    console.log(theme)

    const products = useSelector(state => state.product.products.filter((item, index) => {
        if(item.theme === id) {
            return item
        }
    }))




    useEffect(() => {
        getTheme()
    }, [])


    return (

        <div className='main'>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink exact to='/' style={{
                            fontSize: 13,
                            fontWeight: "bold",
                            textTransform: "uppercase"
                        }}>
                            {t("Main.Main")}
                        </NavLink></li>
                        <li className="breadcrumb-item" style={{
                            color: "#ccbc30"
                        }}>{theme?.title}</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <ThemeProducts
                            id={id}
                            sizeOfProd={products?.length}
                            // brandsId={brands}
                        />
                        <aside className="col-lg-3 col-xl-5col order-lg-first">
                            <div className="sidebar sidebar-shop"
                                 style={{border: '1px solid #d2d0d0', borderRadius: '8px'}}>
                                <div className="widget widget-categories">
                                    <h3 className="widget-title"
                                        style={{paddingTop: 20, paddingLeft: 20, fontWeight: "bold"}}>
                                        {theme?.title}</h3>
                                    <h5 style={{paddingLeft: 20}}>{products?.length} түр</h5>
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
        </div>
    )
}

export default ThemeLeftTool