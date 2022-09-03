import React from "react";
import Image from "next/image";
import styles from "./index.module.css"


export function DashboardSideNav({ children, page, setPage }: { [x: string]: any, page:string, setPage:any }){


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
                        {page==='dashboard'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='dashboard'?color:{}}>Dashboard</p>
                        {page==='dashboard'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='property'?backgroundStyle:{}} onClick={() => setPage('property')}>
                    {page==='property'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='property'?color:{}}>Property</p>
                        {page==='property'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='listing'?backgroundStyle:{}} onClick={() => setPage('listing')}>
                        {page==='listing'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='listing'?color:{}}>Listing</p>
                        {page==='listing'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='original'?backgroundStyle:{}} onClick={() => setPage('original')}>
                        {page==='original'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='original'?color:{}}>Ima Original</p>
                        {page==='original'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='users'?backgroundStyle:{}} onClick={() => setPage('users')}>
                        {page==='users'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='users'?color:{}}>Users</p>
                        {page==='users'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='wallet'?backgroundStyle:{}} onClick={() => setPage('wallet')}>
                        {page==='wallet'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='wallet'?color:{}}>Wallet</p>
                        {page==='wallet'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='loan'?backgroundStyle:{}} onClick={() => setPage('loan')}>
                        {page==='loan'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='loan'?color:{}}>Loan</p>
                        {page==='loan'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='bookings'?backgroundStyle:{}} onClick={() => setPage('bookings')}>
                        {page==='bookings'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='bookings'?color:{}}>Bookings</p>
                        {page==='bookings'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}

                    </li>

                    <li className={styles.dashboardList}
                    style={page==='messages'?backgroundStyle:{}} onClick={() => setPage('messages')}>
                        {page==='messages'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='messages'?color:{}}>Messages</p>
                        {page==='messages'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='blog'?backgroundStyle:{}} onClick={() => setPage('blog')}>
                        {page==='blog'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        {page==='blog'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <p style={page==='blog'?color:{}}>Blog</p>
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='settings'?backgroundStyle:{}} onClick={() => setPage('settings')}>
                        {page==='settings'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='settings'?color:{}}>Settings</p>
                        {page==='settings'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='referral'?backgroundStyle:{}} onClick={() => setPage('referral')}>
                        {page==='referral'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='referral'?color:{}}>Referral</p>
                        {page==='referral'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                    </li>

                    <li className={styles.dashboardList}
                    style={page==='customer'?backgroundStyle:{}} onClick={() => setPage('customer')}>
                        {page==='customer'&& <div className={styles.curve}><Image src='/images/roundTop.png' width={25} height={25}/></div>}
                        <div><Image src='/images/dashboard.png' width={15} height={15} alt='icon'/></div>
                        <p style={page==='customer'?color:{}}>Customer Care</p>
                        {/* {page==='customer'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>} */}
                    </li>
                </ul>
            </div>
            
            <div className={styles.whiteWrapper}>{children}</div>
        </div>
    )
}