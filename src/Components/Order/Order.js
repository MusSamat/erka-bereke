import React, {useEffect, useState} from "react";
import './Order.css'
import {useTranslation} from "react-i18next";
import Nav from "../Nav/Nav";
import NavBanner from "../Nav/NavBanner";
import {NavLink} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Tab, Tabs, TabList, TabPanel} from 'react-tabs';
import GetData from "../../service/GetData";
import {toast} from "react-toastify";
import {getIsLoginValue} from "../../store/actions/isLogin";
import {getProductsFromCart, resetCart} from "../../store/actions/cartProducts";
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import {getSumOfProducts, resetSumOfCartProducts} from "../../store/actions/sumOfCartProducts";
import {setloading} from "../../store/actions/laod_action";
import {
    getSumOfProductsWithoutSale,
    resetSumOfCartProductsWithoutSale
} from "../../store/actions/sumOfCartProductsWithoutSale";


const Order = (props) => {
    const [saleH, setSaleH] = useState(false)
    const dispatch = useDispatch()
    const cartProductsP = useSelector(state => state.cartProd.cartProd)
    const del_cost = useSelector(state => state.del_cost.delivery_cost)

    const checkSale = () => {
        if (token) {
            for (let i = 0; i < cartProductsP?.items?.length; i++) {
                if (cartProductsP?.items[i]?.product.percent) {
                    setSaleH(true)
                    break;
                } else {
                    setSaleH(false)
                }
            }
        } else {
            for (let j = 0; j < cartProductsP?.length; j++) {
                if (cartProductsP[j]?.percent) {
                    setSaleH(true)
                    break;
                } else {
                    setSaleH(false)
                }
            }
        }
    }

    const [show, setShow] = useState(false)
    const {t, i18n} = useTranslation();
    const isLogin = useSelector(state => state.isLogin.isLogin)

    const LogIn = new GetData()
    const name = JSON.parse(localStorage.getItem("user"))
    const userId = JSON.parse(localStorage.getItem("userId"))
    const token = JSON.parse(localStorage.getItem("token"))
    const sum = useSelector(state => state.sumOfCart.sumOfProducts)
    const sumW = useSelector(state => state.cartProdW.sumProd)


    const [userNameO, setUserNameO] = useState([])
    const [passwordO, setPasswordO] = useState([])
    const [email, setEmail] = useState([])
    const [passwordO2, setPasswordO2] = useState([])

    const [firstName, setFirstName] = useState(name)
    const [lastName, setLastName] = useState([])
    const [address, setAddress] = useState([])
    const [tel, setTel] = useState([])


    function submitLoginO(e) {
        dispatch(getSumOfProducts())
        e.preventDefault()
        dispatch(setloading(true))
        LogIn.login('/views/auth/login', {
            username: userNameO,
            password: passwordO
        })
            .then(res => {
                dispatch(setloading(false))
                if (res.token) {
                    toast.success(t("Reg.4"))
                    document.getElementById('closeModal').click()
                    localStorage.setItem('user', JSON.stringify(res.user.username))
                    localStorage.setItem('email', JSON.stringify(res.user.email))
                    localStorage.setItem('token', JSON.stringify(res.token))
                    localStorage.setItem('userId', JSON.stringify(res.user.id))
                    dispatch(getIsLoginValue(true))
                    dispatch(getProductsFromCart())
                    window.location.href = "/cart"
                } else {
                    toast.error('Some thing is wrong')
                }
            })
    }

    function Reset() {
        setFirstName(null)
        setLastName(null)
        setTel(null)
        setAddress(null)
    }


    function setOrderDet(e) {
        e.preventDefault()
        // dispatch(setloading(true))
        if (token) {
            const order = new FormData()

            order.append("first_name", firstName)
            // order.append("last_name", lastName)
            order.append("address", address)
            order.append("phone_number", tel)
            order.append("cart_id", cartProductsP.id)
            order.append("user", userId)

            new GetData().setDataPro(token, "/views/order/", order).then(() => {
                // dispatch(setloading(false))
                dispatch(resetCart())
                dispatch(resetSumOfCartProducts())
                dispatch(resetSumOfCartProductsWithoutSale())
                Reset()
                document.getElementById("orderForm").reset()
                toast.success(t("Modal.Log.setOrder"))
            })
        } else {
            let items = []
            cartProductsP?.map((item, i) => {
                let obj =
                    {
                        product: item.id,
                        quantity: item.quantity,
                        price: item.percent > 0 ? (item.price -
                            (item.price * item.percent / 100)) * item.quantity :
                            item.price * item.quantity
                    }
                items.push(obj)
            })

            let order = JSON.stringify(
                {
                    first_name: firstName,
                    address: address,
                    phone_number: tel,
                    items: items
                }
            )
            new GetData().setOrder("/views/order/", order).then(() => {
                // dispatch(setloading(false))
                dispatch(resetCart())
                dispatch(resetSumOfCartProducts())
                dispatch(resetSumOfCartProductsWithoutSale())
                Reset()
                document.getElementById("orderForm").reset()
                toast.success(t("Modal.Log.setOrder"))
            })

        }
    }


    function submitAuthO(e) {
        e.preventDefault()
        dispatch(setloading(true))
        if (passwordO === passwordO2) {

            LogIn.login('/views/auth/register', {
                username: userNameO,
                password: passwordO,
                email: email
            })
                .then(res => {
                    dispatch(setloading(false))
                    if (res.token) {
                        toast.success(t("Reg.5"))
                        document.getElementById('closeModal').click()
                        localStorage.setItem('user', JSON.stringify(res.user.username))
                        localStorage.setItem('email', JSON.stringify(res.user.email))
                        localStorage.setItem('token', JSON.stringify(res.token))
                        localStorage.setItem('userId', JSON.stringify(res.user.id))
                        dispatch(getIsLoginValue(true))
                        dispatch(getProductsFromCart())
                        window.location.href = "/cart"
                    } else {
                        toast.error('Что-то пашло не так!')
                        // setErrorToken("Enter a true username and password")
                    }
                })
        }
    }

    function TogglePasswordO() {
        const pass = document.getElementById('Login_passO')

        if (pass.type === 'password') {
            pass.type = 'text'
        } else {
            pass.type = "password"
        }
    }


    const passO1 = document.getElementById("regPasswordO1")
        , confirm_passwordO = document.getElementById("regPasswordO2");

    const validatePasswordO = () => {
        if (passwordO !== passwordO2) {
            confirm_passwordO.style.border = "1px solid red";
        } else {
            confirm_passwordO.style.border = "none"
        }
    }

    const formBoxButton = document.getElementById("formBoxBtn")
    const iconAngle = document.getElementById('iconAngle')

    useEffect(() => {
        window.scrollTo(0, 0)
        checkSale()
    }, [])

    const title = t("Order.title")
    return (
        <div>
            <NavBanner/>
            <Nav
                name={title}
            />

            <div className='container'>

                <div className='row' style={{marginBottom: 50}}>

                    <div className='col-lg-6 col-md-12 col-sm-12' style={{marginRight: 50}}>

                        {
                            isLogin ? null : <div>
                                <button className="orderButton"
                                        onClick={() => setShow(!show)}
                                >
                                    {t("Reg.3")}
                                </button>
                                <div className="formLogSignPlus">
                                    <i onClick={() => setShow(!show)} className="icon-angle-down"></i>
                                </div>
                                {
                                    show ? <div className="form-box">
                                        <div className="form-tab">
                                            <Tabs>
                                                <TabList style={{
                                                    display: "flex",
                                                    flexDirection: "row",
                                                    justifyContent: "space-around",
                                                    fontWeight: "500",
                                                    fontSize: 20,
                                                    color: "3399FF",
                                                    marginBottom: 40
                                                }}>
                                                    <Tab style={{color: "#3399FF",}}>{t("Reg.1")}</Tab>
                                                    <Tab style={{color: "#3399FF"}}>{t("Reg.2")}</Tab>
                                                </TabList>

                                                <TabPanel>
                                                    <div className="tab-pane fade show active" id="signin"
                                                         role="tabpanel"
                                                         aria-labelledby="signin-tab">
                                                        <form onSubmit={submitLoginO}>
                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor="singin-email">{t("Modal.Log.username")}*</label>
                                                                <input type="text" className="form-control"
                                                                       id="singin-email"
                                                                       name="singin-email" required
                                                                       onChange={(e) => setUserNameO(e.target.value)}
                                                                />
                                                            </div>


                                                            <div className="form-group">
                                                                <label
                                                                    htmlFor="singin-password">{t("Modal.Log.password")}</label>
                                                                <input type="password" className="form-control"
                                                                       id="Login_passO"
                                                                       name="singin-password" required
                                                                       onChange={e => setPasswordO(e.target.value)}
                                                                />
                                                                <input type="checkbox" onClick={TogglePasswordO}/>
                                                                <label style={{paddingLeft: 10}}
                                                                       htmlFor="toggle-password">{t("Modal.Log.showPassword")}</label>
                                                            </div>


                                                            <div className="form-footer">
                                                                <button type="submit"
                                                                        className="btn btn-outline-primary-2">
                                                                    <span
                                                                        style={{fontSize: 17}}>{t("Modal.Log.title")}</span>
                                                                    <i className="icon-long-arrow-right"></i>
                                                                </button>

                                                                <div className="custom-control custom-checkbox">
                                                                    <input type="checkbox"
                                                                           className="custom-control-input"
                                                                           id="signin-remember"/>
                                                                    <label className="custom-control-label"
                                                                           htmlFor="signin-remember">{t("Modal.Log.Reminder")}</label>
                                                                </div>
                                                            </div>
                                                        </form>
                                                        <div className="form-choice">
                                                            <p className="text-center"
                                                               style={{fontSize: 17}}>{t("Modal.Reg.withSocial")} </p>
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
                                                </TabPanel>
                                                <TabPanel>
                                                    <form onSubmit={submitAuthO}>
                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="register-user">{t("Modal.Reg.username")} *</label>
                                                            <input type="еуче" className="form-control"
                                                                   id="register-email"
                                                                   name="register-email" required
                                                                   onChange={e => setUserNameO(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="register-email">{t("Modal.Reg.email")} </label>
                                                            <input type="email" className="form-control"
                                                                   id="register-email"
                                                                   name="register-email" required
                                                                   onClick={e => setEmail(e.target.value)}
                                                            />
                                                        </div>


                                                        <div className="form-group">
                                                            <label
                                                                htmlFor="register-password">{t("Modal.Reg.password")}</label>
                                                            <input type="password" className="form-control"
                                                                   id="regPasswordO1"
                                                                   name="register-password" required
                                                                   onChange={e => setPasswordO(e.target.value)}
                                                            />
                                                        </div>

                                                        <div className="form-group">
                                                            <label
                                                                htmlFor='register-password'>{t("Modal.Reg.conPassword")} </label>
                                                            <input type="password" className="form-control"
                                                                   id="regPasswordO2"
                                                                   name="register-password" required
                                                                   onChange={e => setPasswordO2(e.target.value)}
                                                                   onKeyUp={validatePasswordO}
                                                            />
                                                        </div>


                                                        <div className="form-footer">
                                                            <button type="submit" className="btn btn-outline-primary-2">
                                                                <span>{t("Modal.Reg.title")}</span>
                                                                <i className="icon-long-arrow-right"></i>
                                                            </button>

                                                            <div className="custom-control custom-checkbox">
                                                                <input type="checkbox" className="custom-control-input"
                                                                       id="register-policy"/>
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
                                                </TabPanel>
                                            </Tabs>
                                        </div>
                                    </div> : null

                                }
                            </div>
                        }

                        <button className="orderButton">
                            {isLogin ? "Допольните всю полю " : t("Order.Pay")}
                        </button>
                        <div className='form-box'>
                            <div className='form-tab'>
                                <form onSubmit={(e) => setOrderDet(e)} id='orderForm'>
                                    <div className="form-group">
                                        <label htmlFor="order-firstname">{t("Modal.Log.firstName")}*</label>

                                        <input type="text" className="form-control" id="order-firstname"
                                               name="order-firstname" required
                                            // placeholder={firstName}
                                               value={isLogin ? firstName : null}
                                               onChange={e => setFirstName(e.target.value)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="order-lastname">{t("Modal.Log.lastName")}*</label>
                                        <input type="text" className="form-control" id="order-lastname"
                                               name="order-lastname" required
                                               placeholder="Үсөнов"
                                               onChange={e => setLastName(e.target.value)}
                                        />
                                    </div>


                                    <div className="form-group">
                                        <label htmlFor="order-telephone">{t("Modal.Log.tel")}*</label>

                                        <PhoneInput
                                            country={'kg'}
                                            onChange={tel => setTel(tel)}
                                        />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="order-address">{t("Modal.Log.address")}* </label>
                                        <input type="text" className="form-control" id="order-address"
                                               name="order-address" required
                                               placeholder={t("Modal.Log.addressTitle")}
                                               onChange={e => setAddress(e.target.value)}
                                        />
                                    </div>

                                    <div className="form-footer">
                                        <button
                                            className="btn btn-outline-primary-2">
                                            <span>{t("Modal.Log.order")}</span>
                                            <i className="icon-long-arrow-right"></i>
                                        </button>

                                        <div className="custom-control custom-checkbox">
                                            <input type="checkbox" className="custom-control-input"
                                                   id="register-policy"/>
                                            <label className="custom-control-label"
                                                   htmlFor="register-policy">{t("Modal.Reg.beAgree")}</label>
                                        </div>

                                    </div>

                                </form>

                            </div>
                        </div>

                    </div>

                    <div className='col-lg-5 col-md-12 col-sm-12 ' style={{paddingTop: 40}}>
                        <table className="table table-cart table-mobile cartOrder" style={{
                            border: "1px solid #dee2e6",
                        }}>
                            <thead>
                            <tr>
                                <th style={{
                                    textAlign: "center",
                                    margin: 30
                                }}>{t("Cart.CartPage.Products")}</th>
                                <th>{t("Cart.CartPage.Quantity")} </th>
                                <th>{t("Cart.CartPage.All")}</th>

                            </tr>
                            </thead>

                            <tbody>

                            {
                                token ?
                                    cartProductsP?.items?.map((item, i) => (

                                        <tr key={i}>
                                            <td className="product-col">
                                                <div className="product" style={{
                                                    paddingLeft: 20
                                                }}>
                                                    <figure className="product-media">
                                                        <img src={item.product.image}
                                                             alt={item.product.title}/>
                                                    </figure>

                                                    <h3 className="product-title">
                                                        <NavLink to={{
                                                            pathname: '/product/' + item.product.id,
                                                            id: item.product.id
                                                        }}>{item.product.title}</NavLink>
                                                    </h3>
                                                </div>
                                            </td>
                                            {/*{*/}
                                            {/*    item.product.percent > 0 ?*/}
                                            {/*        <td className="price-col" style={{*/}
                                            {/*            marginLeft: 10*/}
                                            {/*        }}>{item.product.price -*/}
                                            {/*        (item.product.price * item.product.percent /100)}*/}
                                            {/*            <span className="old-price" style={{*/}
                                            {/*                textDecorationLine: "line-through",*/}
                                            {/*                color: "#ccbc30",*/}
                                            {/*                paddingLeft: "1rem"*/}
                                            {/*            }}> {item.product.price}</span>*/}
                                            {/*        </td>*/}
                                            {/*        :*/}
                                            {/*        <td className="price-col">{item.product.price}</td>*/}
                                            {/*}*/}
                                            <td className="quantity-col"
                                                style={{textAlign: "center"}}>x {item.quantity}</td>
                                            {
                                                item.product.percent > 0 ?
                                                    <td className="total-col">{(item.product.price -
                                                        (item.product.price * item.product.percent / 100)) * item.quantity}
                                                    </td>
                                                    :
                                                    <td className="total-col">{item.product.price * item.quantity}</td>
                                            }
                                        </tr>
                                    ))

                                    :

                                    cartProductsP?.map((item, i) => (

                                        <tr key={i}>
                                            <td className="product-col">
                                                <div className="product" style={{
                                                    paddingLeft: 20
                                                }}>
                                                    <figure className="product-media">
                                                        <img src={item.image}
                                                             alt={item.title}/>
                                                    </figure>

                                                    <h3 className="product-title">
                                                        <NavLink to={{
                                                            pathname: '/product/' + item.id,
                                                            id: item.id
                                                        }}>{item.title}</NavLink>
                                                    </h3>
                                                </div>
                                            </td>
                                            <td className="quantity-col"
                                                style={{textAlign: "center"}}>x {item.quantity}</td>
                                            {
                                                item.percent > 0 ?
                                                    <td className="total-col">{(item.price -
                                                        (item.price * item.percent / 100)) * item.quantity}
                                                    </td>
                                                    :
                                                    <td className="total-col">{item.price * item.quantity}</td>
                                            }
                                        </tr>
                                    ))
                            }
                            <td>
                                <div style={{
                                    float: "right",
                                    fontWeight: 800,
                                    fontSize: 17,
                                }}>
                                    Итого: <span style={{
                                    fontWeight: 500,
                                    paddingLeft: 20
                                }}>{sum} </span>
                                    {saleH ? <span style={{
                                            textDecorationLine: "line-through",
                                            color: "#ccbc30",
                                            paddingLeft: "1rem"
                                        }}>{sumW}</span>
                                        : null
                                    }
                                </div>
                                {
                                    del_cost === -1 ? null :
                                        <div style={{
                                            textAlign: "center",
                                            fontWeight: 800,
                                            fontSize: 17,
                                        }}>
                                            Доставка : <span style={{
                                            fontWeight: 500,
                                            paddingLeft: 20
                                        }}>{del_cost === 0 ? "Бесплатно": del_cost} </span></div>
                                }
                            </td>
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>
        </div>
    )

}

export default Order