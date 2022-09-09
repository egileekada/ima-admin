import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({ click, id,img, user, useremail, phone, email, seen, date, location, status}:
    {click: any,img:string, id:string, user:string, useremail:string, phone:string, email:string, date:string, seen:string, location:string, status:string}){
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
                    <p style={{fontSize:'12px', color:'#90A0B7'}}>{useremail}</p>
                </div>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{phone}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{email}</p>
            </li>  

            <li>
                <p style={{fontSize:'12px'}} >{location}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{date}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{seen}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{status}</p>
            </li>
 
            <li>
                <div className=" flex w-full justify-start " > 
                    <button onClick={()=> click.click(true)} className={styles.viewButton}>View</button> 
                    <button className="ml-5" > 
                        <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                    </button> 
                </div>
            </li>
        </ul>
    )
}