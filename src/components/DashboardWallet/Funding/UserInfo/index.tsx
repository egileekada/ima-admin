import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({ id,img, user, useremail, type, date, verified, amount, status}:
    {img:string, id:string, user:string, useremail:string, type:string, amount:string, date:string, status:string, verified: boolean}){
    return(
        <ul className={styles.userData}>

            <li style={{display:'flex', alignItems:'center'}}>
                <input type='checkbox' style={{marginRight:'10px'}}></input>
                <div style={{marginRight:'5px'}}>
                    <p style={{fontSize:'12px'}}>{id}</p>
                </div> 
            </li>

            <li style={{display:'flex', alignItems:'center'}}> 
                <div className={styles.avatar} style={{marginRight:'5px', borderRadius:'999px'}}>
                    <div><Image src={img} width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                </div>
                <div className=" ml-1" >
                    <p style={{fontSize:'12px'}}>{user}</p>
                    <p className=" flex justify-center" style={{fontSize:'12px', color:'#90A0B7'}}>{useremail} <div>{verified && (<img src="/images/Approval.png" className=" w-4 h-4 ml-2 " alt='avatar' />)}</div></p>
                </div>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{amount}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{type}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{date}</p>
            </li> 

            <li>
                <p style={{fontSize:'12px'}} className={status === "Completed" ? " text-[#038566] " : status === "Declined" ? " text-[#EB3223] " : " text-[#192A3E] " } >{status}</p>
            </li>
 
            <li>
                <div className=" flex w-full justify-start " > 
                    {/* <button className={styles.viewButton}>View</button>  */}
                    <button className="ml-5" > 
                        <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                    </button> 
                </div>
            </li>
        </ul>
    )
}