import React, {useEffect, useState} from "react";
import {useTranslation} from "react-i18next";

const Toolbox = (props) => {
    const {t, i18n} = useTranslation();
    const setFilter = props.setFilter
    const id = props.id
    const c = props.sizeOfProd

    const onChangeFilterHandler = (e) => {
        setFilter(e.target.value)
    }


    return (
        <div className="toolbox" style={{marginTop: 20}}>
            <div className="toolbox-left">
                <div className="toolbox-info" style={{
                    font: "17px",
                }}>
                    {t("Toolbox.All")}: <span style={{
                        paddingLeft: 10
                }}>  {c} </span>
                </div>
            </div>

            <div className="toolbox-right">
                <div className="toolbox-sort">
                    <label htmlFor="sortby">{t("Toolbox.Sort")}:</label>
                    <div className="select-custom">
                        <select name="sortby" id="sortby" className="form-control" style={{ color: "black"}}
                                onChange={ e => onChangeFilterHandler(e) }

                        >
                            <option value="lowestToHighest">{t("Toolbox.LowestPrice")} </option>
                            <option value="highestToLowest">{t("Toolbox.HighestPrice")}</option>
                        </select>
                    </div>
                </div>
            </div>

        </div>

    )
}

export default Toolbox