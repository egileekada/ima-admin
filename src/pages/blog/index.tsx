import { NextPage } from "next"
import React from "react"
import { Layout } from "../../layout"
import { MyBlogs } from "../../components/Blogs"


const ViewBlogs: NextPage = () => {
    return (
        <Layout>
            <MyBlogs/>
        </Layout>
    )
}

export default ViewBlogs