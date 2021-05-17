import React from "react";
import Categories from "./Categories";

const Catalog = () => {
    return (
        <div className='main'>
            <nav aria-label="breadcrumb" className="breadcrumb-nav mb-3">
                <div className="container">
                    <ol className="breadcrumb">
                        <li className="breadcrumb-item"><a href="index.html" style={{fontSize: 15, fontWeight: "bold"}}>Башкы бет</a></li>
                        <li className="breadcrumb-item"><a href="#" style={{fontSize: 15, fontWeight: "bold"}}>Мөмө-жемиштер</a></li>
                    </ol>
                </div>
            </nav>

            <Categories/>

        </div>
    )
}

export default Catalog