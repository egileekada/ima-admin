import React from 'react'
import Image from "next/image"
import styles from './index.module.css'

export default function Index(){
    return( 
        <div style={{display:'flex', justifyContent:'space-between', alignItems:'center'}}>
            <div className={styles.firstWrapper}>
                <div><Image src='/images/Icon.png' width={18} height={12} alt='hamburger' /></div>
                <p style={{marginLeft:27}}>Good morning, Maharram</p>
                <div><Image src='/images/wave.png' height={24} width={24} alt='wave' /></div>
                <p className={styles.small} style={{marginLeft:13}}>you have <span style={{color:'#3366FF'}}>1 new message</span></p>
            </div>
            <div><Image src='/images/openFile.png' width={48} height={46}/></div>
        </div>
    )
}