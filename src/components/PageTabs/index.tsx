import React, {useState} from "react"
import styles from './index.module.css'

export function PageTabs({page, setPage, activeTab, setActiveTab}:{[x:string]:any}){


    return(
        <button value={page}
        className={activeTab===page ? styles.activeBtn : styles.btn}
        onClick={() => {
            setActiveTab(page)
            setPage(page)
        }}>{page}</button>
    )
}