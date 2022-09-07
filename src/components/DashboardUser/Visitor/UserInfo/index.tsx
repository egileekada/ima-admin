import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({ ip, seen, location, status}:
    {ip:string, seen:string, location:string, status:string}){
    return(
        <ul className={styles.userData}>

            <li style={{display:'flex', alignItems:'center'}}>
                <input type='checkbox' style={{marginRight:'10px'}}></input>
                <div style={{marginRight:'5px'}}>
                    <p style={{fontSize:'12px'}}>{ip}</p>
                </div> 
            </li> 

            <li>
                <p style={{fontSize:'12px'}} >{location}</p>
            </li> 

            <li>
                <p style={{fontSize:'12px'}}>{seen}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{status}</p>
            </li> 
        </ul>
    )
}