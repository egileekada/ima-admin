import React from "react"
import { NextPage } from "next"
import { Layout } from "../../layout"
import { WriteBlog } from "../../components/Blogs/WriteBlog"


const PostBlog: NextPage = () => {
    return (
        <Layout>
            <WriteBlog />
        </Layout>
    )
}

export default PostBlog