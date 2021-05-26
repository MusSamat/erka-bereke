import React from "react";
import './Nav.css'
import {useTranslation} from "react-i18next";

const NavBanner = (props) => {
    const {t, i18n} = useTranslation();
    return(
        <div className="page-header text-center"
             style={{backgroundImage: " url('assets/images/4.jpg')"}}>
            <div className="container">
                {/*<h1 className="page-title">Ерка Береке дайыма  <span>арзан жана жеткиликтүү</span></h1>*/}
                <div className='NavBan'>
                    <p><span>{t("NavBanner.1")}</span> {t("NavBanner.2")} <span>{t("NavBanner.1")}</span> {t("NavBanner.3")}</p>
                    {t("NavBanner.4")}<span>{t("NavBanner.5")}</span> {t("NavBanner.6")}
                </div>
            </div>
        </div>
    )
}

export default NavBanner