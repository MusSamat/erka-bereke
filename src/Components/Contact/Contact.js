import React from "react";
import Nav from "../Nav/Nav";
import NavBanner from "../Nav/NavBanner";
import Location from "../Map/Location";

const Contact = () => {

    const contact = {
        name: 'Контакты',
        title: 'This is contact',
        item: 'contact'
    }
    return (
        <>
            <NavBanner
            name={contact.name}
            />
            <Nav
                name={contact.name}
            />
            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <h2 className="title mb-1">Контакты</h2>
                            <p className="mb-3">"</p>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="contact-info">
                                        <h3>Магазин</h3>

                                        <ul className="contact-list">
                                            <li style={{fontSize: 17}}>
                                                <i className="icon-map-marker"></i>
                                                Ортоңку Жал мкр. Бишкек. Кыргызстан
                                            </li>
                                            <li>
                                                <i className="icon-phone"></i>
                                                <a href="tel:#" style={{fontSize: 17}}>+996 772 010 203</a>
                                            </li>
                                            <li>
                                                <i className="icon-envelope"></i>
                                                <a href="mailto:#">erka.bereke@gmail.com</a>
                                            </li>
                                        </ul>

                                    </div>
                                </div>


                                <div className="col-sm-5">
                                    <div className="contact-info">
                                        <h3>Офис №2 </h3>

                                        <ul className="contact-list">
                                            <li>
                                                <i className="icon-clock-o"></i>
                                                <span className="text-dark">Дүйшөмбү - Жекшемби</span> <br/>24/7
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="title mb-1">Суроолор боюнча?</h2>
                            <p className="mb-2" style={{fontSize: 17}}>Ылдыйдагы бош аянтчаларды толтуруу аркылуу байланыша аласыз</p>

                            <form action="#" className="contact-form mb-3">
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="cname" className="sr-only">Атыңыз</label>
                                        <input type="text" className="form-control" id="cname" placeholder="Атыңыз*"
                                               required/>
                                    </div>


                                    <div className="col-sm-6">
                                        <label htmlFor="cemail" className="sr-only">Email</label>
                                        <input type="email" className="form-control" id="cemail" placeholder="Email *"
                                               required/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="cphone" className="sr-only">Телефон</label>
                                        <input type="tel" className="form-control" id="cphone" placeholder="Телефон"/>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="csubject" className="sr-only">Темасы</label>
                                        <input type="text" className="form-control" id="csubject"
                                               placeholder="Темасы"/>
                                    </div>
                                </div>

                                <label htmlFor="cmessage" className="sr-only">Кат</label>
                                <textarea className="form-control" cols="30" rows="4" id="cmessage" required
                                          placeholder="Кат *"></textarea>

                                <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                    <span style={{fontWeight: "bold"}}>Ишке ашыруу</span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>

                    <hr className="mt-4 mb-5"/>

                {/*    <div className="stores mb-4 mb-lg-5">*/}
                {/*        <h2 className="title text-center mb-3">Биздин маркет</h2>*/}

                {/*        <div className="row">*/}
                {/*            <div className="col-lg-6">*/}
                {/*                <div className="store">*/}
                {/*                    <div className="row">*/}
                {/*                        <div className="col-sm-5 col-xl-6">*/}
                {/*                            <figure className="store-media mb-2 mb-lg-0">*/}
                {/*                                <img src="assets/images/stores/img-1.jpg" alt="image"/>*/}
                {/*                            </figure>*/}
                {/*                        </div>*/}
                {/*                        <div className="col-sm-7 col-xl-6">*/}
                {/*                            <div className="store-content">*/}
                {/*                                <h3 className="store-title">Wall Street*/}
                {/*                                    Plaza</h3>*/}
                {/*                                <address>88 Pine St, New York, NY 10005, USA</address>*/}
                {/*                                <div><a href="tel:#">+1 987-876-6543</a></div>*/}

                {/*                                <h4 className="store-subtitle">Store*/}
                {/*                                    Hours:</h4>*/}
                {/*                                <div>Monday - Saturday 11am to 7pm</div>*/}
                {/*                                <div>Sunday 11am to 6pm</div>*/}

                {/*                                <a href="#" className="btn btn-link"*/}
                {/*                                   target="_blank"><span>View Map</span><i*/}
                {/*                                    className="icon-long-arrow-right"></i></a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}

                {/*            <div className="col-lg-6">*/}
                {/*                <div className="store">*/}
                {/*                    <div className="row">*/}
                {/*                        <div className="col-sm-5 col-xl-6">*/}
                {/*                            <figure className="store-media mb-2 mb-lg-0">*/}
                {/*                                <img src="assets/images/stores/img-2.jpg" alt="image"/>*/}
                {/*                            </figure>*/}
                {/*                        </div>*/}

                {/*                        <div className="col-sm-7 col-xl-6">*/}
                {/*                            <div className="store-content">*/}
                {/*                                <h3 className="store-title">One New York*/}
                {/*                                    Plaza</h3>*/}
                {/*                                <address>88 Pine St, New York, NY 10005, USA</address>*/}
                {/*                                <div><a href="tel:#">+1 987-876-6543</a></div>*/}

                {/*                                <h4 className="store-subtitle">Store*/}
                {/*                                    Hours:</h4>*/}
                {/*                                <div>Monday - Friday 9am to 8pm</div>*/}
                {/*                                <div>Saturday - 9am to 2pm</div>*/}
                {/*                                <div>Sunday - Closed</div>*/}

                {/*                                <a href="#" className="btn btn-link"*/}
                {/*                                   target="_blank"><span>View Map</span><i*/}
                {/*                                    className="icon-long-arrow-right"></i></a>*/}
                {/*                            </div>*/}
                {/*                        </div>*/}
                {/*                    </div>*/}
                {/*                </div>*/}
                {/*            </div>*/}
                {/*        </div>*/}
                {/*    </div>*/}
                </div>
                <div id="map">
                    <Location/>
                </div>
            </div>
        </>

    )
}


export default Contact