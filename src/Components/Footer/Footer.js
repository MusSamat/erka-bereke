import React from "react";

const Footer = () => {
    return (
        <footer className="footer footer-2" style={{backgroundColor: 'black'}}>
            <div className="icon-boxes-container">
                <div className="container">
                    <div className="row">
                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-rocket" style={{color: '#fff'}}></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title" style={{color: '#fcb941'}}>Акысыз жеткирүү</h3>
                                    <p style={{fontSize: 17}}>1000 сомдон өйдө </p>
                                </div>

                            </div>

                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-rotate-left" style={{color: '#fff'}}></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title" style={{color: '#fcb941'}}>Кайтарып алуу</h3>
                                    <p style={{fontSize: 17}}>Товардын тастыкталбаган кемчилиги болсо</p>
                                </div>

                            </div>

                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-info-circle" style={{color: '#fff'}}></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title"  style={{color: '#fcb941'}}> 10% арзандатуу</h3>
                                    <p style={{fontSize: 17}}>Катталуу аркылуу 10% арзандатуу ал</p>
                                </div>

                            </div>

                        </div>


                        <div className="col-sm-6 col-lg-3">
                            <div className="icon-box icon-box-side">
                                <span className="icon-box-icon">
                                    <i className="icon-life-ring" style={{color: '#fff'}}></i>
                                </span>

                                <div className="icon-box-content">
                                    <h3 className="icon-box-title" style={{color: '#fcb941'}}>Дайыма сиздер үчүн</h3>
                                    <p style={{fontSize: 17}}>24/7 кызмат көрсөтөбүз</p>
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
                                <p style={{fontSize: 17}}>Түрк азыктары эми Бишкекте! Сиз каалаган түрк азыктарын биздин дүкөндөн же
                                    веб-сайтыбыздан ала аласыз! Сайтыбызга катаалуу аркылуу 10% арзандату утуп ал.
                                    </p>

                                <div className="widget-about-info">
                                    <div className="row">
                                        <div className="col-sm-6 col-md-4">
                                            <span className="widget-about-title"> 24/7 биз менен байланыша аласыз</span>
                                            <a href="tel:123456789">+996 773 010 203</a>
                                        </div>

                                        <div className="col-sm-6 col-md-8">
                                            <span className="widget-about-title">Онлайн төлөмдөрдү жүргүзүү:</span>
                                            <figure className="footer-payments">
                                                <img src="assets/images/payments.png" alt="Payment methods" width="272"
                                                     height="20"/>
                                            </figure>

                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div>


                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Информация</h4>

                                <ul className="widget-list">
                                    <li><a href="about.html">Биз жөнүндө</a></li>
                                    <li><a href="#">онлайн төлөм </a></li>
                                    <li><a href="faq.html">FAQ</a></li>
                                    <li><a href="contact.html">Контакт</a></li>
                                    <li><a href="login.html">Катталуу</a></li>
                                </ul>

                            </div>

                        </div>


                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Клиенттерди тейлөө</h4>

                                <ul className="widget-list">
                                    <li><a href="#">Payment Methods</a></li>
                                    <li><a href="#">Money-back guarantee!</a></li>
                                    <li><a href="#">Returns</a></li>
                                    <li><a href="#">Shipping</a></li>
                                </ul>

                            </div>

                        </div>


                        <div className="col-sm-4 col-lg-2">
                            <div className="widget">
                                <h4 className="widget-title">Жеке баракча</h4>

                                <ul className="widget-list">
                                    <li><a href="#">Кирүү</a></li>
                                    <li><a href="cart.html">Корзинка</a></li>
                                    <li><a href="#">Менин тандоолорум</a></li>
                                    <li><a href="#">Төлөмдү ишке ашыруу</a></li>
                                    <li><a href="#">Жардам</a></li>
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
                        <li><a href="#"> &  Ар дайым жардамда</a></li>
                    </ul>


                    <div className="social-icons social-icons-color">
                        <span className="social-label">Cоц. тармактар: </span>
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