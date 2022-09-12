import { NextPage } from "next";
import { useRouter } from "next/router";
import { BlogDetail } from "../../components/Blogs/BlogDetail";
import { Layout } from "../../layout";


const BlogDetails: NextPage =() => {

    return (
        <Layout>
            <BlogDetail/>
        </Layout>
    )
}

export default BlogDetails