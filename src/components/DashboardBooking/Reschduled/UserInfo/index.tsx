import React from "react"
import Image from 'next/image'
import styles from './index.module.css'


export function UserInfo({ id,img, user, useremail, propertyimg, property, date, verified, amount, agent}:
    {img:string, id:string, user:string, useremail:string, propertyimg:string, property:string, amount:string, date:string, agent:string, verified: boolean}){
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

            <li style={{display:'flex', alignItems:'center'}}>
                {/* <input type='checkbox' style={{marginRight:'10px'}}></input> */}
                <div className={styles.avatar} style={{marginRight:'5px', borderRadius:'8px'}}>
                    <div><Image src={propertyimg} width={48} height={48} alt='avatar' style={{borderRadius:'8px'}}/></div>
                </div>
                <div className=" ml-1 " >
                    <p style={{fontSize:'12px'}}>{property}</p>
                    <p style={{fontSize:'12px', color:'#90A0B7'}}>₦{amount}</p>
                </div>
            </li>

            <li>
                <p style={{fontSize:'12px'}}>{agent}</p>
            </li> 

            <li>
                <p style={{fontSize:'12px'}}>{date}</p>
            </li> 

            <li className=" w-full flex items-center justify-center " >
                {/* <button style={{fontSize:'12px', fontFamily: "Montserrat", fontWeight: "600", color: "#EB3223"}}>Cancled</button> */}
                <button style={{fontSize:'12px', color: "#0984D6", fontFamily: "Montserrat", fontWeight: "600"}}>Reschudle</button>
            </li> 

            <li> 
                <button className=" w-full flex justify-center" > 
                    <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                </button>
            </li> 
        </ul>
    )
}