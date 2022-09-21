import React, {useEffect, useState} from "react"
import Image from "next/image"
import styles from './index.module.css'
import { FileCount } from "../FileCount"
import { RecentProperty } from "../RecentProperty"
import { UserInfo } from "../UserInfo"
import {BASEURL} from '../../BasicUrl/Url'
import { getCookie } from "cookies-next";
import {LineChart,Line,CartesianGrid,XAxis,YAxis,Tooltip,Legend, ResponsiveContainer} from "recharts"
import axios from "axios"


export function DashboardHome(){

    const [allUsers, setAllUsers] = useState([])
    const [allProperties, setAllProperties] = useState([])

useEffect(() => {
 const getUsers = async () => {
    const allUsersResponse = await axios.get(`${BASEURL.URL}/users`, { headers: {
        Authorization: `Bearer ${getCookie('token')}`
    }})
    const allPropertiesResponse = await axios.get(`${BASEURL.URL}/properties`, { headers: {
        Authorization: `Bearer ${getCookie('token')}`
    }})
    setAllProperties(allPropertiesResponse.data.data.properties)
    setAllUsers(allUsersResponse.data.data.users)
 }
 getUsers()

}, [])

const sixUsers = allUsers?.slice(0,6)
const displayUsers = sixUsers.map(user => {
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
                    <ResponsiveContainer width={'100%'} height="50%">
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
                <div className={styles.dashboardContainer}>
                <div className={styles.arrow}><Image src='/images/arrowRight.png' width={6} height={10} alt='arrow-right' /></div>
                    <p>Recent Property</p>
                    <div className={styles.myRecentHolder}>
                        {/* <RecentProperty img="/images/recentImage1.png" description="1 bedroom flat" 
                        location="Port Harcourt, Rivers" action='Rent' price='350,000'/>

                        <RecentProperty img="/images/recentImage1.png" description="1 bedroom flat" 
                        location="Port Harcourt, Rivers" action='Buy' price='350,000'/>

                        <RecentProperty img="/images/recentImage1.png" description="1 bedroom flat" 
                        location="Port Harcourt, Rivers" action='Buy' price='350,000'/>

                        <RecentProperty img="/images/recentImage1.png" description="1 bedroom flat" 
                        location="Port Harcourt, Rivers" action='Buy' price='350,000'/>

                        <RecentProperty img="/images/recentImage1.png" description="1 bedroom flat" 
                        location="Port Harcourt, Rivers" action='Rent' price='350,000'/>

                        <RecentProperty img="/images/recentImage1.png" description="1 bedroom flat" 
                        location="Port Harcourt, Rivers" action='Buy' price='350,000'/> */}
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
                    {/* <UserInfo img="/images/avatar.png" name="Sierra Ferguson" mobile="+998 (99) 436-46-15" 
                    email="Josh@gmail.com" date="04.12.2021 20:30" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                    status='Verified Agent'/>

                    <UserInfo img="/images/avatar.png" name="Sierra Ferguson" mobile="+998 (99) 436-46-15" 
                    email="Josh@gmail.com" date="04.12.2021 20:30" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                    status='Verified Agent'/>

                    <UserInfo img="/images/avatar.png" name="Sierra Ferguson" mobile="+998 (99) 436-46-15" 
                    email="Josh@gmail.com" date="04.12.2021 20:30" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                    status='Verified Agent'/>

                    <UserInfo img="/images/avatar.png" name="Sierra Ferguson" mobile="+998 (99) 436-46-15" 
                    email="Josh@gmail.com" date="04.12.2021 20:30" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                    status='Verified Agent'/>

                    <UserInfo img="/images/avatar.png" name="Sierra Ferguson" mobile="+998 (99) 436-46-15" 
                    email="Josh@gmail.com" date="04.12.2021 20:30" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                    status='Verified Agent'/> */}
                    {displayUsers}
                </div>
            </div>
        </div>
    )
}
