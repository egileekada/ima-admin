import React from 'react'
import styles from './index.module.css' 
// import Funding from './AllBooking'  
// import WithdrawalRequest from './WithdrawalRequest'
// import Withdrawal from './Withdrawal'
// import Transaction from './Transaction'
import AllBooking from './AllBooking'
import NewBooking from './NewBooking'
import Canceled from './Canceled'
import Reschduled from './Reschduled'

export default function Index(){

    const [tab, setTab] = React.useState(0)

    return(
        <div>
            <div className=' w-full flex mt-14 '>
                <p className={styles.MontserratExtraBold} >Wallet</p>
                <div className='ml-auto' style={{width: '258px'}} >
                    <select className='w-full h-11 px-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded ' >
                        <option>Search</option>
                    </select>
                </div>
            </div> 
            <div className='w-full mt-6 h-fit flex pb-6' >
                <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 0 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >All Booking (10)</p>
                </button>
                <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >New Booking</p>
                </button>
                <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 2 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Canceled</p>
                </button>
                <button onClick={()=> setTab(3)} style={tab === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 3 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Reschduled</p>
                </button> 
            </div>
            {tab === 0 && (
                <AllBooking />
            )}
            {tab === 1 && (
                <NewBooking />
            )} 
            {tab === 2 && (
                <Canceled/>
            )} 
            {tab === 3 && (
                <Reschduled />
            )}
        </div>
    )
}