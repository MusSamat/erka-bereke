import React from "react";
import NavBanner from "../Nav/NavBanner";
import Nav from "../Nav/Nav";


const Blog = () => {

    const blog = {
                name: 'Blog',
                title: 'This is BlogPage',
                item: 'first blog'
    }

    return (
        <div>
            <NavBanner
                title={blog.title}
                name={blog.name}
            />

            <Nav
                name={blog.name}
                item={blog.item}
            />

            <div className="page-content">
                <div className="container">
                    <div className="entry-container max-col-3" data-layout="fitRows">
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                                        <span className="meta-separator">|</span>
                                        <a href="#">Nov 22, 2018</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#">2 Comments</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Cras ornare tristique elit.</a>
                                    </h2>

                                    <div className="entry-cats">
                                        in <a href="#">Lifestyle</a>,
                                        <a href="#">Shopping</a>
                                    </div>


                                    <div className="entry-content">
                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                                            eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas vulputate
                                            ...</p>
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>

                                </div>

                            </article>

                        </div>


                        <div className="entry-item lifestyle col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media entry-video">
                                    <a href="single.html">
                                        <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                                        <span className="meta-separator">|</span>
                                        <a href="#">Nov 21, 2018</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#">0 Comments</a>
                                    </div>


                                    <h2 className="entry-title">
                                        <a href="single.html">Vivamus vestibulum ntulla necante.</a>
                                    </h2>

                                    <div className="entry-cats">
                                        in <a href="#">Lifestyle</a>
                                    </div>

                                    <div className="entry-content">
                                        <p>Morbi purus libero, faucibus commodo quis, gravida id, est.
                                            Vestibulumvolutpat, lacus a ultrices sagittis, mi neque euismod dui ...</p>
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>

                                </div>
                            </article>

                        </div>
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                                        <span className="meta-separator">|</span>
                                        <a href="#">Nov 22, 2018</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#">2 Comments</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Cras ornare tristique elit.</a>
                                    </h2>

                                    <div className="entry-cats">
                                        in <a href="#">Lifestyle</a>,
                                        <a href="#">Shopping</a>
                                    </div>

                                    <div className="entry-content">
                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                                            eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas vulputate
                                            ...</p>
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>

                                </div>

                            </article>

                        </div>


                        <div className="entry-item lifestyle col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media entry-video">
                                    <a href="single.html">
                                        <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                                        <span className="meta-separator">|</span>
                                        <a href="#">Nov 21, 2018</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#">0 Comments</a>
                                    </div>


                                    <h2 className="entry-title">
                                        <a href="single.html">Vivamus vestibulum ntulla necante.</a>
                                    </h2>

                                    <div className="entry-cats">
                                        in <a href="#">Lifestyle</a>
                                    </div>

                                    <div className="entry-content">
                                        <p>Morbi purus libero, faucibus commodo quis, gravida id, est.
                                            Vestibulumvolutpat, lacus a ultrices sagittis, mi neque euismod dui ...</p>
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>

                                </div>
                            </article>

                        </div>
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                                        <span className="meta-separator">|</span>
                                        <a href="#">Nov 22, 2018</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#">2 Comments</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Cras ornare tristique elit.</a>
                                    </h2>

                                    <div className="entry-cats">
                                        in <a href="#">Lifestyle</a>,
                                        <a href="#">Shopping</a>
                                    </div>


                                    <div className="entry-content">
                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                                            eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas vulputate
                                            ...</p>
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>

                                </div>

                            </article>

                        </div>


                        <div className="entry-item lifestyle col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media entry-video">
                                    <a href="single.html">
                                        <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                                        <span className="meta-separator">|</span>
                                        <a href="#">Nov 21, 2018</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#">0 Comments</a>
                                    </div>


                                    <h2 className="entry-title">
                                        <a href="single.html">Vivamus vestibulum ntulla necante.</a>
                                    </h2>

                                    <div className="entry-cats">
                                        in <a href="#">Lifestyle</a>
                                    </div>

                                    <div className="entry-content">
                                        <p>Morbi purus libero, faucibus commodo quis, gravida id, est.
                                            Vestibulumvolutpat, lacus a ultrices sagittis, mi neque euismod dui ...</p>
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>

                                </div>
                            </article>

                        </div>
                        <div className="entry-item lifestyle shopping col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media">
                                    <a href="single.html">
                                        <img src="assets/images/blog/grid/3cols/post-1.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                                        <span className="meta-separator">|</span>
                                        <a href="#">Nov 22, 2018</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#">2 Comments</a>
                                    </div>

                                    <h2 className="entry-title">
                                        <a href="single.html">Cras ornare tristique elit.</a>
                                    </h2>

                                    <div className="entry-cats">
                                        in <a href="#">Lifestyle</a>,
                                        <a href="#">Shopping</a>
                                    </div>


                                    <div className="entry-content">
                                        <p>Sed pretium, ligula sollicitudin laoreet viverra, tortor libero sodales leo,
                                            eget blandit nunc tortor eu nibh. Suspendisse potenti. Sed egestas vulputate
                                            ...</p>
                                        <a href="single.html" className="read-more">Continue Reading</a>
                                    </div>

                                </div>

                            </article>

                        </div>


                        <div className="entry-item lifestyle col-sm-6 col-lg-4">
                            <article className="entry entry-grid text-center">
                                <figure className="entry-media entry-video">
                                    <a href="single.html">
                                        <img src="assets/images/blog/grid/3cols/post-2.jpg" alt="image desc"/>
                                    </a>
                                </figure>


                                <div className="entry-body">
                                    <div className="entry-meta">
                                        <span className="entry-author">
                                            by <a href="#">John Doe</a>
                                        </span>
                                        <span className="meta-separator">|</span>
                                        <a href="#">Nov 21, 2018</a>
                                        <span className="meta-separator">|</span>
                                        <a href="#">0 Comments</a>
                                    </div>


                                    <h2 className="entry-title">
                                        <a href="single.html">Vivamus vestibulum ntulla necante.</a>
                                    </h2>

                                    <div className="entry-cats">
                                        in <a href="#">Lifestyle</a>
                                    </div>

                                    <div className="entry-content">
                                        <p>Morbi purus libero, faucibus commodo quis, gravida id, est.
                                            Vestibulumvolutpat, lacus a ultrices sagittis, mi neque euismod dui ...</p>
                                        <a href="single.html" className="read-more">Continue Reading</a>
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