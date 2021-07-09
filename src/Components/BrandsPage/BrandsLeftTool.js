import React, {useEffect, useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {setSaleValue} from "../../store/actions/sale";
import GetData from "../../service/GetData";
import {NavLink} from "react-router-dom";
import BrandsProducts from "./BrandsProducts";
import {setloading} from "../../store/actions/laod_action";



const BrandsLeftTool = (props) => {

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch()
    const sale = useSelector(state => state.sale.sale)
    const id = parseInt(props.match.params.id)


    const [product, setProduct] = useState([])
    const [brands, setBrands] = useState([])


    const getBrandsProducts = () => {
        dispatch(setloading(true))
        new GetData().getData("/product/?marka=" + id).then(res => {
            dispatch(setloading(false))
            setProduct(res)
        })
    }

    const getBrands = () => {
        dispatch(setloading(true))
        new GetData().getData('/markas').then(res => {
            dispatch(setloading(false))
            res.map((item) => {
                if (item.id === id) {
                    setBrands(item)
                }
            })
        })
    }


    useEffect(() => {
        window.scrollTo(0,0)
        getBrands()
        getBrandsProducts()
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
                        }}>{brands.title}</li>
                    </ol>
                </div>
            </nav>

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        <BrandsProducts
                            id={id}
                            sizeOfProd={product.length}
                            // brandsId={brands}
                        />
                        <aside className="col-lg-3 col-xl-5col order-lg-first">
                            <div className="sidebar sidebar-shop"
                                 style={{border: '1px solid #d2d0d0', borderRadius: '8px'}}>
                                <div className="widget widget-categories">
                                    <h3 className="widget-title"
                                        style={{paddingTop: 20, paddingLeft: 20, fontWeight: "bold"}}>
                                        {brands.title}</h3>
                                    <h5 style={{paddingLeft: 20}}>{product?.length} түр</h5>
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

export default BrandsLeftTool