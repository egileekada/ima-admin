import React from 'react'
import { UserInfo } from './UserInfo'
import styles from './index.module.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';
import { BASEURL } from '../../../BasicUrl/Url';
import { getCookie } from 'cookies-next';
import Image from 'next/image'
import { verify } from 'crypto';


export default function NewListing(props: any){ 

    const { isLoading, data } = useQuery(['Users'], () =>
        fetch(`${BASEURL.URL}/users`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${getCookie("token")}`
            }
        }).then(res =>
            res.json()
        )
    )  


    let verified = true 

    return(
        <div> 

            <div  style={{ fontFamily: "Montserrat", fontWeight: "600" }}  className='w-[100%] my-14 overflow-x-scroll' >
                <table className='text-xs bg-[#F7F8FA] '>
                    <thead style={{background: "#F7F8FA"}} >
                        <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                            <td className='w-24 bg-white'>
                                <div className="flex w-24 items-center  " > 
                                    <input type="checkbox" />
                                    <p className="ml-2">ID</p>
                                </div>
                            </td>
                            <td className='bg-white w-48'>
                                <p className="w-48">User</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28">Phone</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-28">Email</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28  ml-2">Address</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28">Date joined</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28  ml-2">Last seen</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28">Status</p>
                            </td>  
                            <td className='bg-white'>
                                <p className="w-28 flex justify-stat">Action</p>
                            </td> 
                        </tr>
                    </thead>
                    <tbody> 
                        {!isLoading && ( 
                            <>
                                {data.data?.users.map((item: any, index: any)=> {
                                    return( 
                                        <tr className='font-Poppins-Semibold text-xs ' >
                                            <td className='w-24 bg-white'>
                                                <div className=" mt-6 mb-3 flex items-center" > 
                                                    <input type="checkbox" />
                                                    <p className="ml-2">{index+1}</p>
                                                </div>
                                            </td> 
                                            <td className='bg-white w-48 '>
                                                <div className="mt-6 mb-3 flex items-center " > 
                                                    <div className={styles.avatar} style={{marginRight:'5px', borderRadius:'999px'}}>
                                                        <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                                    </div>
                                                    <div className=" ml-1 " >
                                                        <p style={{fontSize:'12px'}}>{item.username}</p>
                                                        <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>@john <div>{verified && (<img src="/images/Approval.png" className=" w-4 h-4 ml-2 " alt='avatar' />)}</div></p>
                                                    </div>
                                                </div> 
                                            </td>
                                            <td className='bg-white'>
                                                <p className="w-28 mt-6 mb-3"></p>
                                            </td>
                                            <td className='bg-white w-28 relative '>
                                                <p className="mt-6 mb-3 w-fit ">{item.email}</p>
                                            </td>  
                                            <td className='bg-white'>
                                                <p className=" mt-6 mb-3 ml-2 w-28">{item?.location?.address+", "+item?.location?.city+", "+item?.location?.state}</p>
                                            </td> 
                                            <td className='bg-white  w-28'>
                                                <p className=" mt-1 ">{new Date(item?.createdAt).toUTCString()}</p>
                                            </td> 
                                            <td className='bg-white'>
                                                <p className=" mt-6 mb-3 ml-2 w-28">Not paid</p>
                                            </td>    
                                            <td className='bg-white'>
                                                <p className="w-28 mt-6 mb-3">Pending</p>
                                            </td> 
                                            <td className='bg-white'> 
                                                <div className=" flex w-full justify-start " > 
                                                    <button onClick={()=> props.click(true)} className={styles.viewButton}>View</button> 
                                                    <button className="ml-5" > 
                                                        <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                                                    </button> 
                                                </div>
                                            </td> 
                                        </tr>
                                    )
                                })}
                            </>
                        )}
                    </tbody>
                </table>
            </div>
            <div className={styles.homeBottom}> 

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