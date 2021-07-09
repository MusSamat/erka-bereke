import React from "react";
import {useTranslation} from "react-i18next";
import {NavLink} from "react-router-dom";

const Footer = () => {

    const {t, i18n} = useTranslation();
    return (
        <footer className="footer footer-2" style={{backgroundColor: 'black', marginTop: 60}}>
            <div className="icon-boxes-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-rocket" style={{color: '#fff'}}></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title" style={{color: '#fcb941'}}>{t("Footer.IB.1.1")}</h3>
                                    <p style={{fontSize: 17}}>{t("Footer.IB.1.2")} </p>
                                </div>

                            </div>

                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-rotate-left" style={{color: '#fff'}}></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title" style={{color: '#fcb941'}}>{t("Footer.IB.2.1")}</h3>
                                    <p style={{fontSize: 17}}>{t("Footer.IB.2.2")}</p>
                                </div>

                            </div>

                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-info-circle" style={{color: '#fff'}}></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title"  style={{color: '#fcb941'}}> {t("Footer.IB.3.1")}</h3>
                                    <p style={{fontSize: 17}}>{t("Footer.IB.3.2")}</p>
                                </div>

                            </div>

                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-life-ring" style={{color: '#fff'}}></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title" style={{color: '#fcb941'}}>{t("Footer.IB.4.1")}</h3>
                                    <p style={{fontSize: 17}}>{t("Footer.IB.4.2")}</p>
                                </div>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="footer-middle border-0">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-12 col-lg-6">
                            <div className="widget widget-about">
                                <h2 style={{fontWeight: "bold", color: 'white'}}><span style={{color: "rgb(204, 188, 48)"}}>Erka</span> Bereke</h2>
                                {/*/!*<img src="assets/images/demos/demo-13/logo-footer.png" className="footer-logo"*!/*/}
                                {/*     // alt="Footer Logo" width="105" height="25"/>*/}
                                <p style={{fontSize: 17}}>
                                    {t("Footer.About.1")}
                                    </p>

                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title"> {t("Footer.Linking.1")}</span>
                                            <a href="tel:123456789">+996 773 010 203</a>
                                        </div>

                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">{t("Footer.Linking.2")}</span>

                                            <figure className="footer-payments">
                                                <img src="/assets/images/payments.png" alt="Payment methods" width="272"
                                                     height="20"/>
                                            </figure>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">{t("Footer.FooterMenu.1.1")}</h4>

                                <ul className="widget-list">
                                    <li><a href="about.html">{t("Footer.FooterMenu.1.2")}</a></li>
                                    <li><a href="#">{t("Footer.FooterMenu.1.3")} </a></li>
                                    <li><NavLink  to="/news-blogs">{t("Footer.FooterMenu.1.4")}</NavLink></li>
                                    <li><NavLink to="/contact" href="contact.html">{t("Footer.FooterMenu.1.5")}</NavLink></li>
                                    <li><a href="#signin-modal" data-toggle="modal">{t("Footer.FooterMenu.1.6")} </a></li>
                                </ul>

                            </div>

                        </div>


                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">{t("Footer.FooterMenu.2.1")}</h4>

                                <ul className="widget-list">
                                    <li><a href="#">{t("Footer.FooterMenu.2.2")}</a></li>
                                    <li><a href="#">{t("Footer.FooterMenu.2.3")}</a></li>
                                    <li><a href="#">{t("Footer.FooterMenu.2.4")}</a></li>
                                    <li><a href="#">{t("Footer.FooterMenu.2.5")}</a></li>
                                </ul>

                            </div>

                        </div>


                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">{t("Footer.FooterMenu.3.1")}</h4>

                                <ul className="widget-list">
                                    <li><a href="#">{t("Footer.FooterMenu.3.2")}</a></li>
                                    <li><a href="cart.html">{t("Footer.FooterMenu.3.3")}</a></li>
                                    <li><a href="#">{t("Footer.FooterMenu.3.4")}</a></li>
                                    <li><a href="#">{t("Footer.FooterMenu.3.5")}</a></li>
                                    <li><a href="#">{t("Footer.FooterMenu.3.6")}</a></li>
                                </ul>

                            </div>

                        </div>

                    </div>

                </div>

            </div>


            <div className="footer-bottom">
                <div className="container">
                    <p className="footer-copyright">Copyright © 2021 <span style={{fontSize: 17, paddingLeft: 20, paddingRight: 100}}>SigmaSoft</span> </p>
                    <ul className="footer-menu">
                        <li> &  WE ALWAYS CAN HELP</li>
                    </ul>


                    <div className="social-icons social-icons-color">
                        <span className="social-label">Social sites: </span>
                        <a href="#" className="social-icon social-facebook" title="Facebook" target="_blank"><i
                            className="icon-facebook-f" style={{fontSize: '2.4rem'}}></i></a>
                        <a href="#" className="social-icon social-twitter" title="Twitter" target="_blank"><i
                            className="icon-twitter" style={{fontSize: '2.4rem'}}></i></a>
                        <a href="#" className="social-icon social-instagram" title="Instagram" target="_blank"><i
                            className="icon-instagram" style={{fontSize: '2.4rem'}}></i></a>
                        <a href="#" className="social-icon social-youtube" title="Youtube" target="_blank"><i
                            className="icon-youtube" style={{fontSize: '2.4rem'}}></i></a>
                        <a href="#" className="social-icon social-pinterest" title="Pinterest" target="_blank"><i
                            className="icon-pinterest" style={{fontSize: '2.4rem'}}></i></a>
                    </div>

                </div>

            </div>
        </footer>
    )
}

export default Footer