import React from "react";
import Nav from "../Nav/Nav";
import NavBanner from "../Nav/NavBanner";

const Wishlist = () => {

    const wishlist = {
        name: 'Жактырылды',
        title: 'This is Wishlist',
        // item: 'wish'
    }

    return(
        <div>

            <NavBanner
                name={wishlist.name}
                title={wishlist.title}
            />
            <Nav
                name={wishlist.name}
                // item={wishlist.item}
            />

            <div className="page-content">
                <div className="container">
                    <table className="table table-wishlist table-mobile">
                        <thead>
                        <tr>
                            <th>Продукт</th>
                            <th>Баасы</th>
                            <th>Кампада</th>
                            <th> Корзинкага кошуу</th>
                            <th> Өчүрүү</th>
                        </tr>
                        </thead>

                        <tbody>
                        <tr>
                            <td className="product-col">
                                <div className="product">
                                    <figure className="product-media">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-13/products/1.jpg" alt="Product image"/>
                                        </a>
                                    </figure>

                                    <h3 className="product-title">
                                        <a href="#">Beige knitted elastic runner shoes</a>
                                    </h3>
                                </div>

                            </td>
                            <td className="price-col">$84.00</td>
                            <td className="stock-col"><span className="in-stock">Жок</span></td>
                            <td className="action-col">
                                <button className="btn btn-block btn-outline-primary-2"><i
                                    className="icon-cart-plus"></i>Add to Cart
                                </button>
                            </td>
                            <td className="remove-col">
                                <button className="btn-remove"><i className="icon-close"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td className="product-col">
                                <div className="product">
                                    <figure className="product-media">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-13/products/2.jpg" alt="Product image"/>
                                        </a>
                                    </figure>

                                    <h3 className="product-title">
                                        <a href="#">Blue utility pinafore denim dress</a>
                                    </h3>
                                </div>

                            </td>
                            <td className="price-col">$76.00</td>
                            <td className="stock-col"><span className="in-stock">Бар</span></td>
                            <td className="action-col">
                                <button className="btn btn-block btn-outline-primary-2"><i
                                    className="icon-cart-plus"></i>Add to Cart
                                </button>
                            </td>
                            <td className="remove-col">
                                <button className="btn-remove"><i className="icon-close"></i></button>
                            </td>
                        </tr>
                        <tr>
                            <td className="product-col">
                                <div className="product">
                                    <figure className="product-media">
                                        <a href="#">
                                            <img src="assets/images/demos/demo-13/products/3.jpg" alt="Product image"/>
                                        </a>
                                    </figure>

                                    <h3 className="product-title">
                                        <a href="#">Orange saddle lock front chain cross body bag</a>
                                    </h3>
                                </div>
                            </td>
                            <td className="price-col">$52.00</td>
                            <td className="stock-col"><span className="out-of-stock">Жок</span></td>
                            <td className="action-col">
                                <button className="btn btn-block btn-outline-primary-2 disabled">Жок</button>
                            </td>
                            <td className="remove-col">
                                <button className="btn-remove"><i className="icon-close"></i></button>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <div className="wishlist-share">
                        <div className="social-icons social-icons-sm mb-2">
                            <label className="social-label">Бөлүшүү:</label>
                            <a href="#" className="social-icon" title="Facebook" target="_blank"><i
                                className="icon-facebook-f"></i></a>
                            <a href="#" className="social-icon" title="Twitter" target="_blank"><i
                                className="icon-twitter"></i></a>
                            <a href="#" className="social-icon" title="Instagram" target="_blank"><i
                                className="icon-instagram"></i></a>
                            <a href="#" className="social-icon" title="Youtube" target="_blank"><i
                                className="icon-youtube"></i></a>
                            <a href="#" className="social-icon" title="Pinterest" target="_blank"><i
                                className="icon-pinterest"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>

)
}

export default Wishlist