import React from 'react'

export default function Index() {
    return (
        <div className=' w-full py-12 px-16 ' >
            <p style={{ fontFamily: "Montserrat", fontWeight: "700", color: "#0984D6"}} >Add sub-admin</p>
            <div style={{ width: "500px"}} className="mt-10 flex flex-col" > 
                <p  style={{ fontFamily: "Montserrat", fontWeight: "400", color: "#000"}} className="" >Email Address</p>
                <input style={{ fontFamily: "Montserrat", fontWeight: "400", color: "#000"}} className=' w-full h-12 border px-6 mt-2 border-[#D4D4D4] rounded-md ' placeholder='Enter the email ' />
                <p  style={{ fontFamily: "Montserrat", fontWeight: "400", color: "#000"}} className="mt-5" >Password</p>
                <input style={{ fontFamily: "Montserrat", fontWeight: "400", color: "#000"}} className=' w-full h-12 border px-6 mt-2 border-[#D4D4D4] rounded-md ' placeholder='Enter password ' />
                <button  style={{ fontFamily: "Montserrat", fontWeight: "700", color: "#fff"}}  className=' w-64 rounded-md bg-[#0984D6] text-white mt-8 mx-auto h-12 ' >Add Sub-Admin</button>
            </div>
        </div>
    )
}
