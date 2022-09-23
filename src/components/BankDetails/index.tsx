import React from "react"
import Image from 'next/image'
export function BankDetails() {
    return(
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
    )
}