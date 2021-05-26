import React, {useEffect} from "react";
import {useTranslation} from 'react-i18next';
import './Header.css'

const HeaderTop = () => {

    const {t, i18n} = useTranslation();

    function languageChangeHandler(lang){
        i18n.changeLanguage(lang);
    }

    return(
        <div className='container'>
            <div className="header-top">
                <div className="container">
                    <div className="header-left">
                        <a href="tel:#"><i className="icon-phone"></i> {t("CallNumber.1")}: +996 773 020 304</a>
                    </div>

                    <div className="header-right">

                        <ul className="top-menu">
                            <li>
                                <a href="#">Links</a>
                                <ul>
                                    <li>
                                        <div className="header-dropdown">
                                            <a href="#" style={{fontWeight: "600", fontSize: 17}}>{t("Lang.1")}</a>
                                            <div className="header-menu lang_style">
                                                <ul>
                                                    <li><div
                                                           onClick={()=> languageChangeHandler('kyr')}
                                                    >Кыр</div></li>
                                                    <li><div
                                                           onClick={()=> languageChangeHandler('ru')}
                                                    >Ru</div></li>
                                                    <li><div
                                                           onClick={()=> languageChangeHandler('tr')}
                                                    > Tr</div></li>
                                                </ul>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="login">
                                        <a href="#signin-modal" data-toggle="modal"
                                           style={{fontWeight: "600", fontSize: 17}}>{t("Reg.1")} / {t("Reg.2")} </a>
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