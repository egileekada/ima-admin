import React from 'react'
import Image from 'next/image'

export default function Index() {

    const [tab, setTab] = React.useState(0)
    const [infoTab, setInfoTab] = React.useState(false)

    return (
        <div>
            
            <div className=' w-full flex mt-14 '>
                <p style={{fontFamily: "Montserrat", fontWeight: "800"}} >Customer Care</p>
                <div className='ml-auto' style={{width: '258px'}} >
                    <select className='w-full h-11 px-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded ' >
                        <option>Search</option>
                    </select>
                </div>
            </div>
            <div className='w-full mt-6 h-fit flex pb-6' >
                <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 0 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "700"}} >Contact us (10)</p>
                </button>
                <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p style={{fontFamily: "Montserrat", fontWeight: "700"}} >Bank Deposit (10)</p>
                </button> 
            </div>

            {tab === 0 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}}  >
                            <tr className='font-Poppins-Semibold h-14  bg-[#F7F8FA] ' >
                                <td className='w-20  '>
                                    <div className="flex ml-4 w-20 items-center  " > 
                                        <input type="checkbox" /> 
                                        <p className="ml-2">ID</p>
                                    </div>
                                </td> 
                                <td className=' w-48'>
                                    <p className="w-48">User</p>
                                </td> 
                                <td className=''>
                                    <p className="w-36 mx-3">Phone/ Email</p>
                                </td> 
                                <td className=''>
                                    <p className="w-auto">Message</p>
                                </td>  
                                <td className=''>
                                    <p className="w-28">Action</p>
                                </td>   
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-20 bg-white'>
                                    <div className="flex w-20 ml-4 items-center  " > 
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
                                <td className='bg-white w-36 mx-3'>
                                    <div className="w-36 mt-6 mb-3" > 
                                        <p>08045687980</p>
                                        <p>viktor@gmail.com</p>
                                        <p>27/08/2022:2pm</p>
                                    </div>
                                </td> 
                                <td className='bg-white w-auto'>
                                    <p className="w-auto mt-6 mb-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus nec fringilla accumsan, risus sem </p>
                                </td>   
                                <td className='bg-white w-28'>
                                    <div className='flex items-center mt-6 text-[#0984D6] mb-3 ' >
                                        <p className="">Close</p>
                                        <div className=' w-2 h-2 rounded-full bg-[#FF333F] ml-2 ' />
                                    </div>
                                </td>    
                            </tr>  
                        </tbody>
                    </table>
                </div>
            )} 
            {tab === 1 && ( 
                <div className='w-[100%] my-4 overflow-x-auto' >
                    <table style={{ fontFamily: "Montserrat", fontWeight: "600" }} className='text-xs bg-[#F7F8FA] '>
                        <thead style={{background: "#F7F8FA"}}  >
                            <tr className='font-Poppins-Semibold h-14  bg-[#F7F8FA] ' >
                                <td className='w-20  '>
                                    <div className="flex ml-4 w-20 items-center  " > 
                                        <input type="checkbox" /> 
                                        <p className="ml-2">ID</p>
                                    </div>
                                </td> 
                                <td className=' w-48'>
                                    <p className="w-48">User</p>
                                </td> 
                                <td className=''>
                                    <p className="w-36 mx-3">Phone/ Email</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Amount</p>
                                </td> 
                                <td className=''>
                                    <p className="w-40">Reciept</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Purpose</p>
                                </td> 
                                <td className=''>
                                    <p className="w-28">Action</p>
                                </td>  
                                <td className=' mx-2 w-36'>
                                    <p className="">Status</p>
                                </td> 
                            </tr>
                        </thead>
                        <tbody style={{ fontFamily: "Montserrat", fontWeight: "400" }}> 
                            <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-20 bg-white'>
                                    <div className="flex w-20 ml-4 items-center  " > 
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
                                <td className='bg-white w-36 mx-3'>
                                    <div className="w-36 mt-6 mb-3" > 
                                        <p>08045687980</p>
                                        <p>viktor@gmail.com</p>
                                        <p>27/08/2022:2pm</p>
                                    </div>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">N200,000</p>
                                </td>  
                                <td className='bg-white w-40 '>
                                    <div className=" w-40 mt-6 mb-3" > 
                                        <div className="flex items-center " > 
                                            <button className=" " > 
                                                <Image src="/images/file.png" width={15} height={15} alt='avatar'/>
                                            </button>
                                            <p className=" items-center flex text-sm ml-2 " >View Receipt</p>
                                        </div>
                                    </div>
                                </td> 
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 mb-3">Wallet Top up</p>
                                </td>     
                                <td className='bg-white w-28'>
                                    <p className="w-28 mt-6 text-[#EB3223] mb-3">Pending</p>
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
        </div>
    )
} 