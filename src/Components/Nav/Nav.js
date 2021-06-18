import React from "react";
import {NavLink} from "react-router-dom";
import {useTranslation} from "react-i18next";

const Nav = props => {
    const {t, i18n} = useTranslation();
    return(
        <nav aria-label="breadcrumb" className="breadcrumb-nav ">
            <div className="container">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><NavLink to="/" style={{fontSize: 16, fontWeight: "bold",}}>{t("Main.Main")}</NavLink></li>
                    <li className="breadcrumb-item"><span style={{fontSize: 16, fontWeight: "bold", color: "#ccbc30"}}>{props.name}</span></li>
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
