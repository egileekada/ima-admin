import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({ id,img, user, useremail, bankdetail, date, verified, amount}:
    {img:string, id:string, user:string, useremail:string, bankdetail:string, amount:string, date:string, verified: boolean}){
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
                <p style={{fontSize:'12px'}}>{bankdetail}</p>
            </li>
 
            <li>
                {/* <p className={status==='Verified Agent' ? styles.verified1 : styles.verified2}>{status}</p> */}
                <div className=" w-full flex " >
                <button style={{border: "1px solid #02B449"}} className=" text-[#02B449] p-1 border-[#02B449] w-16 text-sm rounded-2xl " >Approve</button>
                <button style={{border: "1px solid #EB3223"}} className=" text-[#EB3223] p-1 border-[#EB3223]  w-16 text-sm rounded-2xl ml-1 " >Reject</button>
                </div>
            </li> 
        </ul>
    )
}