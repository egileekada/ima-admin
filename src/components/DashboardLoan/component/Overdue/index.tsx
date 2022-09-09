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
                                <p className="w-28">Principal</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-28">Interest</p>
                            </td>
                            <td className='bg-white'>
                                <p className="w-28">Duration</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28">Repayment</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28">Status</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28">Disbursted</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28">Payment</p>
                            </td>  
                            <td className='bg-white'>
                                <p className="w-28">Method</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 flex justify-center">Next payment</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 flex justify-center">Action</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 flex justify-center">Remark</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28"></p>
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
                                        <p style={{fontSize:'12px'}}>1 bedroom flat"</p>
                                        <p className="mr-auto" style={{fontSize:'12px', color:'#90A0B7'}}>₦300,000</p>
                                    </div>
                                </div> 
                            </td>
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3">N100,000</p>
                            </td>
                            <td className='bg-white'>
                                <p className="mt-6 mb-3 w-28">N10,000</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="mt-6 mb-3 w-28">1 month</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3">N110,000</p>
                            </td>
                            <td className='bg-white'>
                                <div className="mt-6 mb-3 w-28"  > 
                                    <p className=" text-[#038566]  ">Approved</p>
                                    <p className=" mt-1 ">27/08/2022 <br/>2:30pm</p>
                                </div>
                            </td> 
                            <td className='w-28 bg-white'>
                                <div className="w-28  " >
                                    <p className=" text-[#FF333F]" >-N100,000</p>
                                    <p className=" mt-1 ">27/08/2022 <br/>2:30pm</p>
                                </div>
                            </td>  
                            <td className='w-28 bg-white'>
                                <div className="w-28  " >
                                    <p className=" text-[#0984D6]" >N100,000</p>
                                    <p className=" mt-1 ">27/08/2022 <br/>2:30pm</p>
                                </div>
                            </td>   
                            <td className='bg-white'>
                                <div className="mt-6 mb-3 w-28"  > 
                                    <p className="">Bank/transfer</p>
                                    <button className=" flex items-center mt-2 " >
                                    <Image src="/images/file.png" width={20} height={20} alt='avatar' />
                                        <p className=" ml-2">Receipt</p>
                                    </button>
                                </div>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3 flex justify-center">Nil</p>
                            </td> 
                            <td className='bg-white'>
                                <div className="w-28 mt-6 flex flex-col mb-3"> 
                                    <button style={{ border: "1px solid #02B449" }} className=" text-[#02B449] py-2 rounded-full w-full  "  >Approve</button> 
                                    <button style={{ border: "1px solid #EB3223" }} className=" text-[#EB3223] mt-2 py-2 rounded-full w-full  "  >Reject</button> 
                                </div>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 mt-6 flex justify-center text-[#02B449] mb-3">Successful</p>
                            </td> 
                            <td className='bg-white'>
                                    <p className=" text-[#FF333F] w-28 mt-6 flex justify-center mb-3" >Failed</p>
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
                                        <p style={{fontSize:'12px'}}>1 bedroom flat"</p>
                                        <p className="mr-auto" style={{fontSize:'12px', color:'#90A0B7'}}>₦300,000</p>
                                    </div>
                                </div> 
                            </td>
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3">N100,000</p>
                            </td>
                            <td className='bg-white'>
                                <p className="mt-6 mb-3 w-28">N10,000</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="mt-6 mb-3 w-28">1 month</p>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3">N110,000</p>
                            </td>
                            <td className='bg-white'>
                                <div className="mt-6 mb-3 w-28"  > 
                                    <p className=" text-[#038566]  ">Approved</p>
                                    <p className=" mt-1 ">27/08/2022 <br/>2:30pm</p>
                                </div>
                            </td> 
                            <td className='w-28 bg-white'>
                                <div className="w-28  " >
                                    <p className=" text-[#FF333F]" >-N100,000</p>
                                    <p className=" mt-1 ">27/08/2022 <br/>2:30pm</p>
                                </div>
                            </td>  
                            <td className='w-28 bg-white'>
                                <div className="w-28  " >
                                    <p className=" text-[#0984D6]" >N100,000</p>
                                    <p className=" mt-1 ">27/08/2022 <br/>2:30pm</p>
                                </div>
                            </td>   
                            <td className='bg-white'>
                                <div className="mt-6 mb-3 w-28"  > 
                                    <p className="">Bank/transfer</p>
                                    <button className=" flex items-center mt-2 " >
                                    <Image src="/images/file.png" width={20} height={20} alt='avatar' />
                                        <p className=" ml-2">Receipt</p>
                                    </button>
                                </div>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 mt-6 mb-3 flex justify-center">Nil</p>
                            </td> 
                            <td className='bg-white'>
                                <div className="w-28 mt-6 flex flex-col mb-3"> 
                                    <button style={{ border: "1px solid #02B449" }} className=" text-[#02B449] py-2 rounded-full w-full  "  >Approve</button> 
                                    <button style={{ border: "1px solid #EB3223" }} className=" text-[#EB3223] mt-2 py-2 rounded-full w-full  "  >Reject</button> 
                                </div>
                            </td> 
                            <td className='bg-white'>
                                <p className="w-28 mt-6 flex justify-center text-[#02B449] mb-3">Successful</p>
                            </td> 
                            <td className='bg-white'>
                                    <p className=" text-[#FF333F] w-28 mt-6 flex justify-center mb-3" >Failed</p>
                            </td>  
                        </tr>
                    </tbody>
                </table>
            </div>
        </div>
    )
}