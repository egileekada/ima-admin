import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({img, property, price, account, agent, type, date, location, status}:
    {img:string, property:string, price:string, account:string, agent:string, type:string, date:string, location:string, status:string}){
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
                <p style={{fontSize:'12px'}} className={type === "Buy" ? " bg-[#FF333F1A] text-[#EB3223] w-11 rounded-lg mx-auto text-sm ":"bg-[#0984D61A] text-sm text-[#0984D6] w-11 rounded-lg mx-auto "} >{type}</p>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{date}</p>
            </li>

            <li  >
                {/* <p className={status==='Verified Agent' ? styles.verified1 : styles.verified2}>{status}</p> */}
                <div className=" w-full flex items-center " >
                <p style={{border: "1px solid #C4CDD5"}} className=" text-sm  rounded-2xl text-[#C4CDD5] p-1 border-[#EB3223]  w-16 " >Approved</p>
                <p className=" text-[#EB3223] items-center flex text-sm ml-1 " >Rejected
                
                    <button className=" ml-2 " > 
                        <Image src="/images/file.png" width={13} height={13} alt='avatar'/>
                    </button></p>
                </div>
            </li> 
            <li>
                <div className=" flex w-full justify-start " > 
                    <button className={styles.viewButton}>View</button>
                    <button className="ml-5" > 
                        <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                    </button>
                </div>
            </li>
        </ul>
    )
}