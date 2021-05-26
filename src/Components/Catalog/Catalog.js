import React, {useEffect, useState} from "react";
import Categories from "./Categories";
import GetData from "../../service/GetData";
import {NavLink} from "react-router-dom";

const Catalog = (props) => {

    const id = props.location.id

    const data = new GetData()

    const [catalog, setCatalog] = useState([])

    const getAllCategories = () => {
        data.getData('/categories/' + id).then(res => {
            setCatalog(res)
        })
    }

    useEffect(() => {
        getAllCategories()
    },[])
    return (
        <div className='main'>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><NavLink  exact to='/' style={{fontSize: 15, fontWeight: "bold"}}>Башкы бет</NavLink></li>
                        <li className="breadcrumb-item"><NavLink to={{
                            pathname: '/categories' + catalog.title,
                            id: catalog.id
                        }} style={{fontSize: 15, fontWeight: "bold"}}>{catalog.title}</NavLink></li>
                    </ol>
                </div>
            </nav>

            <Categories
                id={id}
            />

        </div>
    )
}

export default Catalog