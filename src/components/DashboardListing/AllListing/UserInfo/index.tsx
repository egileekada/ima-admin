import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({img, property, price, listby, type, date, location, status}:
    {img:string, property:string, price:string, listby:string, type:string, date:string, location:string, status:string}){
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
                <p>{listby}</p>
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
                {status === "" && 
                    <div className=" w-full flex " >
                        <button style={{border: "1px solid #02B449"}} className=" text-[#02B449] p-1 border-[#02B449] w-16 text-sm rounded-2xl " >Approve</button>
                        <button style={{border: "1px solid #EB3223"}} className=" text-[#EB3223] p-1 border-[#EB3223]  w-16 text-sm rounded-2xl ml-1 " >Reject</button>
                    </div> 
                }
                {status === "approve" && (
                    <div className=" w-full flex items-center " >
                        <p className=" text-sm text-[#0984D6] " >Approved</p>
                        <button style={{border: "1px solid #C4CDD5"}} className=" text-[#C4CDD5] p-1 border-[#EB3223]  w-16 text-sm rounded-2xl ml-1 " >Reject</button>
                    </div>
                )}
                {status === "reject" && (
                    <div className=" w-full flex items-center " >
                        <p style={{border: "1px solid #C4CDD5"}} className=" text-sm  rounded-2xl text-[#C4CDD5] p-1 border-[#EB3223]  w-16 " >Approved</p>
                        <p className=" text-[#EB3223] items-center flex text-sm ml-4 " >Rejected
                    
                        </p><button className=" ml-2 " > 
                            <Image src="/images/file.png" width={15} height={15} alt='avatar'/>
                        </button>
                    </div>
                )}
            </li> 
            <li>
                <div className=" flex w-full justify-start " > 
                    <button className={styles.viewButton}>View</button>
                    {status !== '' && (
                        <button className="ml-5" > 
                            <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                        </button>
                    )}
                </div>
            </li>
        </ul>
    )
}