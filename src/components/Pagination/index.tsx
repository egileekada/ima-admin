import React, {useState} from "react"
import styles from './index.module.css'
import Image from 'next/image'
import { PageTabs } from "../PageTabs"

export function Pagination({page, setPage, pageCount}:{[x:string]:any}){
    const [activeTab, setActiveTab] = useState(page)

    return (
        <div className={styles.paginationWrapper}>
            <p>{}</p>
            <button className={styles.navi} onClick={()=> {
                if (page > 1) setPage(page-1)
            }}><Image src='/images/faintArrowLeft.png' width={7.2} height={7.2} alt='arrow'/></button>
            {page <= pageCount && <PageTabs page={page} activeTab={activeTab} setActiveTab={setActiveTab} setPage={setPage}/>}
            {(page+1) <= pageCount && <PageTabs page={page+1} activeTab={activeTab} setActiveTab={setActiveTab} setPage={setPage}/>}
            <button className={styles.navi} onClick={()=> {
                if (page < pageCount) setPage(page+1)
            }}><Image src='/images/darkArrowRight.png' width={7.2} height={7.2} alt='arrow'/></button>
        </div>
    )
}