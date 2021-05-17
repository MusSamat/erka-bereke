import React from "react";

const Nav = props => {
    return(
        <nav aria-label="breadcrumb" className="breadcrumb-nav ">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><a href="index.html">Home</a></li>
                    <li className="breadcrumb-item"><a href="#">{props.name}</a></li>
                    <li className="breadcrumb-item active" aria-current="page">{props.item}</li>
                </ol>
            </div>
        </nav>
    )
}

export default Nav
