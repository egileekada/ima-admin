import React from 'react'
import { UserInfo } from './UserInfo'
import styles from './index.module.css'

export default function NewListing(){
    return(
        <div className={styles.homeBottom}>
            <ul className={styles.bottomHeading}>
                <li style={{display:'flex', alignItems:'center'}}>
                    <input type='checkbox' style={{marginRight:'10px'}}></input>
                    <p style={{display:'inline'}}>Property</p>
                </li>
                
                <li>
                    <p>Agent</p>
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
    )
}