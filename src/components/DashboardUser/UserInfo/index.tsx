import React from "react";

export default function Index(){
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
            <div className=' w-full grid grid-cols-6 py-7 ' >
                <div className=' bg-[#02B4491A] flex items-center flex-col p-2 px-4 rounded-lg mr-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open-green.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#038566", fontSize: "15px"}} >Property</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "11px"}} >5</p>
                </div>
                <div className=' bg-[#FF333F1A] flex items-center flex-col p-2 px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#FF333F", fontSize: "15px"}} >Booking</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "11px"}} >3</p>
                </div>
                <div className=' bg-[#3366FF1A] flex items-center flex-col p-2 px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open2.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#5F66E9", fontSize: "15px"}} >Wallet</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "11px"}} >2</p>
                </div>
                <div className=' bg-[#EF33FF1A] flex items-center flex-col p-2 px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open3.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#EF33FF", fontSize: "15px"}} >Loan</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "11px"}} >500,000</p>
                </div>
                <div className=' bg-[#FF953333] flex items-center flex-col p-2 px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open4.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#FF9533", fontSize: "15px"}} >Messages</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "11px"}} >3</p>
                </div>
                <div className=' bg-[#0984D61A] flex items-center flex-col p-2 px-4 rounded-lg ml-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open5.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#0984D6", fontSize: "15px"}} >Favourite</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", fontSize: "11px"}} >Card</p>
                </div>
            </div> 
            <table  style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                <thead style={{background: "#F7F8FA"}} >
                    <tr className='font-Poppins-Semibold bg-[#F7F8FA] ' >
                        <td className='w-24 bg-white'>
                            <div className="flex w-24 items-center  " >  
                                <p className="">№</p>
                            </div>
                        </td>
                        <td className='bg-white w-48'>
                            <p className="w-48">Date</p>
                        </td> 
                        <td className='bg-white'>
                            <p className="w-full">Comment</p>
                        </td>
                        <td className='bg-white "w-28   flex justify-center'>
                            <p >Value</p>
                        </td> 
                        <td className='bg-white w-28'>
                            
                        </td> 
                    </tr>
                </thead>
                <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                    <tr className='font-Poppins-Semibold text-sm ' >
                        <td className='w-24 bg-white'> 
                                <p className=" mt-6 mb-3">1</p> 
                        </td>
                        <td className='bg-white w-48'>
                            <p className="w-48 mt-6 mb-3">21.12.2021</p>
                        </td> 
                        <td className='bg-white'>
                            <p className="w-full mt-6 mb-3">If you open it directly in the browser, you will see an empty page.</p>
                        </td>
                        <td className='bg-white w-28'>
                            <p className="mt-6 mb-3 flex justify-center ">50 000</p>
                        </td> 
                        <td className='bg-white w-28'> 
                            <div className="  flex justify-center" >
                                <img src="/images/down.png" alt='arrow' className=" w-4 mt-6 mb-3 " />
                            </div>
                        </td> 
                    </tr>
                    <tr className='font-Poppins-Semibold text-sm ' >
                        <td className='w-24 bg-white'> 
                                <p className=" mt-6 mb-3">2</p> 
                        </td>
                        <td className='bg-white w-48'>
                            <p className="w-48 mt-6 mb-3">21.12.2021</p>
                        </td> 
                        <td className='bg-white'>
                            <p className="w-full mt-6 mb-3">If you open it directly in the browser, you will see an empty page.</p>
                        </td>
                        <td className='bg-white w-28'>
                            <p className="mt-6 mb-3 flex justify-center ">50 000</p>
                        </td> 
                        <td className='bg-white w-28'> 
                            <div className="  flex justify-center" >
                                <img src="/images/down.png" alt='arrow' className=" w-4 mt-6 mb-3 " />
                            </div>
                        </td> 
                    </tr>
                    <tr className='font-Poppins-Semibold text-sm ' >
                        <td className='w-24 bg-white'> 
                                <p className=" mt-6 mb-3">3</p> 
                        </td>
                        <td className='bg-white w-48'>
                            <p className="w-48 mt-6 mb-3">21.12.2021</p>
                        </td> 
                        <td className='bg-white'>
                            <p className="w-full mt-6 mb-3">If you open it directly in the browser, you will see an empty page.</p>
                        </td>
                        <td className='bg-white w-28'>
                            <p className="mt-6 mb-3 flex justify-center ">50 000</p>
                        </td> 
                        <td className='bg-white w-28'> 
                            <div className="  flex justify-center" >
                                <img src="/images/down.png" alt='arrow' className=" w-4 mt-6 mb-3 " />
                            </div>
                        </td> 
                    </tr>
                </tbody>
            </table>
        </div>
    )
}