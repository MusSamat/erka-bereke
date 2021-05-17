import React from "react";
import CatalogProducts from "./CatalogProducts";

const Categories = () => {
    return (
        <div className="page-content">
            <div className="container">
                <div className="row">

                    <CatalogProducts/>

                    <aside className="col-lg-3 col-xl-5col order-lg-first">
                        <div className="sidebar sidebar-shop" style={{border: '1px solid #d2d0d0', borderRadius: '8px'}}>
                            <div className="widget widget-categories">
                                <h3 className="widget-title" style={{paddingTop: 20, paddingLeft: 20, fontWeight: "bold"}}>Мөмө-Жемиштер</h3>
                                <h5 style={{ paddingLeft: 20}}>56 түр</h5>

                                <div className="widget-body">
                                    <div className="accordion" id="widget-cat-acc">
                                        <hr/>
                                        <div className="prodCategor">
                                            <h6>Категориялар</h6>
                                            <ul>
                                                <li>Мөмө жемиш <span>(33)</span></li>
                                                <li>Жер жемиш  <span>(23)</span></li>
                                            </ul>
                                        </div>
                                    </div>

                                </div>

                            </div>


                            <div className="widget" style={{paddingLeft: 20}}>
                                <h3 className="widget-title" style={{fontSize: 20, fontWeight: 600}}>Брендтер</h3>

                                <div className="widget-body brandScroll">
                                    <div className="filter-items">
                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-1"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="brand-1">Next</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-2"/>
                                                    <label className="custom-control-label" htmlFor="brand-2">River
                                                        Island</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-3"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="brand-3">Geox</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-4"/>
                                                    <label className="custom-control-label" htmlFor="brand-4">New
                                                        Balance</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-5"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="brand-5">UGG</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-6"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="brand-6">F&F</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-7"/>
                                                    <label className="custom-control-label"
                                                           htmlFor="brand-7">Nike</label>
                                            </div>

                                        </div>


                                    </div>

                                </div>

                            </div>

                            <div className="widget" style={{paddingLeft: 20}}>
                                <h3 className="widget-title" style={{fontSize: 20, fontWeight: 600}}>Арзандатуулар</h3>

                                <div className="widget-body brandScroll">
                                    <div className="filter-items">
                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-1"/>
                                                <label className="custom-control-label"
                                                       htmlFor="brand-1">Next</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-2"/>
                                                <label className="custom-control-label" htmlFor="brand-2">River
                                                    Island</label>
                                            </div>

                                        </div>


                                        <div className="filter-item">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input" id="brand-3"/>
                                                <label className="custom-control-label"
                                                       htmlFor="brand-3">Geox</label>
                                            </div>

                                        </div>

                                    </div>

                                </div>

                            </div>






                        </div>

                    </aside>


                </div>
            </div>
        </div>
    )
}

export default Categories