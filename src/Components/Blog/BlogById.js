import React, {useEffect, useState} from "react";
import GetData from "../../service/GetData";
import './blog.css'
import {useTranslation} from "react-i18next";
import NavBanner from "../Nav/NavBanner";
import Nav from "../Nav/Nav";
import moment from "moment";

const BlogById = (props) => {
    const {t, i18n} = useTranslation();
    const id = props.match.params.id
    console.log(props)

    const [blog, setBlog] = useState([])


    function GetBlog() {
        new GetData().getData("/views/blog/" + id).then((res) => {
            setBlog(res)
        })
    }


    useEffect(() => {
        GetBlog()
    }, [])

    return (
        <div>
            <NavBanner/>

            <Nav
                name={t("Footer.FooterMenu.1.4")}
            />

            <div className='container'>
                <div className='blogDate'>
                    <div>\{t("Footer.FooterMenu.1.4")}</div>
                    { moment(blog.created_at).format('YYYY-MM-DD')}
                </div>

                <div className='blogTitle'>
                    {
                        blog.title
                    }
                </div>
                <div className='col-12 col-sm-12 blog_id_image prod_cke'>
                    <div dangerouslySetInnerHTML={{__html: blog.description}}/>
                </div>
            </div>
        </div>
    )
}

export default BlogById