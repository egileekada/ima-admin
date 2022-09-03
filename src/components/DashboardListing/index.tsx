import React from 'react'
import styles from './index.module.css'
import { RecentProperty } from "../RecentProperty"
import { UserInfo } from "./NewListing/UserInfo"
import NewListing from './NewListing'
import Approved from './Approved'
import Rejected from './Rejected'

export default function Index(){

    const [tab, setTab] = React.useState(0)

    return(
        <div>
            <div className=' w-full flex mt-14 '>
                <p className={styles.MontserratExtraBold} >Listing</p>
                <div className='ml-auto' style={{width: '258px'}} >
                    <select className='w-full h-11 px-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded ' >
                        <option>Search</option>
                    </select>
                </div>
            </div>
            <div className='w-full mt-6 h-fit flex pb-6' >
                <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 0 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >New Listing (5)</p>
                </button>
                <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Approved (10)</p>
                </button>
                <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Rejected (10)</p>
                </button>
                <button onClick={()=> setTab(3)} style={tab === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >All Listing (10)</p>
                </button> 
            </div>
            {tab === 0 && (
                <NewListing />
            )}
            {tab === 1 && (
                <Approved />
            )}
            {tab === 2 && (
                <Rejected />
            )}
        </div>
    )
}