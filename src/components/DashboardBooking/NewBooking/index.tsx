import React from 'react'
import { UserInfo } from './UserInfo'
import styles from './index.module.css'
import Image from 'next/image'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import { useQuery } from '@tanstack/react-query';
import { BASEURL } from '../../../BasicUrl/Url';
import { getCookie } from 'cookies-next';

export default function NewListing(){

    const { isLoading, data } = useQuery(['booking'], () =>
        fetch(`${BASEURL.URL}/properties/bookings`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${getCookie("token")}`
            }
        }).then(res =>
            res.json()
    ))

    console.log(data);
    

    return(
        <div> 
        <div  style={{ fontFamily: "Montserrat", fontWeight: "600" }}  className='w-[100%] my-4 overflow-x-auto' >
            <table className='text-xs bg-[#F7F8FA] '>
            <thead style={{background: "#F7F8FA"}}  >
                    <tr className='font-Poppins-Semibold h-14  bg-[#F7F8FA] ' >
                        <td className='w-20 '>
                            <div className=" ml-4 flex w-20 items-center  " > 
                                <input type="checkbox" />
                                <p className="ml-2">ID</p>
                            </div>
                        </td>
                        <td className='w-48 '>
                            <div className=" ml-4 flex w-48 items-center  " > 
                                {/* <input type="checkbox" /> */}
                                <p className="ml-2">User</p>
                            </div>
                        </td>
                        <td className='w-48 '>
                            <div className=" ml-4 flex w-48 items-center  " > 
                                {/* <input type="checkbox" /> */}
                                <p className="ml-2">Property</p>
                            </div>
                        </td>
                        <td className=' w-28'>
                            <p className="w-28 ml-4">Agent</p>
                        </td> 
                        <td className=' w-28'>
                            <p className="w-28">Date</p>
                        </td> 
                        <td className=' w-28'>
                            <p className="w-28 ml-4">Status</p>
                        </td> 
                        <td className=''>
                            <p className="w-28  text-center ">Action</p>
                        </td> 
                    </tr>
                </thead>
                <tbody> 
                    {!isLoading && ( 
                        <>
                            {data.data?.bookings?.map((item: any, index: any)=> {
                                return( 
                                    <tr key={index} className='font-Poppins-Semibold text-xs ' > 
                                        <td className='w-20 bg-white '>
                                            <div className=" ml-4 flex w-20 items-center  " > 
                                                <input type="checkbox" />
                                                <p className="ml-2">{index}</p>
                                            </div>
                                        </td>
                                        <td className='bg-white w-48 '>
                                            <div className="mt-6 ml-4  mb-3 flex items-center " > 
                                                {/* <input type="checkbox" /> */}
                                                <div className={styles.avatar} style={{marginRight:'5px' }}> 
                                                <div className=" w-12 ml-2 mr-2 rounded-lg " >
                                                    <img src={item?.property?.imagesURLs[0]} className='w-full h-12 object-cover rounded-lg' alt="property" />
                                                </div>
                                                </div>
                                                <div className=" ml-1 " >
                                                    <p style={{fontSize:'12px'}}>{item?.property?.name}</p>
                                                    <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>{(item?.property?.price)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                                </div>
                                            </div> 
                                        </td>
                                        <td className='bg-white w-48 '>
                                            <div className="mt-6 ml-4  mb-3 flex items-center " > 
                                                {/* <input type="checkbox" /> */}
                                                <div className={styles.avatar} style={{marginRight:'5px' }}> 
                                                <div className=" w-12 ml-2 mr-2 rounded-lg " >
                                                    <img src={item?.property?.uploadedBy?.imagesURLs ? item?.property?.uploadedBy?.imagesURLs[0]: "/images/profilePics.png"} className='w-full h-12 object-cover rounded-lg' alt="property" />
                                                </div>
                                                </div>
                                                <div className=" ml-1 " >
                                                    <p style={{fontSize:'12px'}}>{item?.property?.uploadedBy?.username}</p>
                                                        <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>{item?.property?.uploadedBy?.email} <div>{item?.property?.uploadedBy?.isVerified && (<img src="/images/Approval.png" className=" w-4 h-4 ml-2 " alt='avatar' />)}</div></p>
                                                </div>
                                            </div> 
                                        </td>
                                        <td className=' w-28 bg-white'>
                                            <p className="w-28 ml-4">Ima Original</p>
                                        </td>

                                        <td className='bg-white  w-28'>
                                            <p className=" mt-1 ">{new Date(item?.createdAt).toUTCString()}</p>
                                        </td>   

                                        <td className=' w-36 bg-white'>
                                            <div className=" w-full ml-4 flex  " >
                                                <button style={{fontSize:'12px', fontFamily: "Montserrat", fontWeight: "600", color: "#EB3223"}}>Cancled</button>
                                                <button style={{fontSize:'12px', color: "#0984D6", fontFamily: "Montserrat", fontWeight: "600",marginLeft: '10px'}}>Reschudle</button>
                                            </div> 
                                        </td> 

                                        <td className='bg-white w-28 '> 
                                            <div className=' w-full flex ' > 
                                                <button className=" mx-auto " > 
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