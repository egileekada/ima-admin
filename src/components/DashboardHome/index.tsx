import React, {useEffect, useState} from "react"
import Image from "next/image"
import styles from './index.module.css'
import { FileCount } from "../FileCount"
import { RecentProperty } from "../RecentProperty"
import { UserInfo } from "../UserInfo"
import {BASEURL} from '../../BasicUrl/Url'
import { getCookie } from "cookies-next";
import {IoIosArrowForward} from "react-icons/io"
import {BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip,Legend,  Cell, ResponsiveContainer} from "recharts"
import axios from "axios"
import { Pagination } from "../Pagination"


export function DashboardHome(){
    const [proper, setProper] = useState(1)
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
    const allPropertiesResponse = await axios.get(`${BASEURL.URL}/properties?limit=6&page=${proper}`, { headers: {
        Authorization: `Bearer ${getCookie('token')}`
    }})
    setAllProperties(allPropertiesResponse.data.data.properties)
    setAllUsers(allUsersResponse.data.data.users)
    setPageCount(allUsersResponse.data.data.pages)
    setLimit(allUsersResponse.data.data.next)
 }
 getUsers()

}, [page, proper])


const displayUsers = allUsers.map(user => {
    return ( <UserInfo key={user._id} img="/images/avatar.png" name={user.username} mobile="+998 (99) 436-46-15" 
    email={user.email} date={user.createdAt} location="2 New Road, Farm Road, PortHarcourt, Rivers State"
    status= {user.isVerified ? 'Verified Agent' : 'Not Verified'}/>)
})

const displayProperties = allProperties?.map(property => {
    return (
        <RecentProperty key={property._id} img="/images/recentImage1.png" description={property.description}
        location={`${property.location.address}, ${property.location.city}, ${property.location.state}`} action={property.type} price={property.price}/>
    )
})


const chartData = [{name:"Properties",value:1200},{name:"Ima Original",value:900},
{name:"Buy",value:200},{name:"Rent",value:600}]

const barColors = ["#FF6633", "#3361FF", "#8833FF", "#0984D6"]


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
                    <ResponsiveContainer width={'100%'} height="40%" id={styles.responsiveContainer}>
                    <BarChart width={730} height={250}
                    data={chartData}
                         layout='vertical' barCategoryGap={20}
                         margin={{ top: 20, right: 20, left: 30, bottom: 5, }}> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" hide/>
                        <YAxis type="category" dataKey='name'  />
                        <Tooltip />
                        <Legend />
                        <Bar type="monotone" dataKey="value" fill="#FF6633">
                        {
                        chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={barColors[index % 20]} />
                        ))
                    }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                </div>
                <div className={styles.dashboardContainer}>
                { proper < 2 && <div className={styles.arrow}><IoIosArrowForward
                width={6} height={10}  style={proper<2 ? {cursor:'pointer'}: {color:'lightgray', cursor:'not-allowed'}}
                onClick={()=> setProper(prevVal => prevVal+1)}/></div>}
                    <p>Recent Property</p>
                    <div className={styles.myRecentHolder}>
                        {displayProperties}
                    </div>
                </div>
                <div className={styles.homeBottom}>
                    <ul className={styles.bottomHeading}>
                        <li style={{display:'flex', alignItems:'center', marginRight:'100px'}}>
                            <input type='checkbox' style={{marginRight:'10px'}}></input>
                            <p style={{display:'inline'}}>User</p>
                        </li>
                        
                        <li>
                            <p>Email</p>
                        </li>

                        <li>
                            <p>Joined</p>
                        </li>

                        <li>
                            <p>Location</p>
                        </li>

                        <li>
                            <p>Status</p>
                        </li>

                        <li>
                            <p>Action</p>
                        </li>
                    </ul>
                    {displayUsers}
                </div>
            </div>
                    <Pagination page={page} setPage={setPage} pageCount={pageCount} limit={limit} />
        </div>
    )
}
