import React from 'react'
import { UserInfo } from './UserInfo'
import styles from './index.module.css'
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

export default function NewListing(){
    return(
        <div> 
            <div className={styles.homeBottom}>
                <ul className={styles.bottomHeading}>
                    <li style={{display:'flex', alignItems:'center'}}>
                        <input type='checkbox' style={{marginRight:'10px'}}></input>
                        <p style={{display:'inline'}}>Property</p>
                    </li>
                    
                    <li>
                        <p>Listed By</p>
                    </li>

                    <li>
                        <p>Location</p>
                    </li>

                    <li>
                        <p>Type</p>
                    </li>

                    <li>
                        <p>Date</p>
                    </li>

                    <li className='mr-auto' >
                        <p>Action</p>
                    </li>
                    <li >
                        <p></p>
                    </li>
                </ul>
                <UserInfo img="/images/building.png" property="1 bedroom flat" price="350,000" 
                listby="Ima Original" type="Buy" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Verified Agent'/>

                <UserInfo img="/images/building.png" property="1 bedroom flat" price="350,000" 
                listby="Ima Original" type="Rent" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Verified Agent'/>

                <UserInfo img="/images/building.png" property="1 bedroom flat" price="350,000" 
                listby="Ima Original" type="Buy" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Verified Agent'/>

                <UserInfo img="/images/building.png" property="1 bedroom flat" price="350,000" 
                listby="Ima Original" type="Buy" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Verified Agent'/>

                <UserInfo img="/images/building.png" property="1 bedroom flat" price="350,000" 
                listby="Ima Original" type="Rent" date="27/08/20222:30pm" location="2 New Road, Farm Road, PortHarcourt, Rivers State"
                status='Verified Agent'/>
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