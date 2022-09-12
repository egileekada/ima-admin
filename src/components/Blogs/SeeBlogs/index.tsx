import React from "react"
import Image from "next/image"
import styles from './index.module.css'
import Link from "next/link"


export function SeeBlogs({blogId}:{[x:string]:any}){

    return(
        <div className={styles.mainWrapper}>
            <div><Image src='/images/remove.png' width={11.67} height={15} alt='trash' style={{cursor:'pointer'}}/></div>
            <div className={styles.rightContainer}>
            <div className={styles.imageSection}>
                <div className={styles.blogImageWrapper}><Image src='/images/blogImage.png' width={250} height={249} alt='blog-cover'/></div>
                <div className={styles.blogBottom}>
                    <div className={styles.adminSide}>
                        <Image src='/images/Manager.png' width={13} height={14} alt='user'/>
                        <p>By Admin</p>
                    </div>
                    <p>10 ways to build a way without borrowing money</p>
                    <hr/>
                    <div className={styles.dateSide} style={{marginBlock:'10px'}}>
                        <Image src='/images/Calendar.png' width={12} height={12} alt='calendar'/>
                        <p>June 10 2022</p>
                    </div>
                </div>
            </div>
            <p className={styles.text}>
            Lorem ipsum dolor
            sit amet, consectetur adipiscing elit.
            Etiam eu turpis molestie, dictum est a, mattis tellus.
            Sed dignissim, metus nec fringilla accumsan, risus sem sollicitudin
            lacus, ut interdum tellus elit sed risus. Maecenas eget condimentum velit,
            sit amet feugiat lectus. Class aptent taciti sociosqu ad litora torquent per
            conubia nostra, per inceptos himenaeos. Praesent auctor purus luctus enim egestas,
            ac scelerisque ante pulvinar. 
            <Link href="/first">
                <span>READ MORE</span>
            </Link>
            </p>
            </div>
        </div>
    )
}