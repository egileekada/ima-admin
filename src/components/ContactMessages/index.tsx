import React from "react"
import Image from 'next/image'


export function ContactMessages({email, username, date, content, id}:{[x:string]:any}){

    return(
        <tr className='font-Poppins-Semibold text-sm ' >
                                <td className='w-20 bg-white'>
                                    <div className="flex w-20 ml-4 items-center  " > 
                                        <input type="checkbox" /> 
                                        <p className="ml-2">{id}</p>
                                    </div>
                                </td>
                                <td className='bg-white w-48 '>
                                    <div className="mt-6 mb-3 flex items-center " > 
                                        <div style={{marginRight:'5px', borderRadius:'999px'}}>
                                            <div><Image src="/images/profilePics.png" width={48} height={48} alt='avatar' style={{borderRadius:'999px'}}/></div>
                                        </div>
                                        <div className=" ml-1 " >
                                            <p style={{fontSize:'12px'}}>{username}</p>
                                            <p  className="flex" style={{fontSize:'12px', color:'#90A0B7'}}>@John</p>
                                        </div>
                                    </div> 
                                </td>
                                <td className='bg-white w-36 mx-3'>
                                    <div className="w-36 mt-6 mb-3" > 
                                        <p>08045687980</p>
                                        <p>{email}</p>
                                        <p>{date}</p>
                                    </div>
                                </td> 
                                <td className='bg-white w-auto'>
                                    <p className="w-auto mt-6 mb-3">{content} </p>
                                </td>   
                                <td className='bg-white w-28'>
                                    <div className='flex items-center mt-6 text-[#0984D6] mb-3 ' >
                                        <p className="">Close</p>
                                        <div className=' w-2 h-2 rounded-full bg-[#FF333F] ml-2 ' />
                                    </div>
                                </td>    
                            </tr>  
    )
}