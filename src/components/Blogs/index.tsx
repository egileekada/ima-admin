import React, { useState } from "react"
import styles from './index.module.css'
import { SeeBlogs } from "./SeeBlogs"
import { useRouter } from "next/router"


export function MyBlogs(){
    const router = useRouter()

    const [currentPage, setCurrentPage] = useState('all')

    const myStyle = {
        borderBottom: '2.5px solid #0984D6',
        color: '#0984D6'
    }

    return(
        <div>
            <div style={{marginTop:'48px'}} className={styles.myProperty}>
                <p>Blog</p>
                <input type='text' placeholder='Search by name'></input>
            </div>

            <div className={styles.allPosts}>
                <p style={currentPage=='all'?myStyle:{}} onClick={() => 
                    {setCurrentPage('all')
                    router.push('/')}}>All Post (10)</p>
                <p style={currentPage=='write'?myStyle:{}} onClick={() => {
                    setCurrentPage('write')
                    router.push('write-blog')}}>Write Post </p>
            </div>
            
            <div className={styles.availablePosts}>
                <SeeBlogs blogId={1}/>
                <SeeBlogs blogId={2}/>
            </div>
        </div>
    )
}