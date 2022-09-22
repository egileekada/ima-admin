import React, {useState} from "react"
import styles from './index.module.css'
import Image from 'next/image'
import { PageTabs } from "../PageTabs"

export function Pagination({page, setPage}:{[x:string]:any}){
    const [activeTab, setActiveTab] = useState(page)

    return (
        <div className={styles.paginationWrapper}>
            <p>1-2 of items</p>
            <button className={styles.navi} onClick={()=> setPage(page-1)}><Image src='/images/faintArrowLeft.png' width={7.2} height={7.2} alt='arrow'/></button>
            <PageTabs page={page} activeTab={activeTab} setActiveTab={setActiveTab}/>
            <PageTabs page={page+1} activeTab={activeTab} setActiveTab={setActiveTab} set/>
            <button className={styles.navi} onClick={()=> setPage(page+1)}><Image src='/images/darkArrowRight.png' width={7.2} height={7.2} alt='arrow'/></button>
        </div>
    )
}