import React, {useEffect, useState} from "react"
import Image from "next/image"
import styles from './index.module.css'
import { FileCount } from "../FileCount"
import { RecentProperty } from "../RecentProperty"
import {BASEURL} from '../../BasicUrl/Url'
import { getCookie } from "cookies-next";
import {IoIosArrowForward, IoIosLogOut} from "react-icons/io"
import {BarChart, Bar, CartesianGrid, XAxis, YAxis,Tooltip,Legend,  Cell, ResponsiveContainer} from "recharts"
import axios from "axios" 
import { Pagination } from "../Pagination"
import { UserInfo } from "../UserInfo"

export function DashboardHome(){
    const [proper, setProper] = useState(1)
    const [page, setPage] = useState(1)
    const [pageCount, setPageCount] = useState(0)
    const [allUsers, setAllUsers] = useState({} as any)
    const [allProperties, setAllProperties] = useState({} as any)

useEffect(() => {
 const getUsers = async () => {
    const allUsersResponse = await axios.get(`${BASEURL.URL}/users?limit=6&page=${page}`, { headers: {
        Authorization: `Bearer ${getCookie('token')}`
    }})
    const allPropertiesResponse = await axios.get(`${BASEURL.URL}/properties?limit=6&page=${proper}`, { headers: {
        Authorization: `Bearer ${getCookie('token')}`
    }})
    setAllProperties(allPropertiesResponse.data.data)
    setAllUsers(allUsersResponse.data.data)
    setPageCount(allUsersResponse.data.data.pages)
 }
 getUsers()

}, [page, proper])

const displayUsers = allUsers?.users?.map((user: any) => {
    return ( <UserInfo key={user._id} img="/images/avatar.png" name={user.username} mobile="+998 (99) 436-46-15" 
    email={user.email} date={user.createdAt} location="2 New Road, Farm Road, PortHarcourt, Rivers State"
    status= {user.isVerified ? 'Verified Agent' : 'Not Verified'}/>)
})


const displayProperties = allProperties?.properties?.map((property: any) => {
    return (
        <RecentProperty key={property._id} img={property?.imagesURLs[0]} description={property.description}
        location={`${property.location.address}, ${property.location.city}, ${property.location.state}`} action={property.type} price={property.price}/>
    )
})


const chartData = [{name:"Properties",value:1200},{name:"Ima Original",value:900},
{name:"Buy",value:200},{name:"Rent",value:600}]

const chartData2 = [{name:"Users",value:300},{name:"Agents",value:900},
{name:"Visitors",value:900}]

const barColors = ["#FF6633", "#3361FF", "#8833FF", "#0984D6"]
const barColors2 = ["#FF6633", "#3361FF", "#8833FF"]

    return(
        <div>
            <div className={styles.dashboardWrapper}>
                <div className={styles.dashboardContainer}>
                    <p>Dashboard</p>
                    <div className={styles.fileCountHolder}>
                        <FileCount img='/images/folder-open-blue.png' background="rgba(51, 102, 255, 0.2)" 
                        title="Total Property" amount={allProperties?.count}/>
                        <FileCount img='/images/folder-open.png' background="rgba(255, 51, 63, 0.2)" 
                        title="Total Earnings" amount="N100,000" textColor='#FF333F' count={allUsers?.count}/>
                        <FileCount img='/images/folder-open-orange.png' background="rgba(255, 149, 51, 0.2)" 
                        title="Customers" amount={allUsers?.count} textColor='#FF9533'/>
                    </div>
                    <div style={{height:'30%'}} className={styles.responsiveDiv}>
                    <ul className={styles.usersList}>
                                <li>Users</li>
                                <li>Daily</li>
                                <li>Weekly</li>
                                <li>Monthly</li>
                            </ul>
                    <ResponsiveContainer width={'100%'} height="100%" id={styles.responsiveContainer}>
                    <BarChart width={730} height={250}
                    data={chartData}
                         layout='vertical' barCategoryGap={20}
                         margin={{ top: 10, right: 20, left: 30, }}> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" hide/>
                        <YAxis type="category" dataKey='name' 
                        style={{fontFamily:'Montserrat', fontWeight:'500', fontSize:'12px'}}/>
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
                    <div style={{height:'30%'}} className={styles.responsiveDiv}>
                        <div style={{height:'20%',  marginTop:'100px'}}>
                            <ul className={styles.usersList}>
                                <li>Users</li>
                                <li>Daily</li>
                                <li>Weekly</li>
                                <li>Monthly</li>
                            </ul>
                        </div>
                    <ResponsiveContainer width={'100%'} height="80%" id={styles.responsiveContainer}>
                    <BarChart width={730} height={250}
                    data={chartData2}
                         layout='vertical' barCategoryGap={33}
                         margin={{ top: 10, right: 20, left: 30 }}> 
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis type="number" hide/>
                        <YAxis type="category" dataKey='name' style={{fontFamily:'Montserrat', fontWeight:'500', fontSize:'12px'}} />
                        <Tooltip />
                        <Legend />
                        <Bar type="monotone" dataKey="value" fill="#FF6633">
                        {
                        chartData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={barColors2[index % 20]} />
                        ))
                    }
                            </Bar>
                        </BarChart>
                    </ResponsiveContainer>
                    </div>
                </div>
                <div className={styles.dashboardContainer}>
                    <p>Recent Property</p>
                    <div className={styles.myRecentHolder}>
                        {displayProperties}
                    </div>
                </div>
                        {/* <Pagination page={page} setPage={setPage} pageCount={pageCount} limit={limit} /> */}
            </div>
                    <Pagination page={page} setPage={setPage} pageCount={pageCount} limit={{limit:6}} />
        </div>
    )
}
