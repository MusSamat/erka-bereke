import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import SubCategory from "./SubCategory";

const SubCatalog = (props) => {
    const {t, i18n} = useTranslation();
    const id = parseInt(props.match.params.id)
    const dispatch = useDispatch()
    const subcategory = useSelector(state => state.subcategory.subcategory.find(item => {
        if(item.id === id){
            return item
        }
    }))
    const categories = useSelector(state => state.category.category.find((item) => {
        if(item.id === subcategory?.categories){
            return item
        }
    }))


    useEffect(() => {
        window.scrollTo(0,0)
    }, [dispatch])


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
                        <li className="breadcrumb-item"><NavLink
                            activeStyle={{
                                color: "#ccbc30"
                            }}
                            to={{
                            pathname: '/categories/' + categories?.id,
                        }} style={{fontSize: 13, fontWeight: "bold", textTransform: "uppercase"}}>{
                            categories?.title
                        }</NavLink></li>
                        <li className="breadcrumb-item"><NavLink
                            activeStyle={{
                                color: "#ccbc30"
                            }}
                            to={{
                            pathname: '/subcategories/' + id,
                        }} style={{fontSize: 13, fontWeight: "bold", textTransform: "uppercase"}}>{
                            subcategory?.title
                        }</NavLink></li>
                    </ol>
                </div>
            </nav>

            <SubCategory
                props={props}
            />

        </div>
    )
}

export default SubCatalog