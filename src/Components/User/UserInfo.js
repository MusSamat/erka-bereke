import React, {useState} from "react";
import "../Order/Order.css"
import {useTranslation} from "react-i18next";

const UserInfo = () => {
    const {t, i18n} = useTranslation();

    const name = JSON.parse(localStorage.getItem("user"))
    const emaill = JSON.parse(localStorage.getItem("email"))

    const [userName, setUserName] = useState(name)
    const [password, setPassword] = useState()
    const [password2, setPassword2] = useState()
    const [email, setEmail] = useState(emaill)

    return (
        <div>
            <button className='orderButton'
                    disabled
                style={{
                    cursor: "default",
                    marginTop: 0,
                    backgroundColor: "rgb(88, 88, 88)"
                }}
            >
                Изменить личные данные
            </button>
            <div className="tab-pane fade show active" id="signin" role="tabpanel"
                 aria-labelledby="signin-tab">
                <form>
                    <div className="form-group">
                        <label htmlFor="register-user">{t("Modal.Change.username")}*</label>
                        <input type="еуче" className="form-control" id="register-email"
                               name="register-email" required
                               value={userName}
                            onChange={e => setUserName(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label htmlFor="register-email">{t("Modal.Change.email")} </label>
                        <input type="email" className="form-control" id="register-email"
                               name="register-email" required
                               value={email}
                            onChange={e => setEmail(e.target.value)}
                        />
                    </div>


                    <div className="form-group">
                        <label htmlFor="register-password">{t("Modal.Change.password")}</label>
                        <input type="password" className="form-control" id="regPasswordO1"
                               name="register-password" required
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <div className="form-group">
                        <label
                            htmlFor='register-password'>{t("Modal.Change.conPassword")} </label>
                        <input type="password" className="form-control" id="regPasswordO2"
                               name="register-password" required
                            onChange={e => setPassword2(e.target.value)}
                            // onKeyUp={validatePassword}
                        />
                    </div>


                    <div className="form-footer" style={{float: "right"}}>
                        <button
                            style={{
                                fontSize: 17,
                                backgroundColor: "#CCBC30",
                                marginTop: 20,
                                marginBottom: "2rem",
                                borderRadius: 5,
                                color: "white",
                                padding: "10px 20px",
                                border: "none"

                            }}
                        >
                            Сохранить
                        </button>

                    </div>

                </form>
            </div>
        </div>
    )
}

export default UserInfo