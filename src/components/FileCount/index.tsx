import React from "react"
import Image from "next/image";
import styles from "./index.module.css"


export function FileCount({img, background, title, amount, textColor='#3366FF'}:
    { [img: string]: any, background: string, title:string, amount:string }){



    return (
        <div className={styles.fileCountWrapper} style={{backgroundColor:`${background}`}}>
           {/* <div className={styles.arrowRight}><Image src='/images/arrowRight.png' width={6} height={10} alt='arrow-right' /></div> */}
            <div><Image src={img} width={25} height={25} alt='file'/></div>
            <div>
                <p style={{color:`${textColor}`}}>{amount}</p>
                <p style={{marginTop:'5px', fontSize:'11px', color:`${textColor}`}}>{title}</p>
            </div>
        </div>
    )
}