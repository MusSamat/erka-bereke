import React from "react";
import {NavLink} from "react-router-dom";

const Nav = props => {
    return(
        <nav aria-label="breadcrumb" className="breadcrumb-nav ">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/" style={{fontSize: 17}}>Башкы бет</NavLink></li>
                    <li className="breadcrumb-item"><a href="#" style={{fontSize: 17}}>{props.name}</a></li>
                    {/*/!*{ if(props.item === '')(*!/*/}
                    {/*/!*    <li className="breadcrumb-item active" aria-current="page" style={{fontSize: 17}}>{props.item}</li>*!/*/}
                    {/*/!*    )}*!/*/}
                    {/*{if()}*/}
                </ol>
            </div>
        </nav>
    )
}

export default Nav
