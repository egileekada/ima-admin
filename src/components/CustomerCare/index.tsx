import React, {useState, useEffect} from 'react'
import Image from 'next/image'
import {BASEURL} from '../../BasicUrl/Url'
import { getCookie } from 'cookies-next'
import { BankDetails } from '../BankDetails'
import { ContactMessages } from '../ContactMessages'
import { Pagination } from '../Pagination'
const axios = require('axios')

export default function Index() {

    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [usersMessages, setUsersMessages] = useState([])
    const [messages, setMessages] = useState([])

    useEffect(() => {
        const getAllAdmins = async() => {
            const token = getCookie('token')
            const adminResponse = await axios.get(`${BASEURL.URL}/messages`, {
                headers: {
                    Authorization: `Bearer ${token}`
                }
            })
            setUsersMessages(adminResponse.data.data)
            setMessages(adminResponse.data.data.messages)
            setPageCount(adminResponse.data.data.count)
        }
        getAllAdmins()
    },[])

    console.log(usersMessages)
    console.log(pageCount)


    const [tab, setTab] = React.useState(0)
    const [infoTab, setInfoTab] = React.useState(false)


    const myMessages = messages?.map((item, index) => {
        return <ContactMessages username={item.from.username} email={item.from.email} 
        content={item.content} date={item.from.createdAt.slice(0,10)} id={`00${index+1}`}/>
    })

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
                    <table style={{ fontFamily: "Montserrat", fontWeight: "600", width:'100%' }} className='text-xs bg-[#F7F8FA] '>
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
                            {myMessages}
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
                            <BankDetails/>
                        </tbody>
                    </table>
                </div>
            )} 
            <Pagination page={page} pageCount={pageCount} setPage={setPage} limit={{limit:5}} />
        </div>
    )
} 