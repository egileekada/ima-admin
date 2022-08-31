import React, { useState } from "react";
import Image from "next/image";
import styles from "./index.module.css"


export function DashboardSideNav({ children }: { [x: string]: any }){

    const [page, setPage] = useState('dashboard')

const backgroundStyle: object = {
backgroundColor: '#fff',
}

const color: object = {
    color:'#0984D6'
}


    return (
        <div className={styles.mainWrapper}>
            <div>
                <div className={styles.avatarWrapper}>
                    <div className={styles.avatarBox}>
                        <Image src='/images/profilePics.png' width={40} height={40} alt='avatar' />
                    </div>
                    <div className={styles.title}>
                        <p>Samantha</p>
                        <p>johndoe@gmail.com</p>
                    </div>
                </div>
                <p className={styles.mainMenu}>MAIN MENU</p>

                <ul className={styles.dashboardUL}>
                    <li className={styles.dashboardList}
                    style={page==='dashboard'?backgroundStyle: {}} onClick={() => setPage('dashboard')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='dashboard'?color:{}}>Dashboard</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='property'?backgroundStyle:{}} onClick={() => setPage('property')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='property'?color:{}}>Property</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='listing'?backgroundStyle:{}} onClick={() => setPage('listing')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='listing'?color:{}}>Listing</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='original'?backgroundStyle:{}} onClick={() => setPage('original')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='original'?color:{}}>Ima Original</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='users'?backgroundStyle:{}} onClick={() => setPage('users')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='users'?color:{}}>Users</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='wallet'?backgroundStyle:{}} onClick={() => setPage('wallet')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='wallet'?color:{}}>Wallet</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='loan'?backgroundStyle:{}} onClick={() => setPage('loan')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='loan'?color:{}}>Loan</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='bookings'?backgroundStyle:{}} onClick={() => setPage('bookings')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='bookings'?color:{}}>Bookings</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='messages'?backgroundStyle:{}} onClick={() => setPage('messages')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='messages'?color:{}}>Messages</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='blog'?backgroundStyle:{}} onClick={() => setPage('blog')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='blog'?color:{}}>Blog</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='settings'?backgroundStyle:{}} onClick={() => setPage('settings')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='settings'?color:{}}>Settings</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='referral'?backgroundStyle:{}} onClick={() => setPage('referral')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='referral'?color:{}}>Referral</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='customer'?backgroundStyle:{}} onClick={() => setPage('customer')}>
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='customer'?color:{}}>Customer Care</p>
                    </li>
                </ul>
            </div>
            
            <div className={styles.whiteWrapper}>{children}</div>
        </div>
    )
}