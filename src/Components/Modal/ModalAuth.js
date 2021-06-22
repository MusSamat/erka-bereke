import React, {useEffect, useState} from "react";
import GetData from "../../service/GetData";
import { toast} from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import {useTranslation} from "react-i18next";
import {useDispatch, useSelector} from "react-redux";
import {getIsLoginValue} from "../../store/actions/isLogin";
import {getCartProducts} from "../../store/actions/product";
import {getProductsFromCart} from "../../store/actions/cartProducts";

const ModalAuth = () => {

    const {t, i18n} = useTranslation();
    const dispatch = useDispatch()
    const isLogin = useSelector(state => state.isLogin.isLogin)

    const Auth = new GetData()

    const [userName, setUserName] = useState([])
    const [password, setPassword] = useState([])
    const [password2, setPassword2] = useState([])
    const [email, setEmail] = useState([])


    function submitAuth(e) {
        e.preventDefault()

        if(password === password2){

            Auth.login('/views/auth/register', {
                username: userName,
                password: password,
                email: email
            })
                .then(res => {
                    if (res.token) {
                        toast.success(t("Reg.5"))
                        document.getElementById('closeModal').click()
                        localStorage.setItem('user', JSON.stringify(res.user.username))
                        localStorage.setItem('email', JSON.stringify(res.user.email))
                        localStorage.setItem('token', JSON.stringify(res.token))
                        localStorage.setItem('userId', JSON.stringify(res.user.id))
                        dispatch(getIsLoginValue(true))
                        if(isLogin){
                            dispatch(getProductsFromCart())
                        }
                    } else {
                        toast.error('Что-то пашло не так!')
                        // setErrorToken("Enter a true username and password")
                    }
                })
        }
    }


    const pass1 = document.getElementById("regPassword1")
        , confirm_password = document.getElementById("regPassword2");

   const  validatePassword = () => {
        if(password !== password2) {
            confirm_password.style.border = "1px solid red";
        } else {
            confirm_password.style.border ="none"
        }
    }


    return(
        <div className="tab-pane fade" id="register" role="tabpanel"
             aria-labelledby="register-tab">
            <form onSubmit={submitAuth}>
                <div className="form-group">
                    <label htmlFor="register-user">{t("Modal.Reg.username")} *</label>
                    <input type="text" className="form-control" id="register-user"
                           name="register-user" required
                           onChange={e => setUserName(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="register-email">{t("Modal.Reg.email")} </label>
                    <input type="email" className="form-control" id="register-email"
                           name="register-email" required
                           onChange={e => setEmail(e.target.value)}
                    />
                </div>


                <div className="form-group">
                    <label htmlFor="register-password">{t("Modal.Reg.password")}</label>
                    <input type="password" className="form-control" id="regPassword1"
                           name="register-password" required
                           onChange={e => setPassword(e.target.value)}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor='register-password'>{t("Modal.Reg.conPassword")} </label>
                    <input type="password" className="form-control" id="regPassword2"
                           name="register-password" required
                           onChange={e => setPassword2(e.target.value)}
                           onKeyUp={validatePassword}
                    />
                </div>


                <div className="form-footer">
                    <button type="submit" className="btn btn-outline-primary-2">
                        <span>{t("Modal.Reg.title")}</span>
                        <i className="icon-long-arrow-right"></i>
                    </button>

                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input"
                               id="register-policy" required/>
                        <label className="custom-control-label"
                               htmlFor="register-policy">{t("Modal.Reg.beAgree")}</label>
                    </div>

                </div>

            </form>
            <div className="form-choice">
                <p className="text-center"> {t("Modal.Reg.withSocial")} </p>
                <div className="row">
                    <div className="col-sm-6">
                        <a href="#" className="btn btn-login btn-g">
                            <i className="icon-google"></i>
                            Google
                        </a>
                    </div>

                    <div className="col-sm-6">
                        <a href="#" className="btn btn-login  btn-f">
                            <i className="icon-facebook-f"></i>
                            Facebook
                        </a>
                    </div>

                </div>

            </div>
        </div>
    )
}

export default ModalAuth