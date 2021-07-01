import React from "react";
import "./Loader.css"

export const FullPageLoader = () => {
    return(
        <div className="loader-container">
            <div className="div loader">
                <img src="/assets/svg_logo/loader.svg" alt="loader"/>
            </div>
        </div>
    )
}