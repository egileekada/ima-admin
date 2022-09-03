import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({img, name, mobile, email, date, location, status}:
    {img:string, name:string, mobile:string, email:string, date:string, location:string, status:string}){
    return(
        <ul className={styles.userData}>

            <li style={{display:'flex', alignItems:'center'}}>
                <input type='checkbox' style={{marginRight:'10px'}}></input>
                <div className={styles.avatar} style={{marginRight:'5px'}}>
                    <div><Image src={img} width={40} height={40} alt='avatar' style={{borderRadius:'50%'}}/></div>
                </div>
                <div>
                    <p  style={{fontSize:'12px'}}>{name}</p>
                    <p style={{fontSize:'10px', color:'#90A0B7'}}>{mobile}</p>
                </div>
            </li>

            <li>
                <p>{email}</p>
            </li>

            <li>
                <p style={{fontSize:'10px'}}>{date}</p>
            </li>

            <li>
                <p style={{fontSize:'10px'}}>{location}</p>
            </li>

            <li>
                <p className={status==='Verified Agent' ? styles.verified1 : styles.verified2}>{status}</p>
            </li>

            <li style={{width:'100%', textAlign:'center'}}>
                <button className={styles.viewButton}>View</button>
            </li>
        </ul>
    )
}