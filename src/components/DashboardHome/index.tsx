import React, {useEffect, useState} from "react"
import Image from "next/image"
import styles from './index.module.css'
import { FileCount } from "../FileCount"
import { RecentProperty } from "../RecentProperty"
import {BASEURL} from '../../BasicUrl/Url'
import { getCookie } from "cookies-next";
// import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend, ResponsiveContainer} from "recharts"
import axios from "axios"
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend, ResponsiveContainer} from "recharts"
import { Pagination } from "../Pagination"
import { UserInfo } from "../UserInfo"


export function DashboardHome(){

    const [page, setPage] = useState(1)
    const [limit, setLimit] = useState(0)
    const [pageCount, setPageCount] = useState(0)
    const [allUsers, setAllUsers] = useState([])
    const [allProperties, setAllProperties] = useState([])

    useEffect(() => {
     const getUsers = async () => {
        const allUsersResponse = await axios.get(`${BASEURL.URL}/users?limit=6&page=${page}`, { headers: {
            Authorization: `Bearer ${getCookie('token')}`
        }})
        const allPropertiesResponse = await axios.get(`${BASEURL.URL}/properties`, { headers: {
            Authorization: `Bearer ${getCookie('token')}`
        }})
        setAllProperties(allPropertiesResponse.data.data.properties)
        setAllUsers(allUsersResponse.data.data.users)
        setPageCount(allUsersResponse.data.data.pages)
        setLimit(allUsersResponse.data.data.next)
     }
     getUsers()
    
    }, [page])
    
    
    const sixProperties = allProperties?.slice(0,6)
    const displayUsers = allUsers.map((user: any) => {
        return ( <UserInfo key={user._id} img="/images/avatar.png" name={user.username} mobile="+998 (99) 436-46-15" 
        email={user.email} date={user.createdAt} location="2 New Road, Farm Road, PortHarcourt, Rivers State"
        status= {user.isVerified ? 'Verified Agent' : 'Not Verified'}/>)
    })
    
    const displayProperties = sixProperties?.map((property: any) => {
        return (
            <RecentProperty key={property._id} img="/images/recentImage1.png" description={property.description}
            location={`${property.location.address}, ${property.location.city}, ${property.location.state}`} action={property.type} price={property.price}/>
        )
    })
    
    
    
    
    
        return(
            <div>
                <div className={styles.dashboardWrapper}>
                    <div className={styles.dashboardContainer}>
                        <p>Dashboard</p>
                        <div className={styles.fileCountHolder}>
                            <FileCount img='/images/folder-open-blue.png' background="rgba(51, 102, 255, 0.2)" 
                            title="Total Property" amount="10,000"/>
                            <FileCount img='/images/folder-open.png' background="rgba(255, 51, 63, 0.2)" 
                            title="Total Earnings" amount="N100,000" textColor='#FF333F'/>
                            <FileCount img='/images/folder-open-orange.png' background="rgba(255, 149, 51, 0.2)" 
                            title="Customers" amount="5000" textColor='#FF9533'/>
                        </div>
                        <ResponsiveContainer width={'100%'} height="70%" >
                        <LineChart width={730} height={250} data={[{date:"67",value:1200,value2:788},{date:"2",value:900, value2:388},{date:"12",value:200, value2:269},{date:"178",value:600, value2:480}]}
                            margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="date" />
                            <YAxis />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="value" stroke="#8884d8" />
                            <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
                            </LineChart>
                        </ResponsiveContainer>
                    </div>
                    {/* <ResponsiveContainer width={'100%'} height="70%" >
                    <LineChart width={730} height={250} data={[{date:"67",value:1200,value2:788},{date:"2",value:900, value2:388},{date:"12",value:200, value2:269},{date:"178",value:600, value2:480}]}
                        margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <Line type="monotone" dataKey="value" stroke="#8884d8" />
                        <Line type="monotone" dataKey="value2" stroke="#82ca9d" />
                        </LineChart>
                    </ResponsiveContainer> */}
                </div>
                <div className={styles.dashboardContainer}>
                <div className={styles.arrow}><Image src='/images/arrowRight.png' width={6} height={10} alt='arrow-right' /></div>
                    <p>Recent Property</p>
                    <div className={styles.myRecentHolder}>
                        {displayProperties}
                    </div>
                </div>
                        <Pagination page={page} setPage={setPage} pageCount={pageCount} limit={limit} />
            </div>
        )
    }