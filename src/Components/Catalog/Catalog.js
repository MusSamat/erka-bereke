import React, {useEffect, useState} from "react";
import Categories from "./Categories";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getCategory} from "../../store/actions/category";
import {getsubCategory} from "../../store/actions/subcategory";
import {getsubCategory1} from "../../store/actions/subcategory1";
import {getsubCategory2} from "../../store/actions/subcategory2";

const Catalog = (props) => {
    console.log(props)
    const catalog = props.location.item
    const dispatch = useDispatch()
    const categories = useSelector(state => state.category.category)
    const subcategoreis = useSelector(state => state.subcategory.subcategory)
    const subcategoreis1 = useSelector(state => state.subcategory1.subcategory1)
    const subcategoreis2 = useSelector(state => state.subcategory2.subcategory2)

    console.log(catalog)


    useEffect(() => {
        dispatch(getCategory())
        dispatch(getsubCategory())
        dispatch(getsubCategory1())
        dispatch(getsubCategory2())
    },[dispatch])



    return (
        <div className='main'>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink  exact to='/' style={{fontSize: 15, fontWeight: "bold"}}>Башкы бет</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to={{
                            pathname: '/categories'  ,
                        }} style={{fontSize: 15, fontWeight: "bold"}}>lalal</NavLink></li>
                    </ol>
                </div>
            </nav>

            <Categories
                title={catalog.title}
            />

        </div>
    )
}

export default Catalog