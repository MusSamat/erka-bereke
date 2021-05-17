import React from "react";

const HeaderTop = () => {
    return(
        <div className='container'>
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <a href="tel:#"><i className="icon-phone"></i>Чалуу: +996 773 020 304</a>
                    </div>

                    <div className="header-right">

                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#">Сом</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="#">Сом</a></li>
                                                    <li><a href="#">Доллар</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#">Кырг</a>
                                            <div className="header-menu">
                                                <ul>
                                                    <li><a href="#">Кыргызча</a></li>
                                                    <li><a href="#">Русский</a></li>
                                                    <li><a href="#"> Türkçe</a></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="login">
                                        <a href="#signin-modal" data-toggle="modal">Катталуу / Кирүү</a>
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HeaderTop