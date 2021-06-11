import React from "react";
import {useTranslation} from "react-i18next";

const OrderHistory = () => {
    const {t, i18n} = useTranslation();
    return (
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
    )
}

export  default  OrderHistory