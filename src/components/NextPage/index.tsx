import React from 'react'
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io'

export default function Index(props: any) { 

    const onBackClick =()=>{
        if(props.page !== 1 ){ 
            props.setPage(props.page -1)
        }
    }
    const onNextClick =()=>{
        if(props.page === props.limit ){ 
            props.setPage(props.page +1)
        }
    }

    return (
        <div className=' w-full flex items-center mt-20 ' >
            <p style={{fontFamily: "Poppins", fontWeight: "500", fontSize: "12px"}} className=' ml-auto' >1-2 of items</p>
            <button onClick={onBackClick} className=' w-7 h-7 rounded border border-[#EFF0F4] flex justify-center items-center ml-4 ' ><IoIosArrowBack size={15} /></button>
            <button className=' w-7 h-7 rounded bg-[#0984D6] text-white text-xs flex justify-center items-center ml-2 ' >{props.page}</button>
            {props.page === props.limit &&

            <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex text-xs justify-center items-center ml-2 ' >{props.page+1}</button>
            }
            <button onClick={onNextClick} className=' w-7 h-7 rounded border border-[#EFF0F4] flex justify-center items-center ml-4 ' ><IoIosArrowForward size={15} /></button>
        </div>
    )
} 