import React from "react";
import './Nav.css'

const NavBanner = (props) => {
    return(
        <div className="page-header text-center"
             style={{backgroundImage: " url('assets/images/4.jpg')"}}>
            <div className="container">
                {/*<h1 className="page-title">Ерка Береке дайыма  <span>арзан жана жеткиликтүү</span></h1>*/}
                <div className='NavBan'>
                    <p><span>Жаңы </span> кардарлар менен  <span>жаңы</span> келишим</p>
                    Бизге катталыңыз жана <span>10% арзандатуу</span> алыңыз
                </div>
            </div>
        </div>
    )
}

export default NavBanner