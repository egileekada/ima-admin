import React from "react";
import Image from 'next/image'
import styles from './index.module.css'


export function RecentProperty({img, description, location, action, price}:
    {img:string, description: string, location:string, action:string, price:string}){
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.leftContainer}>
                <div><Image src={img} width={48} height={48} alt='recent property' /></div>
                <div>
                    <p style={{color:'#2E3A59'}}>{description}</p>
                    <p style={{fontSize:'12px', fontWeight:400, color:'#8F9BB3'}}>{location}</p>
                </div>
            </div>

            <div style={{textAlign:'right'}}>
                <p className={action==='Rent'?styles.action1 : styles.action2}
                style={{fontWeight:400}}>{action}</p>
                <div className={styles.divLine}></div>
                <p style={{fontSize:20, color:'#2E3A59'}}>{price}</p>
            </div>
        </div>
    )
}