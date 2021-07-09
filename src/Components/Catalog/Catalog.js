import React, {useEffect} from "react";
import Categories from "./Categories";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import {resetSaleValue, setSaleValue} from "../../store/actions/sale";
import {getProducts} from "../../store/actions/product";
import {mobile_menu} from "../../service/accessFunctions";

const Catalog = (props) => {
    const {t, i18n} = useTranslation();
    const id = parseInt(props.match.params.id)
    const dispatch = useDispatch()
    const category = useSelector(state => state.category.category.find(item => {
        if(item.id === id){
            return item
        }
    }))

    useEffect(() => {
        window.scrollTo(0,0)
        mobile_menu()
        dispatch(getProducts())
    },[dispatch])

    return (
        <div className='main'>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink  exact to='/' style={{fontSize: 13, fontWeight: "bold", textTransform: "uppercase"}}>
                            {t("Main.Main")}
                        </NavLink></li>
                        <li className="breadcrumb-item"><NavLink

                            activeStyle={{
                                color: "#ccbc30"
                            }}
                            to={{
                            pathname: '/categories/'+ id  ,
                        }} style={{fontSize: 13, fontWeight: "bold", textTransform: "uppercase"}}>{
                            category?.title
                        }</NavLink></li>
                    </ol>
                </div>
            </nav>

            <Categories
                props={props}
            />

        </div>
    )
}

export default Catalog