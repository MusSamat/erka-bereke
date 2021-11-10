import React, {useEffect, useState} from "react";
import moment from 'moment'
import NavBanner from "../Nav/NavBanner";
import Nav from "../Nav/Nav";
import {Link, NavLink} from "react-router-dom";
import GetData from "../../service/GetData";
import {useTranslation} from "react-i18next";
import {setloading} from "../../store/actions/laod_action";
import {useDispatch} from "react-redux";
import ReactPaginate from 'react-paginate'
import "../PaginationStyle/reactPaginationStyle.css"


const Blog = () => {
    const {t, i18n} = useTranslation();
    const [blogs, setBlogs] = useState([])
    const dispatch = useDispatch()


    function GetBlog() {
        dispatch(setloading(true))
        new GetData().getData("/views/blog").then((res) => {
            dispatch(setloading(false))
            setBlogs(res)
        })
    }


    useEffect(() => {
        window.scrollTo(0,0)
        GetBlog()
    },[])


    //Pagination
    const [pageNumber, setPageNumber] = useState([0])
    const blogPerPage = 6
    const pageVisited = pageNumber * blogPerPage
    const pageCount = Math.ceil(blogs?.length / blogPerPage)

    const changePage = ({selected}) => {
        setPageNumber(selected)
    }

    const displayBlogs = blogs.slice(pageVisited, pageVisited + blogPerPage).map((item, i) => {
        return(
            <div className="col-sm-4 text-center" style={{marginBottom: 30}}>
                <NavLink to={{
                    pathname: "/blog/" + item.id,
                    id: item.id
                }}>
                    <div style={{marginBottom: 20, height: 250}}>
                        <img src={item.image} alt="новости"
                             style={{height: "100%", weight: "100%", margin: "0 auto"}}/>
                    </div>
                    <div className="entry-meta">
                        {moment(item.created_at).format('YYYY-MM-DD')}
                        <span className="meta-separator">|</span>
                        <a href="#" style={{fontSize: 17}}>by Admin</a>
                    </div>
                    <div className="entry-content">
                        <p style={{fontSize: 17, fontWeight: "bold"}}>
                            {item.title}
                        </p>
                        <NavLink to={{
                            pathname: "/blog/" + item.id,
                            id: item.id
                        }} className="read-more" style={{fontSize: 17}}>{t("Blog.proceed")}</NavLink>
                    </div>
                </NavLink>
            </div>
        )
    })

    return (
        <div>
            <NavBanner/>

            <Nav
                name={t("Footer.FooterMenu.1.4")}
            />

            <div className="page-content">
                <div className="container">
                    <div className="row">
                        {displayBlogs}
                    </div>
                </div>
            </div>
            <div style={{marginTop: 30}} className="paginateDiv">
                <ReactPaginate
                    previousLabel={'Назад'}
                    nextLabel={'Вперед'}
                    pageCount={pageCount}
                    onPageChange={changePage}
                    containerClassName={'paginationBttns'}
                    previousLinkClassName={'previousBttn'}
                    nextLinkClassName={'nextBttn'}
                    disabledClassName={'paginationDisabled'}
                    activeClassName={'paginationActive'}

                />
            </div>
        </div>

    )
}

export default Blog