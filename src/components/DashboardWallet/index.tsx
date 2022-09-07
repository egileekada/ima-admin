import React from 'react'
import styles from './index.module.css' 
import Funding from './Funding'  
import WithdrawalRequest from './WithdrawalRequest'
import Withdrawal from './Withdrawal'
import Transaction from './Transaction'

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
            <div className=' w-full grid grid-cols-6 py-7 ' >
                <div className=' bg-[#02B4491A] flex items-center flex-col p-2 px-4 rounded-lg mr-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open-green.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#038566", fontSize: "15px"}} >₦1,000,000</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", color: "#038566", fontSize: "11px"}} >Total Amount</p>
                </div>
                <div className=' bg-[#FF333F1A] flex items-center flex-col p-2 px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#FF333F", fontSize: "15px"}} >₦1,000,000</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", color: "#FF333F", fontSize: "11px"}} >Loan Repayment</p>
                </div>
                <div className=' bg-[#3366FF1A] flex items-center flex-col p-2 px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open2.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#5F66E9", fontSize: "15px"}} >₦1,000,000</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", color: "#5F66E9", fontSize: "11px"}} >Loan Disburstment</p>
                </div>
                <div className=' bg-[#EF33FF1A] flex items-center flex-col p-2 px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open3.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#EF33FF", fontSize: "15px"}} >₦1,000,000</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", color: "#EF33FF", fontSize: "11px"}} >Top up</p>
                </div>
                <div className=' bg-[#FF953333] flex items-center flex-col p-2 px-4 rounded-lg mx-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open4.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#FF9533", fontSize: "15px"}} >₦1,000,000</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", color: "#FF9533", fontSize: "11px"}} >Withdraw request</p>
                </div>
                <div className=' bg-[#0984D61A] flex items-center flex-col p-2 px-4 rounded-lg ml-2 ' >
                    <div className=' flex justify-center mb-1  ' >
                        <img src="/images/folder-open5.png" alt="green" className=" w-8 h-8 mr-2 " />
                        <p style={{fontFamily: "Montserrat", fontWeight: "700", color: "#0984D6", fontSize: "15px"}} >₦1,000,000</p>
                    </div> 
                    <p className='ml-4' style={{fontFamily: "Montserrat", fontWeight: "600", color: "#0984D6", fontSize: "11px"}} >Referral commission</p>
                </div>
            </div>
            <div className='w-full mt-6 h-fit flex pb-6' >
                <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 0 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Funding</p>
                </button>
                <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-64  ' : ' w-64 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Withdrawal request (200)</p>
                </button>
                <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 2 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Withdrawal (50)</p>
                </button>
                <button onClick={()=> setTab(3)} style={tab === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 3 ? ' w-64  ' : ' w-64 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Transaction (20)</p>
                </button> 
            </div>
            {tab === 0 && (
                <Funding />
            )}
            {tab === 1 && (
                <WithdrawalRequest />
            )} 
            {tab === 2 && (
                <Withdrawal/>
            )} 
            {tab === 3 && (
                <Transaction />
            )}
        </div>
    )
}