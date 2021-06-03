import React from "react";

const Toolbox = (props) => {

    const id = props.id
    const c = props.sizeOfProd



    return (
        <div className="toolbox" style={{marginTop: 20}}>
            <div className="toolbox-left">
                <div className="toolbox-info">
                    Баарысы<span>  {c} </span>
                </div>
            </div>

            <div className="toolbox-right">
                <div className="toolbox-sort">
                    <label htmlFor="sortby">Сорттоо:</label>
                    <div className="select-custom">
                        <select name="sortby" id="sortby" className="form-control" style={{ color: "black"}}>
                            {/*<option value="popularity" selected="selected" disabled>жазыңыз...</option>*/}
                            <option value="cost ">Алгач арзан баа </option>
                            <option value="">Алгач кымбат баа</option>
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