import React from 'react'
import styles from './index.module.css' 
import NewListing from './NewListing'
import Approved from './Approved'
import Rejected from './Rejected'
import AllListing from './AllListing'
import { useQuery } from '@tanstack/react-query'
import { getCookie } from 'cookies-next'
import { BASEURL } from '../../BasicUrl/Url'

export default function Index(){

    const [tab, setTab] = React.useState(0)

    const ClickHandler =(item: any)=> { 
        sessionStorage.setItem("listingtabs", item)
        setTab(item)
    }

    const { isLoading, data } = useQuery(['properties'], () =>
    fetch(`${BASEURL.URL}/properties`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json', 
            Authorization : `Bearer ${getCookie("token")}`
        }
    }).then(res =>
        res.json()
    ))  

    React.useEffect(()=>{
        if(sessionStorage.getItem("listingtabs")){
            setTab(Number(sessionStorage.getItem("listingtabs")+""))
        } else {
            sessionStorage.setItem("listingtabs", "0")
        }
    },[tab])

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
                <button onClick={()=> ClickHandler(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 0 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >New Listing ({data?.data?.properties?.length})</p>
                </button>
                <button onClick={()=> ClickHandler(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Approved ({data?.data?.properties?.filter((item: any)=> item.status === "approved")?.length})</p>
                </button>
                <button onClick={()=> ClickHandler(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Rejected ({data?.data?.properties?.filter((item: any)=> item.status === "declined")?.length})</p>
                </button>
                <button onClick={()=> ClickHandler(3)} style={tab === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab === 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >All Listing ({data?.data?.properties?.length})</p>
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
            {tab === 3 && (
                <AllListing />
            )}
        </div>
    )
}