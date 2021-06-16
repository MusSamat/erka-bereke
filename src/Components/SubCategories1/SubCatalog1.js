import React, {useEffect} from "react";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useTranslation} from "react-i18next";
import SubCategory1 from "./SubCategory1";


const SubCatalog1 = (props) => {
    const {t, i18n} = useTranslation();
    const id = parseInt(props.match.params.id)

    const dispatch = useDispatch()

    const subcategory1 = useSelector(state => state.subcategory1.subcategory1.find(item => {
        if (item.id === id) {
            return item
        }
    }))
    const subcategory = useSelector(state => state.subcategory.subcategory.find(item => {
        if (item.id === subcategory1?.subcategory) {
            return item
        }
    }))
    const categories = useSelector(state => state.category.category.find((item) => {
        if (item.id === subcategory?.categories) {
            return item
        }
    }))


    useEffect(() => {
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
                                pathname: '/categories/' + subcategory1?.category_id,
                            }} style={{fontSize: 13, fontWeight: "bold", textTransform: "uppercase"}}>{
                            categories?.title
                        }</NavLink></li>
                        <li className="breadcrumb-item"><NavLink
                            activeStyle={{
                                color: "#ccbc30"
                            }}
                            to={{
                                pathname: '/subcategories/' + subcategory?.id,
                            }} style={{fontSize: 13, fontWeight: "bold", textTransform: "uppercase"}}>{
                            subcategory?.title
                        }</NavLink></li>
                        <li className="breadcrumb-item"><NavLink
                            activeStyle={{
                                color: "#ccbc30"
                            }}
                            to={{
                                pathname: '/subcategories1/' + id,
                            }} style={{fontSize: 13, fontWeight: "bold", textTransform: "uppercase"}}>{
                            subcategory1?.title
                        }</NavLink></li>
                    </ol>
                </div>
            </nav>

            <SubCategory1
                props={props}
            />

        </div>
    )
}

export default SubCatalog1