import React, {useEffect, useState} from "react";
import Nav from "../Nav/Nav";
import NavBanner from "../Nav/NavBanner";
import Location from "../Map/Location";
import {useTranslation} from "react-i18next";
import GetData from "../../service/GetData";
import {toast} from "react-toastify";

const Contact = () => {

    const {t, i18n} = useTranslation();

    const [name, setName] = useState([])
    const [tel, setTel] = useState([])
    const [email, setEmail] = useState([])
    const [theme, setTheme] = useState([])
    const [mail, setMail] = useState([])

    const postMail = (e) => {
        e.preventDefault()
        const fd = new FormData()
        fd.append("name", name)
        fd.append("phone", tel)
        fd.append("theme", theme)
        fd.append("description", mail)
        fd.append("email", email)

        new GetData().setOrder('/views/backcall', fd).then(() => {
            toast.success("Успешно отправлено")
        })
    }


    useEffect(() => {
    }, [])


    const contact = {
        name: 'Контакты',
        title: 'This is contact',
        item: 'contact'
    }
    return (
        <>
            <NavBanner
            />
            <Nav
                name={contact.name}
            />
            <div className="page-content pb-0">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6 mb-2 mb-lg-0">
                            <h2 className="title mb-1">{t("Contact.title")}</h2>
                            <p className="mb-3">"</p>
                            <div className="row">
                                <div className="col-sm-7">
                                    <div className="contact-info">
                                        <h3>{t("Contact.Market")}</h3>

                                        <ul className="contact-list">
                                            <li style={{fontSize: 17}}>
                                                <i className="icon-map-marker"></i>
                                                {t("Contact.Address")}
                                            </li>
                                            <li>
                                                <i className="icon-phone"></i>
                                                <span style={{fontSize: 17}}>+996 772 010 203</span>
                                            </li>
                                        </ul>

                                    </div>
                                </div>


                                <div className="col-sm-5">
                                    <div className="contact-info">
                                        <ul className="contact-list">
                                            <li>
                                                <i className="icon-clock-o"></i>
                                                <span className="text-dark">{t("Contact.Time")}</span> <br/>24/7
                                            </li>
                                            <li>
                                                <i className="icon-envelope"></i>
                                                <span>erka.bereke@gmail.com</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <h2 className="title mb-1">{t("Contact.Map")}</h2>
                            <p className="mb-3">"</p>
                            <Location/>
                        </div>
                    </div>
                    <div className='row'>
                        <div className="col-lg-12" style={{marginTop: 40}}>
                            <h2 className="title mb-1" style={{fontSize: 20}}>{t("Contact.Questions")} ?</h2>
                            <p className="mb-2" style={{fontSize: 20}}>{t("Contact.Qtitle")}</p>
                            <form className="contact-form mb-3" onSubmit={postMail}>
                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="cname" className="sr-only">{t("Contact.Qname")}</label>
                                        <input type="text" className="form-control"
                                               onChange={(e) => {
                                                   setName(e.target.value)
                                               }}
                                               id="cname" placeholder={t("Contact.Qname")}
                                               required/>
                                    </div>


                                    <div className="col-sm-6">
                                        <label htmlFor="cemail" className="sr-only">Email</label>
                                        <input type="email" className="form-control"
                                               onChange={(e) => {
                                                   setEmail(e.target.value)
                                               }}
                                               id="cemail" placeholder="Email *"
                                               required/>
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="col-sm-6">
                                        <label htmlFor="cphone" className="sr-only">Телефон</label>
                                        <input type="tel" className="form-control" id="cphone"
                                               onChange={(e) => {
                                                   setTel(e.target.value)
                                               }}
                                               placeholder={t("Contact.Qtel")}/>
                                    </div>

                                    <div className="col-sm-6">
                                        <label htmlFor="csubject" className="sr-only">Темасы</label>
                                        <input type="text" className="form-control" id="csubject"
                                               onChange={(e) => {
                                                   setTheme(e.target.value)
                                               }}
                                               placeholder={t("Contact.Qtheme")}/>
                                    </div>
                                </div>

                                <label htmlFor="cmessage" className="sr-only">Кат</label>
                                <textarea className="form-control" cols="30" rows="4" id="cmessage" required
                                          onChange={(e) => {
                                              setMail(e.target.value)
                                          }}
                                          placeholder={t("Contact.Qmail")}></textarea>

                                <button type="submit" className="btn btn-outline-primary-2 btn-minwidth-sm">
                                    <span style={{fontWeight: "bold"}}>{t("Contact.Submit")}</span>
                                    <i className="icon-long-arrow-right"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>

    )
}


export default Contact