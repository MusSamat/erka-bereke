import React from "react";

const NavBanner = (props) => {
    return(
        <div className="page-header text-center"
             style={{backgroundImage: " url('assets/images/page-header-bg.jpg')"}}>
            <div className="container">
                <h1 className="page-title">{props.title}<span>{props.name}</span></h1>
            </div>
        </div>
    )
}

export default NavBanner