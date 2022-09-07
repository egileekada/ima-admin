import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({ id,img, user, useremail, commission, referrees, date}:
    {img:string, id:string, user:string, useremail:string, commission:string, date:string, referrees:string}){
    return(
        <ul className={styles.userData}>

            <li style={{display:'flex', alignItems:'center'}}>
                <input type='checkbox' style={{marginRight:'10px'}}></input>
                <div style={{marginRight:'5px'}}>
                    <p style={{fontSize:'12px'}}>{id}</p>
                </div> 
            </li>

            <li style={{display:'flex', alignItems:'center'}}>
                {/* <input type='checkbox' style={{marginRight:'10px'}}></input> */}
                <div className={styles.avatar} style={{marginRight:'5px', borderRadius:'999px'}}>
                    <div><Image src={img} width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                </div>
                <div className=" ml-1 " >
                    <p style={{fontSize:'12px'}}>{user}</p>
                    <p style={{fontSize:'12px', color:'#90A0B7'}}>{useremail}</p>
                </div>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{referrees}</p>
            </li> 

            <li>
                <p style={{fontSize:'12px'}}>{date}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{commission}</p>
            </li> 
 
            <li>
                <div className=" flex w-full justify-center " > 
                    <button className={styles.viewButton}>View</button>  
                </div>
            </li>
        </ul>
    )
}