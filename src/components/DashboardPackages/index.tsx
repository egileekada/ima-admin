import React from 'react'
import styles from './index.module.css' 
import Image from 'next/image'
import { useQuery } from '@tanstack/react-query'
import { BASEURL } from '../../BasicUrl/Url'
import { getCookie } from 'cookies-next'

export default function Index() {
 
    const [tab, setTab] = React.useState(0) 


    const { isLoading, data } = useQuery(['packages'], () =>
        fetch(`${BASEURL.URL}/packages`, {
            method: 'GET', // or 'PUT'
            headers: {
                'Content-Type': 'application/json', 
                Authorization : `Bearer ${getCookie("token")}`
            }
        }).then(res =>
            res.json()
    ))

    console.log(data);
    
    return (
        <div>
            <div className=' w-full flex mt-14 '>
                <p className={styles.MontserratExtraBold} >Packages</p>
                <div className='ml-auto' style={{width: '258px'}} >
                    <select className='w-full h-11 px-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded ' >
                        <option>Search</option>
                    </select>
                </div>
            </div>
            <div className=" w-full flex overflow-x-auto  " >
                <div className='w-auto mt-6 h-fit flex pb-6' >
                    <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 0 ? ' w-36  ' : ' w-36 border-opacity-50'} >
                        <p className={styles.MontserratSemiBold} >All Packages (10)</p>
                    </button>
                    <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-32  ' : ' w-32 border-opacity-50'} >
                        <p className={styles.MontserratSemiBold} >Current (2)</p>
                    </button>
                    <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 2 ? ' w-20  ' : ' w-20 border-opacity-50'} >
                        <p className={styles.MontserratSemiBold} >Top up(3)</p>
                    </button>
                    <button onClick={()=> setTab(3)} style={tab === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 3 ? ' w-28  ' : ' w-28 border-opacity-50'} >
                        <p className={styles.MontserratSemiBold} >Ended (1)</p>
                    </button>  
                </div>
            </div> 
            {tab === 0 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}}  >
                            <tr className='font-Poppins-Semibold h-14  bg-[#F7F8FA] ' >
                                <td className='w-20 '>
                                    <div className="flex w-20 ml-4 items-center  " > 
                                        <input type="checkbox" /> 
                                        <p className="ml-2">ID</p>
                                    </div>
                                </td> 
                                <td className=' w-48'>
                                    <p className="w-48">Agent</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28 ">Package</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Duration</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Amount</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Date</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Ending In</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Status</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Action</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "600" }} className="text-xs" > 
                             {data?.data?.packages?.map((item: any, index: any)=> {
                                return(
                                    <tr key={index} className='font-Poppins-Semibold text-sm ' >
                                        <td className='w-20 bg-white '>
                                            <div className="flex w-20 ml-4 items-center  " > 
                                                <input type="checkbox" /> 
                                                <p className="ml-2">{index+1}</p>
                                            </div>
                                        </td>
                                        <td className='bg-white w-48 '>
                                            <div className="mt-6 mb-3 flex items-center " > 
                                                <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                                    <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                                </div>
                                                <div className=" ml-1 " >
                                                    <p style={{fontSize:'12px'}}>Ima Original</p>
                                                    <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>@john</p>
                                                </div>
                                            </div> 
                                        </td>
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{item?.name}</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{item.interval}</p>
                                        </td>  
                                        <td className='bg-white w-28'>
                                            <p className="mt-6 mb-3 mx-2">{item?.amount !== "free" && ("N")}{(item?.amount)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{new Date(item.createdAt).toUTCString()}</p>
                                        </td>   
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">3 days</p>
                                        </td>   
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 text-[#02B449] mb-3">Active</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <button className="mt-6 mb-3" > 
                                                <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                                            </button>
                                        </td> 
                                    </tr> 
                                )
                             })}
                        </tbody>
                    </table>
                </div>
            )} 
            {tab === 1 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                    <thead style={{background: "#F7F8FA"}}  >
                            <tr className='font-Poppins-Semibold h-14  bg-[#F7F8FA] ' >
                                <td className='w-20 '>
                                    <div className="flex w-20 ml-4 items-center  " > 
                                        <input type="checkbox" /> 
                                        <p className="ml-2">ID</p>
                                    </div>
                                </td> 
                                <td className=' w-48'>
                                    <p className="w-48">Agent</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28 ">Package</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Duration</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Amount</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Date</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Ending In</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Status</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Action</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "600" }} className="text-xs" > 
                             {data?.data?.packages?.map((item: any, index: any)=> {
                                return(
                                    <tr key={index} className='font-Poppins-Semibold text-sm ' >
                                        <td className='w-20 bg-white '>
                                            <div className="flex w-20 ml-4 items-center  " > 
                                                <input type="checkbox" /> 
                                                <p className="ml-2">{index+1}</p>
                                            </div>
                                        </td>
                                        <td className='bg-white w-48 '>
                                            <div className="mt-6 mb-3 flex items-center " > 
                                                <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                                    <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                                </div>
                                                <div className=" ml-1 " >
                                                    <p style={{fontSize:'12px'}}>Ima Original</p>
                                                    <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>@john</p>
                                                </div>
                                            </div> 
                                        </td>
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{item?.name}</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{item.interval}</p>
                                        </td>  
                                        <td className='bg-white w-28'>
                                            <p className="mt-6 mb-3 mx-2">{item?.amount !== "free" && ("N")}{(item?.amount)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{new Date(item.createdAt).toUTCString()}</p>
                                        </td>   
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">3 days</p>
                                        </td>   
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 text-[#02B449] mb-3">Active</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <button className="mt-6 mb-3" > 
                                                <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                                            </button>
                                        </td> 
                                    </tr> 
                                )
                             })}
                        </tbody>
                    </table>
                </div>
            )} 
            {tab === 2 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}}  >
                            <tr className='font-Poppins-Semibold h-14  bg-[#F7F8FA] ' >
                                <td className='w-20 '>
                                    <div className="flex w-20 ml-4 items-center  " > 
                                        <input type="checkbox" /> 
                                        <p className="ml-2">ID</p>
                                    </div>
                                </td> 
                                <td className=' w-48'>
                                    <p className="w-48">Agent</p>
                                </td>  
                                <td className=''>
                                    <p className="w-28">Amount</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Date</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Status</p>
                                </td>  
                                <td className=''>
                                    <p className="w-28">Action</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "600" }} className="text-xs" > 
                             {data?.data?.packages?.map((item: any, index: any)=> {
                                return(
                                    <tr key={index} className='font-Poppins-Semibold text-sm ' >
                                        <td className='w-20 bg-white '>
                                            <div className="flex w-20 ml-4 items-center  " > 
                                                <input type="checkbox" /> 
                                                <p className="ml-2">{index+1}</p>
                                            </div>
                                        </td>
                                        <td className='bg-white w-48 '>
                                            <div className="mt-6 mb-3 flex items-center " > 
                                                <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                                    <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                                </div>
                                                <div className=" ml-1 " >
                                                    <p style={{fontSize:'12px'}}>Ima Original</p>
                                                    <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>@john</p>
                                                </div>
                                            </div> 
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <p className="mt-6 mb-3 mx-2">{item?.amount !== "free" && ("N")}{(item?.amount)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{new Date(item.createdAt).toUTCString()}</p>
                                        </td>   
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 text-[#02B449] mb-3">Active</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <button className="mt-6 mb-3" > 
                                                <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                                            </button>
                                        </td> 
                                    </tr> 
                                )
                             })}
                        </tbody>
                    </table>
                </div>
            )} 
            {tab === 3 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}}  >
                            <tr className='font-Poppins-Semibold h-14  bg-[#F7F8FA] ' >
                                <td className='w-20 '>
                                    <div className="flex w-20 ml-4 items-center  " > 
                                        <input type="checkbox" /> 
                                        <p className="ml-2">ID</p>
                                    </div>
                                </td> 
                                <td className=' w-48'>
                                    <p className="w-48">Agent</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28 ">Package</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Duration</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Amount</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Date</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Ending In</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Status</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Action</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "600" }} className="text-xs" > 
                             {data?.data?.packages?.map((item: any, index: any)=> {
                                return(
                                    <tr key={index} className='font-Poppins-Semibold text-sm ' >
                                        <td className='w-20 bg-white '>
                                            <div className="flex w-20 ml-4 items-center  " > 
                                                <input type="checkbox" /> 
                                                <p className="ml-2">{index+1}</p>
                                            </div>
                                        </td>
                                        <td className='bg-white w-48 '>
                                            <div className="mt-6 mb-3 flex items-center " > 
                                                <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                                    <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                                </div>
                                                <div className=" ml-1 " >
                                                    <p style={{fontSize:'12px'}}>Ima Original</p>
                                                    <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>@john</p>
                                                </div>
                                            </div> 
                                        </td>
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{item?.name}</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{item.interval}</p>
                                        </td>  
                                        <td className='bg-white w-28'>
                                            <p className="mt-6 mb-3 mx-2">{item?.amount !== "free" && ("N")}{(item?.amount)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">{new Date(item.createdAt).toUTCString()}</p>
                                        </td>   
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 mb-3">3 days</p>
                                        </td>   
                                        <td className='bg-white w-28'>
                                            <p className="w-28 mt-6 text-[#02B449] mb-3">Active</p>
                                        </td> 
                                        <td className='bg-white w-28'>
                                            <button className="mt-6 mb-3" > 
                                                <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                                            </button>
                                        </td> 
                                    </tr> 
                                )
                             })}
                        </tbody>
                    </table>
                </div>
            )} 
        </div>
    )
}
