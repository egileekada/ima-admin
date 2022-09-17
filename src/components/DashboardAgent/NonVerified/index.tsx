import React from 'react'
import { UserInfo } from './UserInfo'
import styles from './index.module.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function NewListing(props: any){
    return(
        <div> 
            <div className={styles.homeBottom}>
                <ul className={styles.bottomHeading}> 
                    <li style={{display:'flex', alignItems:'center'}}>
                        <input type='checkbox' style={{marginRight:'10px'}}></input>
                        <p style={{display:'inline'}}>ID</p>
                    </li>
                    
                    <li>
                        <p>User</p>
                    </li>
                    
                    <li>
                        <p>Phone</p>
                    </li>

                    <li>
                        <p>Email</p>
                    </li>

                    <li>
                        <p>No. of Properties</p>
                    </li>

                    <li>
                        <p>Address</p>
                    </li>

                    <li>
                        <p>Date joined</p>
                    </li>
                    
                    <li >
                        <p>Last seen</p>
                    </li>
                    
                    <li >
                        <p>Status</p>
                    </li>

                    <li className='mr-auto' >
                        <p>Action</p>
                    </li>
                </ul>
                <UserInfo id="001" verified={false} img="/images/profilePics.png" propertyNumber="4" user="John Emmanuel" useremail="@John" 
                phone="08045934324" email="johndoe@example.com" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Online' seen="Now"  /> 
                <UserInfo id="001" verified={false}  img="/images/profilePics.png" propertyNumber="13" user="John Emmanuel" useremail="@John" 
                phone="08045934324" email="johndoe@example.com" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Online' seen="Now"  /> 
                <UserInfo id="001" verified={false} img="/images/profilePics.png" propertyNumber="443" user="John Emmanuel" useremail="@John" 
                phone="08045934324" email="johndoe@example.com" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Offline' seen="1d ago"  /> 
                <UserInfo id="001" verified={false} img="/images/profilePics.png" propertyNumber="32" user="John Emmanuel" useremail="@John" 
                phone="08045934324" email="johndoe@example.com" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Offline' seen="10s ago"  />  
                <UserInfo id="001" verified={false} img="/images/profilePics.png" propertyNumber="2" user="John Emmanuel" useremail="@John" 
                phone="08045934324" email="johndoe@example.com" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Offline' seen="12m ago"  /> 
            </div>
            <div className=' w-full flex items-center mt-20 ' >
                <p style={{fontFamily: "Poppins", fontWeight: "500", fontSize: "12px"}} className=' ml-auto' >1-2 of items</p>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex justify-center items-center ml-4 ' ><IoIosArrowBack size={15} /></button>
                <button className=' w-7 h-7 rounded bg-[#0984D6] text-white text-xs flex justify-center items-center ml-2 ' >1</button>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex text-xs justify-center items-center ml-2 ' >2</button>
                <button className=' w-7 h-7 rounded border border-[#EFF0F4] flex justify-center items-center ml-4 ' ><IoIosArrowForward size={15} /></button>
            </div>
        </div>
    )
}