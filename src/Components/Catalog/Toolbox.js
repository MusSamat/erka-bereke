import React from "react";
import {useTranslation} from "react-i18next";

const Toolbox = (props) => {
    const {t, i18n} = useTranslation();
    const id = props.id
    const c = props.sizeOfProd



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
                        <select name="sortby" id="sortby" className="form-control" style={{ color: "black"}}>
                            <option value="cost ">{t("Toolbox.LowestPrice")} </option>
                            <option value="">{t("Toolbox.HighestPrice")}</option>
                        </select>
                    </div>
                </div>

                {/*<div className="toolbox-layout">*/}
                {/*    <a href="category-list.html" className="btn-layout">*/}
                {/*        <svg width="16" height="10">*/}
                {/*            <rect x="0" y="0" width="4" height="4"/>*/}
                {/*            <rect x="6" y="0" width="10" height="4"/>*/}
                {/*            <rect x="0" y="6" width="4" height="4"/>*/}
                {/*            <rect x="6" y="6" width="10" height="4"/>*/}
                {/*        </svg>*/}
                {/*    </a>*/}

                {/*    <a href="category-2cols.html" className="btn-layout">*/}
                {/*        <svg width="10" height="10">*/}
                {/*            <rect x="0" y="0" width="4" height="4"/>*/}
                {/*            <rect x="6" y="0" width="4" height="4"/>*/}
                {/*            <rect x="0" y="6" width="4" height="4"/>*/}
                {/*            <rect x="6" y="6" width="4" height="4"/>*/}
                {/*        </svg>*/}
                {/*    </a>*/}

                {/*    <a href="category.html" className="btn-layout active">*/}
                {/*        <svg width="16" height="10">*/}
                {/*            <rect x="0" y="0" width="4" height="4"/>*/}
                {/*            <rect x="6" y="0" width="4" height="4"/>*/}
                {/*            <rect x="12" y="0" width="4" height="4"/>*/}
                {/*            <rect x="0" y="6" width="4" height="4"/>*/}
                {/*            <rect x="6" y="6" width="4" height="4"/>*/}
                {/*            <rect x="12" y="6" width="4" height="4"/>*/}
                {/*        </svg>*/}
                {/*    </a>*/}

                {/*</div>*/}

            </div>

        </div>

    )
}

export default Toolbox