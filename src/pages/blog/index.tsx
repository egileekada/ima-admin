import { NextPage } from "next"
import React from "react"
import { MyBlogs } from "../../components/Blogs"
import { Layout } from "../../layout"


const ViewBlogs: NextPage = () => {
    return (
        <Layout>
            <MyBlogs/>
        </Layout>
    )
}

export default ViewBlogs