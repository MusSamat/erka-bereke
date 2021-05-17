import React from "react";
import HeaderTop from "./HeaderTop";
import HeaderMiddle from "./HeaderMiddle";
import HeaderBottom from "./HeaderBottom";
import ModalLogin from "../Modal/ModalLogin";
import NewsLetter from "../Modal/NewsLetter";

const Header  = () => {
    return(
        <header className='header header-10 header-intro-clearance'>
            <HeaderTop/>
            {/*<HeaderMiddle/>*/}
            <HeaderBottom/>
            <ModalLogin/>
            {/*<NewsLetter/>*/}
        </header>
    )
}

export default Header