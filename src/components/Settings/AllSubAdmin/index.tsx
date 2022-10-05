import React from 'react'
import { UserInfo } from './UserInfo'
import styles from './index.module.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';
import { BASEURL } from '../../../BasicUrl/Url';
import { getCookie } from 'cookies-next';


export default function NewListing(props: any){ 

    const { isLoading, data } = useQuery(['subadmin'], () =>
        fetch(`${BASEURL.URL}/settings/get-subadmin`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${getCookie("token")}`
            }
        }).then(res =>
            res.json()
        )
    )  

    console.log(data); 

    return(
        <div> 
            <div className={styles.homeBottom}>
                <ul className={styles.bottomHeading}>

                    <li style={{display:'flex', alignItems:'center'}}>
                        <input type='checkbox' style={{marginRight:'10px'}}></input>
                        <p style={{display:'inline'}}>ID</p>
                    </li>
                    
                    <li>
                        <p>User</p>
                    </li>
                    
                    <li>
                        <p>Created</p>
                    </li>

                    <li>
                        <p>Total Commision</p>
                    </li>

                    <li>
                        <p>Last Login</p>
                    </li>

                    <li>
                        <p>Recent Activity</p>
                    </li>
                    
                    <li >
                        <p>Action</p>
                    </li> 
                </ul>
                {!isLoading && (
                    <>
                        {data?.data?.user?.map((item: any, index: any)=> {
                            return(
                                <div key={item._id} > 
                                    <UserInfo click={props} id={index} img={item.avatar ? item.avatar: "/images/profilePics.png"} user={item?.firstName+" "+item?.lastName} amount="N300,000" lasted={new Date(item.lastSeen).toUTCString()}
                                    date={new Date(item.createdAt).toUTCString()}   /> 
                                </div>
                            )
                        })}
                    </>
                )}
            </div>
            <div className=' w-full flex items-center mt-20 ' >
                <p style={{fontFamily: "Poppins", fontWeight: "500", fontSize: "12px"}} className=' ml-auto' >1-2 of items</p>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex justify-center items-center ml-4 ' ><IoIosArrowBack size={15} /></button>
                <button className=' w-7 h-7 rounded bg-[#0984D6] text-white text-xs flex justify-center items-center ml-2 ' >1</button>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex text-xs justify-center items-center ml-2 ' >2</button>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex justify-center items-center ml-4 ' ><IoIosArrowForward size={15} /></button>
            </div>
        </div>
    )
}