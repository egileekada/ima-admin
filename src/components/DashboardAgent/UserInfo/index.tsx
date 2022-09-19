import React from "react";
import Image from 'next/image'

export default function Index(){

    const [tab, setTab] = React.useState(0)
    return(
        <div>
            <div style={{border: "1px solid #D4D4D4", fontFamily: "Inter", fontWeight: "400" }} className=" w-full flex p-4 text-sm rounded-xl my-8 " >
                <img src="/images/avatar.svg" className=" w-36 h-36 rounded-lg my-auto " alt="avatar" />
                <div className=" ml-3 w-full border-r pr-3 " >
                    <div className=" my-1 flex " >
                        <p className=" w-28 text-[#575C76] " >Full Name:</p>
                        <p className="text-[#8388A2]" >Husen Seid</p>
                    </div>
                    <div className=" my-1 flex " >
                        <p className=" w-28 text-[#575C76] " >User name:</p>
                        <p className="text-[#8388A2]" >seaid23</p>
                    </div>
                    <div className=" my-1 flex " >
                        <p className=" w-28 text-[#575C76] " >Phone:</p>
                        <p className="text-[#8388A2]" >08075691234</p>
                    </div>
                    <div className=" my-1 flex " >
                        <p className=" w-28 text-[#575C76] " >Email</p>
                        <p className="text-[#8388A2]" >husenseid@gmail.com</p>
                    </div>
                    <div className=" my-1 flex " >
                        <p className=" w-28 text-[#575C76] " >Address:</p>
                        <div className=" flex flex-col text-[#8388A2]" >
                            <div className="flex items-center" > 
                                Nigeria <div className=" bg-[#666666] rounded-full mx-2 " style={{  width: "3px", height: "3px"}} /> 
                                Rivers <div className=" bg-[#666666] rounded-full mx-2 " style={{  width: "3px", height: "3px"}} /> 
                                Obio/Apkor 
                            </div>
                            <div className="flex items-center" >
                                Port Harcourt <div className=" bg-[#666666] rounded-full mx-2 " style={{  width: "3px", height: "3px"}} /> 
                                15 Ada George
                            </div>
                        </div>
                    </div>
                    <div className=" my-1 flex " >
                        <p className=" w-28 text-[#575C76] " >Joined</p>
                        <p className="text-[#8388A2]" >29/09/2022 2:30pm</p>
                    </div>
                    <div className=" my-1 flex " >
                        <p className=" w-28 text-[#575C76] " >Status:</p>
                        <div className=" flex items-center " >
                            <div className=" bg-[#00D68F] rounded-full " style={{  width: "10px", height: "10px"}} /> 
                            <p className="text-[#8388A2] ml-3" >Online</p>
                        </div>
                    </div>
                </div>
                <div className=" pl-3 p-2  " > 
                    <p className=" text-[#575C76] " >Bio</p>
                    <p className=" text-[#575C76] mt-2 " >Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci temporibus officia natus accusamus consequuntur, error repellat blanditiis rerum.</p>
                </div>
            </div>


            <div style={{border: "1px solid #D4D4D4", fontFamily: "Inter", fontWeight: "400" }} className=" w-full flex p-8 px-4 text-sm rounded-xl my-8 " >
                <div className=" w-fit mx-6 " >
                    <p className=" text-sm " >Identification</p>
                    <img src="/images/National.png" alt="green" className=" w-52 h-auto mt-6 " />
                </div>
                <div className=" w-fit mx-6 " >
                    <p className=" text-sm " >Identification</p>
                    <img src="/images/verifiedphoto.png" alt="green" className=" w-44 h-auto mt-6 " />
                </div>
                <div className=" w-fit mx-6 " >
                    <p className=" text-sm " >Identification</p>
                    <img src="/images/verifiedphoto.png" alt="green" className=" w-44 h-auto mt-6 " />
                </div> 
            </div>

            <div className=' w-full grid grid-cols-6 py-7 ' > 
                <div className=' bg-[#FF953333] flex items-center flex-col p-2  px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open4.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#FF9533", fontSize: "15px"}} >Messages</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "11px"}} >3</p>
                </div> 
            </div> 

            <div className='w-full mt-6 h-fit flex pb-6' >
                <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 0 ? ' w-28  ' : ' w-28 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "15px"}} >Property</p>
                </button>
                <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-28  ' : ' w-28 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "15px"}} >Booking</p>
                </button>
                <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 2 ? ' w-28  ' : ' w-28 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "15px"}} >Messages</p>
                </button>
                <button onClick={()=> setTab(3)} style={tab === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 3 ? ' w-24  ' : ' w-24 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "15px"}} >Referral</p>
                </button> 
                <button onClick={()=> setTab(4)} style={tab === 4 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 4 ? ' w-14  ' : ' w-14 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "15px"}} >Loan</p>
                </button> 
                <button onClick={()=> setTab(5)} style={tab === 5 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 5 ? ' w-32  ' : ' w-32 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "15px"}} >Transactions</p>
                </button> 
                <button onClick={()=> setTab(6)} style={tab === 6 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 6 ? ' w-32  ' : ' w-32 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "15px"}} >Bank Deposit</p>
                </button> 
            </div>
            {tab === 0 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}} >
                            <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                                <td className='w-10 bg-white'>
                                    <div className="flex w-10 items-center  " > 
                                        <input type="checkbox" /> 
                                    </div>
                                </td>
                                <td className='bg-white w-48'>
                                    <p className="w-48">Buy</p>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28">Agent</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Location</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28">Type</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28">Date</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28">Loan</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28">Status</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28">Action</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-10 bg-white'>
                                    <div className="flex w-10 items-center  " > 
                                        <input type="checkbox" /> 
                                    </div>
                                </td>
                                <td className='bg-white w-48 '>
                                    <div className="mt-6 mb-3 flex items-center " > 
                                        <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                            <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                        </div>
                                        <div className=" ml-1 " >
                                            <p style={{fontSize:'12px'}}>1 bedroom flat</p>
                                            <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>350,000</p>
                                        </div>
                                    </div> 
                                </td>
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">Husien Sied</p>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">East West Road, Port Harcourt, Rivers state</p>
                                </td>  
                                <td className='bg-white w-28'>
                                    <p className="mt-6 mb-3 flex justify-center mx-2 rounded-lg text-[#EB3223] bg-[#FF333F1A] px-2  h-5 ">Rented</p>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">27/08/2022 2:30pm</p>
                                </td>   
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">Nil</p>
                                </td>   
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">Active</p>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3 text-[#0984D6s] ">View</p>
                                </td> 
                            </tr>  
                        </tbody>
                    </table>
                </div>
            )}
            {tab === 1 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}} >
                            <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">ID</p> 
                                    </div>
                                </td>
                                <td className='bg-white w-48'>
                                    <p className="w-48">Agent</p>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28">Property</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Date</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28">Action</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">001</p> 
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
                                <td className='bg-white w-48 '>
                                    <div className="mt-6 mb-3 flex items-center " > 
                                        <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                            <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                        </div>
                                        <div className=" ml-1 " >
                                            <p style={{fontSize:'12px'}}>1 bedroom flat</p>
                                            <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>350,000</p>
                                        </div>
                                    </div> 
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">27/08/2022 2:30pm</p>
                                </td>    
                                <td className='bg-white w-28'>
                                    <button className="" > 
                                        <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                                    </button>
                                </td> 
                            </tr>  
                        </tbody>
                    </table>
                </div>
            )}
            {tab === 2 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}} >
                            <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">ID</p> 
                                    </div>
                                </td>
                                <td className='bg-white w-full'>
                                    <p className="w-full">Message</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Date</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28">Action</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">001</p> 
                                    </div>
                                </td> 
                                <td className='bg-white w-full'>
                                    <p className="w-full mt-6 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </p>
                                </td>    
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">27/08/2022 2:30pm</p>
                                </td>    
                                <td className='bg-white w-28'>
                                    <button className="" > 
                                        <Image src="/images/trash.png" width={11.67} height={15} alt='avatar'/>
                                    </button>
                                </td> 
                            </tr>  
                        </tbody>
                    </table>
                </div>
            )}
            {tab === 3 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}} >
                            <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">ID</p> 
                                    </div>
                                </td>
                                <td className='bg-white w-48'>
                                    <p className="w-48">Referrees</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Date</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28">Total Commision</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">001</p> 
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
                                    <p className="w-28 mt-6 mb-3">27/08/2022 2:30pm</p>
                                </td>    
                                <td className='bg-white w-28'> 
                                    <p className="w-28 mt-6 mb-3">N300,000</p>
                                </td> 
                            </tr>  
                        </tbody>
                    </table>
                </div>
            )}
            {tab === 4 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}} >
                            <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                                <td className='w-10 bg-white'>
                                    <div className="flex w-10 items-center  " > 
                                        <input type="checkbox" /> 
                                    </div>
                                </td>
                                <td className='bg-white w-48'>
                                    <p className="w-48 ">Loan Property</p>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28">Loan Amt</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 ">Duration</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 ">Status</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 ">Repayment</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 ">Due date</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 ">Payment status</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 ">Paid</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-40 ">Method</p>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 ">Next payment</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-36 ">Action</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-10 bg-white'>
                                    <div className="flex w-10 items-center  " > 
                                        <input type="checkbox" /> 
                                    </div>
                                </td>
                                <td className='bg-white w-48  '>
                                    <div className="mt-6 mb-3 flex items-center " > 
                                        <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                            <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                        </div>
                                        <div className=" ml-1 " >
                                            <p style={{fontSize:'12px'}}>1 bedroom flat</p>
                                            <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>350,000</p>
                                        </div>
                                    </div> 
                                </td>
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">N100,000</p>
                                </td> 
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">1 month</p>
                                </td>  
                                <td className='bg-white w-28 '> 
                                    <div className=" w-28 mt-6 mb-3" >
                                        <p className=" text-[#038566] " >Approved</p>
                                        <p className="">27/08/2022 2:30pm</p>
                                    </div>
                                </td> 
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">N110,000</p>
                                </td>   
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">27/09/2022 2:30pm</p>
                                </td>   
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">Not paid</p>
                                </td> 
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3 ">0</p>
                                </td> 
                                <td className='bg-white w-40 '>
                                    <p className="w-40 mt-6 mb-3 ">Flutherwave</p>
                                </td> 
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3 text-[#02B449] ">successful</p>
                                </td> 
                                <td className='bg-white w-36 '>
                                    <p className="w-36 mt-6 mb-3 "></p>
                                </td>  
                            </tr>  
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-10 bg-white'>
                                    <div className="flex w-10 items-center  " > 
                                        <input type="checkbox" /> 
                                    </div>
                                </td>
                                <td className='bg-white w-48  '>
                                    <div className="mt-6 mb-3 flex items-center " > 
                                        <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                            <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                        </div>
                                        <div className=" ml-1 " >
                                            <p style={{fontSize:'12px'}}>1 bedroom flat</p>
                                            <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>350,000</p>
                                        </div>
                                    </div> 
                                </td>
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">N100,000</p>
                                </td> 
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">1 month</p>
                                </td>  
                                <td className='bg-white w-28 '> 
                                    <div className=" w-28 mt-6 mb-3" >
                                        <p className=" text-[#038566] " >Approved</p>
                                        <p className="">27/08/2022 2:30pm</p>
                                    </div>
                                </td> 
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">N110,000</p>
                                </td>   
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">27/09/2022 2:30pm</p>
                                </td>   
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3">Not paid</p>
                                </td> 
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3 ">0</p>
                                </td> 
                                <td className='bg-white w-40 '>
                                    <div className=" w-40 mt-6 mb-3" >
                                        <p className="" >Bank/transfer</p>
                                        <div className="flex items-center " > 
                                            <button className=" ml-2 " > 
                                                <Image src="/images/file.png" width={15} height={15} alt='avatar'/>
                                            </button>
                                            <p className=" items-center flex text-sm ml-2 " >Receipt</p>
                                        </div>
                                    </div>
                                </td> 
                                <td className='bg-white w-28 '>
                                    <p className="w-28 mt-6 mb-3 text-[#02B449] ">successful</p>
                                </td> 
                                <td className='bg-white mx-2 w-36'> 
                                    <div className=" w-36 flex " >
                                        <button style={{border: "1px solid #02B449"}} className=" text-[#02B449] p-1 border-[#02B449] w-16 text-sm rounded-2xl " >Approve</button>
                                        <button style={{border: "1px solid #EB3223"}} className=" text-[#EB3223] p-1 border-[#EB3223]  w-16 text-sm rounded-2xl ml-1 " >Reject</button>
                                    </div> 
                                </td> 
                            </tr>  
                        </tbody>
                    </table>
                </div>
            )}
            {tab === 5 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}} >
                            <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">ID</p> 
                                    </div>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Amount</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Date</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Type</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28">Status</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">001</p> 
                                    </div>
                                </td> 
                                <td className='bg-white w-28'> 
                                    <p className="w-28 mt-6 mb-3">N300,000</p>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">27/08/2022 2:30pm</p>
                                </td>    
                                <td className='bg-white w-28'> 
                                    <p className="w-28 mt-6 mb-3">Funded wallet</p>
                                </td> 
                                <td className='bg-white w-28'> 
                                    <p className="w-28 mt-6 mb-3 text-[#0984D6] ">Successful</p>
                                </td> 
                            </tr>  
                        </tbody>
                    </table>
                </div>
            )}
            {tab === 6 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}} >
                            <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">ID</p> 
                                    </div>
                                </td> 
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Amount</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-40 mx-2">Reciept</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Purpose</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-36 mx-2">Action</p>
                                </td>  
                                <td className='bg-white'>
                                    <p className="w-28 mx-2">Status</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-24 bg-white'>
                                    <div className="flex w-24 items-center  " > 
                                        <input type="checkbox" />
                                        <p className="ml-2">001</p> 
                                    </div>
                                </td> 
                                <td className='bg-white mx-2 w-28'> 
                                    <p className="w-28 mt-6 mb-3">N300,000</p>
                                </td> 
                                <td className='bg-white mx-2 w-40'>
                                    <div className=" w-40 flex items-center " > 
                                        <button className=" ml-2 " > 
                                            <Image src="/images/file.png" width={15} height={15} alt='avatar'/>
                                        </button>
                                        <p className=" items-center flex text-sm ml-2 " >View Receipt</p>
                                    </div>
                                </td>    
                                <td className='bg-white mx-2 w-28'> 
                                    <p className="w-28 mt-6 mb-3">Wallet Top up</p>
                                </td> 
                                <td className='bg-white mx-2 w-36'> 
                                    <div className=" w-36 flex " >
                                        <button style={{border: "1px solid #02B449"}} className=" text-[#02B449] p-1 border-[#02B449] w-16 text-sm rounded-2xl " >Approve</button>
                                        <button style={{border: "1px solid #EB3223"}} className=" text-[#EB3223] p-1 border-[#EB3223]  w-16 text-sm rounded-2xl ml-1 " >Reject</button>
                                    </div> 
                                </td> 
                                <td className='bg-white mx-2 w-28'> 
                                    <p className="w-28 mt-6 mb-3 text-[#0984D6] ">Pending</p>
                                </td> 
                            </tr>  
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    )
}