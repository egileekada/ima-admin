import React from "react";
import Image from 'next/image'
import styles from '../../index.module.css'

export default function Index(){

    let verified = true

    return( 
        <div className=" w-full overflow-x-hidden medium " > 
            <div style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='w-[100%] my-14 overflow-x-scroll' >
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
                                <p className="w-48">Loan Property</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-28">Loan Amt</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-28">Duration</p>
                            </td>   
                            <td className='bg-white'>
                                <p className="w-28">Repayment</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28">Due date</p>
                            </td>   
                            <td className='bg-white'>
                                <p className="w-28">Document</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 flex justify-center">Action</p>
                            </td> 
                        </tr>
                    </thead>
                    <tbody> 
                        <tr className='font-Poppins-Semibold text-xs ' >
                            <td className='w-24 bg-white'>
                                <div className=" mt-6 mb-3 flex items-center" > 
                                    <input type="checkbox" />
                                    <p className="ml-2">001</p>
                                </div>
                            </td>
                            <td className='bg-white w-48 '>
                                <div className="mt-6 mb-3 flex items-center " > 
                                    <div className={styles.avatar} style={{marginRight:'5px', borderRadius:'999px'}}>
                                        <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                    </div>
                                    <div className=" ml-1 " >
                                        <p style={{fontSize:'12px'}}>John Emmanuel</p>
                                        <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>@john <div>{verified && (<img src="/images/Approval.png" className=" w-4 h-4 ml-2 " alt='avatar' />)}</div></p>
                                    </div>
                                </div> 
                            </td>
                            <td className='bg-white w-48 '>
                                <div className=" mt-6 mb-3 flex items-center " >
                                    <div className={styles.avatar} style={{marginRight:'5px'}}>
                                        <div><Image src="/images/building.png" width={48} height={48} alt='avatar' style={{borderRadius:'8px'}}/></div>
                                    </div>
                                    <div className=" ml-1 flex flex-col justify-start " >
                                        <p style={{fontSize:'12px'}}>1 bedroom flat</p>
                                        <p className="mr-auto" style={{fontSize:'12px', color:'#90A0B7'}}>₦300,000</p>
                                    </div>
                                </div> 
                            </td>
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3">N100,000</p>
                            </td>
                            <td className='bg-white'>
                                <p className="mt-6 mb-3 w-28">1 month</p>
                            </td>  
                            <td className='bg-white'>
                                <p className=" mt-6 mb-3 w-28">N110,000</p>
                            </td> 
                            <td className='bg-white'>
                                <p className=" mt-1 ">27/08/2022 <br/>2:30pm</p>
                            </td>  
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3 text-[#0984D6] cursor-pointer ">See details</p>
                            </td> 
                            <td className='bg-white'>
                                <div className="w-28 flex justify-center mt-6 mb-3"> 
                                    {/* <button style={{ border: "1px solid #02B449" }} className=" text-[#02B449] py-2 rounded-full w-full  "  >Approve</button>  */}
                                    <button className=" text-[#EB3223] py-2 rounded-full ml-3 w-full  "  >Reject</button> 
                                </div>
                            </td> 
                        </tr> 
                        <tr className='font-Poppins-Semibold text-xs ' >
                            <td className='w-24 bg-white'>
                                <div className=" mt-6 mb-3 flex items-center" > 
                                    <input type="checkbox" />
                                    <p className="ml-2">001</p>
                                </div>
                            </td>
                            <td className='bg-white w-48 '>
                                <div className="mt-6 mb-3 flex items-center " > 
                                    <div className={styles.avatar} style={{marginRight:'5px', borderRadius:'999px'}}>
                                        <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                    </div>
                                    <div className=" ml-1 " >
                                        <p style={{fontSize:'12px'}}>John Emmanuel</p>
                                        <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>@john <div>{verified && (<img src="/images/Approval.png" className=" w-4 h-4 ml-2 " alt='avatar' />)}</div></p>
                                    </div>
                                </div> 
                            </td>
                            <td className='bg-white w-48 '>
                                <div className=" mt-6 mb-3 flex items-center " >
                                    <div className={styles.avatar} style={{marginRight:'5px'}}>
                                        <div><Image src="/images/building.png" width={48} height={48} alt='avatar' style={{borderRadius:'8px'}}/></div>
                                    </div>
                                    <div className=" ml-1 flex flex-col justify-start " >
                                        <p style={{fontSize:'12px'}}>1 bedroom flat</p>
                                        <p className="mr-auto" style={{fontSize:'12px', color:'#90A0B7'}}>₦300,000</p>
                                    </div>
                                </div> 
                            </td>
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3">N100,000</p>
                            </td>
                            <td className='bg-white'>
                                <p className="mt-6 mb-3 w-28">1 month</p>
                            </td>  
                            <td className='bg-white'>
                                <p className=" mt-6 mb-3 w-28">N110,000</p>
                            </td> 
                            <td className='bg-white'>
                                <p className=" mt-1 ">27/08/2022 <br/>2:30pm</p>
                            </td>  
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3 text-[#0984D6] cursor-pointer ">See details</p>
                            </td> 
                            <td className='bg-white'>
                                <div className="w-28 flex justify-center mt-6 mb-3"> 
                                    {/* <button style={{ border: "1px solid #02B449" }} className=" text-[#02B449] py-2 rounded-full w-full  "  >Approve</button>  */}
                                    <button className=" text-[#EB3223] py-2 rounded-full ml-3 w-full  "  >Reject</button> 
                                </div>
                            </td> 
                        </tr> 
                    </tbody>
                </table>
            </div>
        </div>
    )
}