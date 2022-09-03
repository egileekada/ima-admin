import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({img, property, price, account, agent, loan, type, date, location, status}:
    {img:string, property:string, price:string, account:string, agent:string, loan:string, type:string, date:string, location:string, status:string}){
    return(
        <ul className={styles.userData}>

            <li style={{display:'flex', alignItems:'center'}}>
                <input type='checkbox' style={{marginRight:'10px'}}></input>
                <div className={styles.avatar} style={{marginRight:'5px'}}>
                    <div><Image src={img} width={48} height={48} alt='avatar' style={{borderRadius:'8px'}}/></div>
                </div>
                <div className=" ml-1 flex flex-col justify-start " >
                    <p style={{fontSize:'12px'}}>{property}</p>
                    <p className="mr-auto" style={{fontSize:'12px', color:'#90A0B7'}}>₦{price}</p>
                </div>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{account}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{agent}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{location}</p>
            </li>  

            <li>
                <p style={{fontSize:'12px'}} className={type === "Buy" ? " bg-[#FF333F1A] text-[#EB3223] w-11 rounded-lg mx-auto ":"bg-[#0984D61A] text-[#0984D6] w-11 rounded-lg mx-auto "} >{type}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{date}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}} className='mx-auto' >{loan === "" ? 'Nill' : <p className=" underline text-[#0984D6] text-center " style={{fontSize:'12px'}} >{loan}</p>}</p>
            </li> 

            <li>
                <p style={{fontSize:'12px'}}  className='mx-auto' >{status === "Active" ? <>{status}</>: <p className=" underline text-[#0984D6] " style={{fontSize:'12px'}} >{status}</p>  }</p>
            </li> 

            <li  className=' flex items-center justify-center ' >
                <button className={styles.viewButton}>View</button>
            </li>
        </ul>
    )
}