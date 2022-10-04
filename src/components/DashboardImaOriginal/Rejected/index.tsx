import React from 'react'
import { UserInfo } from './UserInfo'
import styles from './index.module.css'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'
import { BASEURL } from '../../../BasicUrl/Url'
import { useQuery } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import Image from 'next/image'
import Router from 'next/router'
import { DeleteProperty } from '../../Modals/deleteProperty'

export default function NewListing(){

    const [showDelete, setshowDelete] = React.useState(false)
    const [index, setIndex] = React.useState('');
    const { isLoading, data } = useQuery(['properties'], () =>
    fetch(`${BASEURL.URL}/properties`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json', 
            Authorization : `Bearer ${getCookie("token")}`
        }
    }).then(res =>
        res.json()
    )
    )  

    return(
        <div>  
            <div  style={{ fontFamily: "Montserrat", fontWeight: "600" }}  className='w-[100%] my-4 overflow-x-scroll' >
                <table className='text-xs bg-[#F7F8FA] '>
                <thead style={{background: "#F7F8FA"}}  >
                        <tr className='font-Poppins-Semibold h-14  bg-[#F7F8FA] ' >
                            <td className='w-48 '>
                                <div className=" ml-4 flex w-48 items-center  " > 
                                    <input type="checkbox" />
                                    <p className="ml-2">Property</p>
                                </div>
                            </td>
                            <td className=' w-28'>
                                <p className="w-28">Account</p>
                            </td> 
                            <td className=' w-28'>
                                <p className="w-28">Agent</p>
                            </td> 
                            <td className=''>
                                <p className="w-28">Location</p>
                            </td>
                            <td className=''>
                                <p className="w-28 flex justify-center">Type</p>
                            </td> 
                            <td className=''>
                                <p className="w-28  ml-2">Date</p>
                            </td> 
                            <td className=''>
                                <p className="w-48 ml-4">Action</p>
                            </td> 
                            <td className=''>
                                <p className="w-28  ml-2"></p>
                            </td>  
                        </tr>
                    </thead>
                    <tbody> 
                        {!isLoading && ( 
                            <>
                                {data.data?.properties?.filter((item: any)=> item.imaOriginal )?.filter((item: any)=> item.status === "declined")?.map((item: any, index: any)=> {
                                    return( 
                                        <tr key={index} className='font-Poppins-Semibold text-xs ' > 
                                            <td className='bg-white w-48 '>
                                                <div className="mt-6 ml-4  mb-3 flex items-center " > 
                                                    <input type="checkbox" />
                                                    <div className={styles.avatar} style={{marginRight:'5px' }}> 
                                                    <div className=" w-12 ml-2 mr-2 rounded-lg " >
                                                        <img src={item?.imagesURLs[0]} className='w-full h-12 object-cover rounded-lg' alt="property" />
                                                    </div>
                                                    </div>
                                                    <div className=" ml-1 " >
                                                        <p style={{fontSize:'12px'}}>{item?.name}</p>
                                                        <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>{(item?.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                                    </div>
                                                </div> 
                                            </td>
                                            <td className='bg-white'>
                                                <p className="w-28 mt-6 mb-3">Ima Original</p>
                                            </td>
                                            <td className='bg-white'>
                                                <p className="w-28 mt-6 mb-3">{item?.uploadedBy?.username}</p>
                                            </td>
                                            <td className='bg-white w-28 relative '>
                                                <p className="mt-6 mb-3 w-fit ">{item?.location?.address+", "+item?.location?.city+", "+item?.location?.state}</p>
                                            </td>  
                                            <td className='bg-white mt-6 mb-3 ml-2 w-28'>
                                                <p style={{fontSize:'12px'}} className={item?.type === "Buy" ? " bg-[#FF333F1A] text-[#EB3223] w-11 py-1 flex justify-center rounded-lg mx-auto ":"bg-[#0984D61A] flex justify-center  text-[#0984D6] py-1  w-11 rounded-lg mx-auto "} >{item?.type}</p>
                                                {/* <p className=" mt-6 mb-3 ml-2 w-28">{item?.location?.address+", "+item?.location?.city+", "+item?.location?.state}</p> */}
                                            </td> 
                                            <td className='bg-white  w-28'>
                                                <p className=" mt-1 ">{new Date(item?.createdAt).toUTCString()}</p>
                                            </td> 
                                            <td  className='bg-white  w-48'>
                                                <div className=' ml-4 ' > 
                                                    {/* {status === "" && 
                                                        <div className=" w-full flex " >
                                                            <button style={{border: "1px solid #02B449"}} className=" text-[#02B449] p-1 border-[#02B449] w-24 text-sm rounded-2xl " >Approve</button>
                                                            <button style={{border: "1px solid #EB3223"}} className=" text-[#EB3223] p-1 border-[#EB3223]  w-24 text-sm rounded-2xl ml-1 " >Reject</button>
                                                        </div> 
                                                    } */}
                                                    {/* {status === "approve" && ( */}
                                                        {/* <div className=" w-full flex items-center " >
                                                            <p className=" text-sm text-[#0984D6] " >Approved</p>
                                                            <button style={{border: "1px solid #C4CDD5"}} className=" text-[#C4CDD5] p-1 border-[#EB3223]  w-16 text-sm rounded-2xl ml-1 " >Reject</button>
                                                        </div>
                                                    // )}
                                                    // {status === "reject" && ( */}
                                                        <div className=" w-full flex items-center " >
                                                            <p style={{border: "1px solid #C4CDD5"}} className=" text-sm  rounded-2xl text-[#C4CDD5] p-1 border-[#EB3223]  w-24 " >Approved</p>
                                                            <p className=" text-[#EB3223] items-center flex text-sm ml-4 " >Rejected
                                                        
                                                            </p><button className=" ml-2 " > 
                                                                <Image src="/images/file.png" width={15} height={15} alt='avatar'/>
                                                            </button>
                                                        </div>
                                                    {/* )}     */}
                                                </div>
                                            </td> 
                                            <td className='bg-white  w-28'> 
                                                <div className=" text-[#0984D6] ml-4 flex w-full justify-start " > 
                                                    <button onClick={()=> {localStorage.setItem("propertyId", item._id), Router.push("/detail")}}  className={styles.viewButton}>View</button>
                                                    
                                                    <button onClick={()=> [setshowDelete((prev) => !prev), setIndex(item._id)]} className="ml-5" > 
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
            {showDelete &&  
                <DeleteProperty show={true} handleDelete={setshowDelete} click={index}/>}
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