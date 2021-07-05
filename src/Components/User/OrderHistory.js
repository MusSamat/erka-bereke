import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";
import {useDispatch} from "react-redux";
import GetData from "../../service/GetData";
import {setloading} from "../../store/actions/laod_action";

const OrderHistory = () => {
    const {t, i18n} = useTranslation();
    const id = JSON.parse(localStorage.getItem('userId'))
    const token  = JSON.parse(localStorage.getItem("token"))
    const dispatch = useDispatch()
    const [orderHistory, setOrderHistory] = useState([])

    const getOrderHistory = () => {
        dispatch(setloading(true))
        new GetData().getData("/views/order/" + id).then(res => {
            dispatch(setloading(false))
            setOrderHistory(res)
        }).catch(error => {
            if(error.status === 500){
                dispatch(setloading(false))
            }

        })
    }

    useEffect(() => {
        if(token){
            getOrderHistory()
        }
    }, [])

    return (
        <div>
            {
                orderHistory ?
                    <table style={{
                        width: "100%",
                        border: "1px solid #585858",
                        textAlign: "center"
                    }}>
                        <thead style={{
                            border: "1px solid #585858"
                        }}>
                        <tr style={{
                            border: "1px solid #585858"
                        }}>
                            <th style={{
                                border: "1px solid #585858"
                            }} >ЗАКАЗ</th>
                            <th style={{
                                border: "1px solid #585858"
                            }}>ДАТА</th>
                            <th style={{
                                border: "1px solid #585858"
                            }}>СТАТУС</th>
                            <th  style={{
                                border: "1px solid #585858"
                            }}>ИТОГО</th>
                        </tr>
                        </thead>
                        <tbody>
                        <tr style={{
                            border: "1px solid #585858"
                        }}>
                            <td className="product-col" style={{fontWight: 500,
                                border: "1px solid #585858"
                            }}>№20</td>
                            <td className="price-col"
                                style={{fontWight: 500,
                                    border: "1px solid #585858"
                                }}
                            >
                                <time >2021.06.17</time>
                            </td>
                            <td>В Процессе</td>
                            <td style={{fontWight: 500,
                                border: "1px solid #585858"
                            }}> 24260 ₽ ЗА 20 ЕДИНИЦ</td>
                        </tr>
                        <tr>
                            <td className="product-col" style={{fontWeight: 500}}>№21</td>
                            <td className="price-col">
                                <time >2021.06.21</time>
                            </td>
                            <td>Создано</td>
                            <td style={{fontWeight: 500}}> NaN ₽ ЗА 515 ЕДИНИЦ</td>
                        </tr>
                        <tr>
                            <td className="product-col" style={{fontWeight: 500}}>№22</td>
                            <td className="price-col">
                                <time>2021.06.21</time>
                            </td>
                            <td>Создано</td>
                            <td style={{fontWeight: 500}}> 16760 ₽ ЗА 20 ЕДИНИЦ</td>
                        </tr>
                        </tbody>
                    </table>
                    :
                    <div>
                        <div style={{
                            fontSize: "2rem",
                            fontWeight: "bold"
                        }}>Uppp  -  pp  - ps ! ! ! У вас нету заказов </div>

                        <div>
                            <img src="/assets/svg_logo/delive.png" alt="delivery"
                                 style={{
                                     margin: "10rem"
                                 }}
                            />
                        </div>
                    </div>
            }
        </div>
    )
}

export  default  OrderHistory