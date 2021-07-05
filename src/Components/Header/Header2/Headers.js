import React from "react";
import HeaderTop2 from "./HeaderTop2";
import HeaderBottom2 from "./HeaderBottom2";
import ModalLogin from "../../Modal/ModalLogin";
import HeaderMiddle2 from "./HeaderMiddle2";



const Headers = () => {
    return (
        <header className="header header-10 header-intro-clearance">
            <HeaderTop2/>
            <HeaderMiddle2/>
            <HeaderBottom2/>
            <ModalLogin/>
        </header>
    )
}

export default Headers