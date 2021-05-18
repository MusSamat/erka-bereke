import React from "react";
import NavBanner from "../Nav/NavBanner";
import Nav from "../Nav/Nav";


const Blog = () => {

    const blog = {
                name: 'Блог',
                title: '',
                item: ''
    }

    return (
        <div>
            <NavBanner/>

            <Nav
                name={blog.name}
                // item={blog.item}
            />

            <div className="page-content">
                <div className="container">
                    <div className="entry-container max-col-3" data-layout="fitRows">
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-13/products/ka2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        {/*<span className="meta-separator">|</span>*/}
                                        <a href="#" style={{ fontSize: 17}}>Май 17, 2021</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#" style={{ fontSize: 17}}>2 Комментарии</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Как сохранить капусту свежей до весны: 10 способов
                                        </a>
                                    </h2>

                                    {/*<div className="entry-cats">*/}
                                    {/*    in <a href="#">Lifestyle</a>,*/}
                                    {/*    <a href="#">Shopping</a>*/}
                                    {/*</div>*/}


                                    <div className="entry-content">
                                        <p>Сохранить белокочанную и краснокочанную
                                            капусту свежей и сочной до весны совсем не трудно.
                                            Для этой благой цели нашими огородниками придумано достаточно способов,
                                            на любой вкус
                                            ...</p>
                                        <a href="single.html" className="read-more" style={{fontSize: 17}}>Улантуу</a>
                                    </div>

                                </div>

                            </article>

                        </div>
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-13/products/ka2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        {/*<span className="meta-separator">|</span>*/}
                                        <a href="#" style={{ fontSize: 17}}>Май 17, 2021</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#" style={{ fontSize: 17}}>2 Комментарии</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Как сохранить капусту свежей до весны: 10 способов
                                        </a>
                                    </h2>

                                    {/*<div className="entry-cats">*/}
                                    {/*    in <a href="#">Lifestyle</a>,*/}
                                    {/*    <a href="#">Shopping</a>*/}
                                    {/*</div>*/}


                                    <div className="entry-content">
                                        <p>Сохранить белокочанную и краснокочанную
                                            капусту свежей и сочной до весны совсем не трудно.
                                            Для этой благой цели нашими огородниками придумано достаточно способов,
                                            на любой вкус
                                            ...</p>
                                        <a href="single.html" className="read-more" style={{fontSize: 17}}>Улантуу</a>
                                    </div>

                                </div>

                            </article>

                        </div>
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-13/products/ka2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        {/*<span className="meta-separator">|</span>*/}
                                        <a href="#" style={{ fontSize: 17}}>Май 17, 2021</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#" style={{ fontSize: 17}}>2 Комментарии</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Как сохранить капусту свежей до весны: 10 способов
                                        </a>
                                    </h2>

                                    {/*<div className="entry-cats">*/}
                                    {/*    in <a href="#">Lifestyle</a>,*/}
                                    {/*    <a href="#">Shopping</a>*/}
                                    {/*</div>*/}


                                    <div className="entry-content">
                                        <p>Сохранить белокочанную и краснокочанную
                                            капусту свежей и сочной до весны совсем не трудно.
                                            Для этой благой цели нашими огородниками придумано достаточно способов,
                                            на любой вкус
                                            ...</p>
                                        <a href="single.html" className="read-more" style={{fontSize: 17}}>Улантуу</a>
                                    </div>

                                </div>

                            </article>

                        </div>
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-13/products/ka2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        {/*<span className="meta-separator">|</span>*/}
                                        <a href="#" style={{ fontSize: 17}}>Май 17, 2021</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#" style={{ fontSize: 17}}>2 Комментарии</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Как сохранить капусту свежей до весны: 10 способов
                                        </a>
                                    </h2>

                                    {/*<div className="entry-cats">*/}
                                    {/*    in <a href="#">Lifestyle</a>,*/}
                                    {/*    <a href="#">Shopping</a>*/}
                                    {/*</div>*/}


                                    <div className="entry-content">
                                        <p>Сохранить белокочанную и краснокочанную
                                            капусту свежей и сочной до весны совсем не трудно.
                                            Для этой благой цели нашими огородниками придумано достаточно способов,
                                            на любой вкус
                                            ...</p>
                                        <a href="single.html" className="read-more" style={{fontSize: 17}}>Улантуу</a>
                                    </div>

                                </div>

                            </article>

                        </div>
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-13/products/ka2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        {/*<span className="meta-separator">|</span>*/}
                                        <a href="#" style={{ fontSize: 17}}>Май 17, 2021</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#" style={{ fontSize: 17}}>2 Комментарии</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Как сохранить капусту свежей до весны: 10 способов
                                        </a>
                                    </h2>

                                    {/*<div className="entry-cats">*/}
                                    {/*    in <a href="#">Lifestyle</a>,*/}
                                    {/*    <a href="#">Shopping</a>*/}
                                    {/*</div>*/}


                                    <div className="entry-content">
                                        <p>Сохранить белокочанную и краснокочанную
                                            капусту свежей и сочной до весны совсем не трудно.
                                            Для этой благой цели нашими огородниками придумано достаточно способов,
                                            на любой вкус
                                            ...</p>
                                        <a href="single.html" className="read-more" style={{fontSize: 17}}>Улантуу</a>
                                    </div>

                                </div>

                            </article>

                        </div>
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/demos/demo-13/products/ka2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        {/*<span className="meta-separator">|</span>*/}
                                        <a href="#" style={{ fontSize: 17}}>Май 17, 2021</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#" style={{ fontSize: 17}}>2 Комментарии</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Как сохранить капусту свежей до весны: 10 способов
                                        </a>
                                    </h2>

                                    {/*<div className="entry-cats">*/}
                                    {/*    in <a href="#">Lifestyle</a>,*/}
                                    {/*    <a href="#">Shopping</a>*/}
                                    {/*</div>*/}


                                    <div className="entry-content">
                                        <p>Сохранить белокочанную и краснокочанную
                                            капусту свежей и сочной до весны совсем не трудно.
                                            Для этой благой цели нашими огородниками придумано достаточно способов,
                                            на любой вкус
                                            ...</p>
                                        <a href="single.html" className="read-more" style={{fontSize: 17}}>Улантуу</a>
                                    </div>

                                </div>

                            </article>

                        </div>
                    </div>

                    <nav aria-label="Page navigation">
                        <ul className="pagination justify-content-center">
                            <li className="page-item disabled">
                                <a className="page-link page-link-prev" href="#" aria-label="Previous" tabIndex="-1"
                                   aria-disabled="true">
                                    <span aria-hidden="true"><i className="icon-long-arrow-left"></i></span>Prev
                                </a>
                            </li>
                            <li className="page-item active" aria-current="page"><a className="page-link" href="#">1</a>
                            </li>
                            <li className="page-item"><a className="page-link" href="#">2</a></li>
                            <li className="page-item">
                                <a className="page-link page-link-next" href="#" aria-label="Next">
                                    Next <span aria-hidden="true"><i className="icon-long-arrow-right"></i></span>
                                </a>
                            </li>
                        </ul>
                    </nav>
                </div>
            </div>
        </div>

    )
}

export default Blog