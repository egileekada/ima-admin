import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({ id,img, user, useremail, type, date, verified, amount, status}:
    {img:string, id:string, user:string, useremail:string, type:string, amount:string, status:string, date:string, verified: boolean}){
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
                <div className=" ml-1" >
                    <p style={{fontSize:'12px'}}>{user}</p>
                    <p className=" justify-center flex " style={{fontSize:'12px', color:'#90A0B7'}}>{useremail} <div>{verified && (<img src="/images/Approval.png" className=" w-4 h-4 ml-2 " alt='avatar' />)}</div></p>
                </div>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{amount}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{date}</p>
            </li>  

            <li>
                <p style={{fontSize:'12px'}}>{type}</p>
            </li>  

            <li>
                <p style={{fontSize:'12px'}} className={status === "Successful" ? "text-[#02B449]" : status === "Failed" ? "text-[#EB3223]" : "text-[#0984D6]" } >{status}</p>
            </li> 

        </ul>
    )
}