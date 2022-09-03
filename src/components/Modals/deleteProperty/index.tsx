import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function DeleteProperty({handleDelete}:{handleDelete:any}){
    return(
        <div className={styles.mainWrapper} onClick={handleDelete}>
                <div>
                    <div className={styles.white}>
                        <div className={styles.whiteTop}>
                            <p style={{fontWeight:600}}>Delete Property</p>
                            <div style={{cursor:'pointer'}}><Image src='/images/close.png' width={11} height={11} alt='close'/></div>
                        </div>
                        <p className={styles.whiteMiddle}>Do you want to delete this property?</p>
                        <div className={styles.whiteBottom}>
                            <button>Yes</button>
                            <button>Cancel</button>
                        </div>
                    </div>
                </div>
        </div>
    )
}