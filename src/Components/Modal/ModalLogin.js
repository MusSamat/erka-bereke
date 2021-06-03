import React, {useEffect, useState} from "react";
import ModalAuth from "./ModalAuth";
import GetData from "../../service/GetData";
import { ToastContainer, toast } from 'react-toastify';
import {useTranslation} from "react-i18next";
import AuthUser from "../../UsersInfo/AuthUser";
import {getIsLoginValue} from "../../store/actions/isLogin";
import {useDispatch} from "react-redux";
import {getCartProducts} from "../../store/actions/product";
import {getProductsFromCart} from "../../store/actions/cartProducts";
// import "./Modal.css"

const ModalLogin = () => {

    const userLog = new AuthUser()
    const dispatch = useDispatch()

    const {t, i18n} = useTranslation();
    const LogIn = new GetData()

    const [userName, setUserName] = useState([])
    const [password, setPassword] = useState([])






    function submitLogin(e) {
        e.preventDefault()
        LogIn.login('/views/auth/login', {
            username: userName,
            password: password
        })
            .then(res => {
                console.log(res)
                if (res.token) {
                    toast.success('Successfully')
                    document.getElementById('closeModal').click()
                    localStorage.setItem('token', JSON.stringify(res.token))
                    localStorage.setItem('userId', JSON.stringify(res.user.id))
                    dispatch(getIsLoginValue(true))
                    dispatch(getProductsFromCart(res.token, res.user.id))
                } else {
                    toast.error('Some thing is wrong')
                }
            })
    }

    function TogglePassword(){
        const pass = document.getElementById('Login_pass')

        if(pass.type === 'password'){
            pass.type = 'text'
        }else{
            pass.type = "password"
        }
    }


    return (
        <>
            <ToastContainer/>
            <div className="modal fade" id="signin-modal" tabIndex="-1" role="dialog" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-body">
                            <button type="button" className="close" id='closeModal' data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true"><i className="icon-close"></i></span>
                            </button>

                            <div className="form-box">
                                <div className="form-tab">
                                    <ul className="nav nav-pills nav-fill nav-border-anim" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active" id="signin-tab" data-toggle="tab" href="#signin"
                                               role="tab" aria-controls="signin" aria-selected="true">{t("Modal.Log.title")}</a>
                                        </li>
                                        <li className="nav-item">
                                            <a className="nav-link" id="register-tab" data-toggle="tab" href="#register"
                                               role="tab" aria-controls="register" aria-selected="false">{t("Modal.Reg.title")}</a>
                                        </li>
                                    </ul>
                                    <div className="tab-content" id="tab-content-5">
                                        <div className="tab-pane fade show active" id="signin" role="tabpanel"
                                             aria-labelledby="signin-tab">
                                            <form onSubmit={submitLogin}>
                                                <div className="form-group">
                                                    <label htmlFor="singin-email">{t("Modal.Log.username")}*</label>
                                                    <input type="text" className="form-control" id="singin-email"
                                                           name="singin-email" required

                                                           onChange={e => setUserName(e.target.value)}
                                                    />
                                                </div>


                                                <div className="form-group">
                                                    <label htmlFor="singin-password">{t("Modal.Log.password")}</label>
                                                    <input type="password" className="form-control" id="Login_pass"
                                                           name="singin-password" required

                                                           onChange={e => setPassword(e.target.value)}
                                                    />
                                                    <input type="checkbox" onClick={TogglePassword}/>
                                                    <label style={{paddingLeft: 10}} htmlFor="toggle-password">{t("Modal.Log.showPassword")}</label>
                                                </div>


                                                <div className="form-footer">
                                                    <button type="submit" className="btn btn-outline-primary-2">
                                                        <span style={{fontSize: 17}}>{t("Modal.Log.title")}</span>
                                                        <i className="icon-long-arrow-right"></i>
                                                    </button>

                                                    <div className="custom-control custom-checkbox">
                                                        <input type="checkbox" className="custom-control-input"
                                                               id="signin-remember"/>
                                                        <label className="custom-control-label"
                                                               htmlFor="signin-remember">{t("Modal.Log.Reminder")}</label>
                                                    </div>


                                                    {/*<a href="#" className="forgot-link">{t("Modal.Log.forgerPassword")}</a>*/}
                                                </div>
                                            </form>
                                            <div className="form-choice">
                                                <p className="text-center" style={{fontSize: 17}}>{t("Modal.Reg.withSocial")} </p>
                                                <div className="row">
                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-g">
                                                            <i className="icon-google"></i>
                                                            Google
                                                        </a>
                                                    </div>

                                                    <div className="col-sm-6">
                                                        <a href="#" className="btn btn-login btn-f">
                                                            <i className="icon-facebook-f"></i>
                                                            Facebook
                                                        </a>
                                                    </div>

                                                </div>

                                            </div>

                                        </div>
                                        <ModalAuth/>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ModalLogin