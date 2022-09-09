import React from 'react'
import styles from './index.module.css' 
import AllUser from './AllUser'
import Online from './Online'
import Offline from './Offline'
import Visitor from './Visitor'
import UserInfo from './UserInfo'

export default function Index(){

    const [tab, setTab] = React.useState(0)
    const [infoTab, setInfoTab] = React.useState(false)

    return(
        <div>
            <div className=' w-full flex mt-14 '>
                {!infoTab && ( 
                    <p className={styles.MontserratExtraBold} >Users</p>
                )}
                {infoTab && ( 
                    <button onClick={()=> setInfoTab(false)} style={{ fontFamily: "Montserrat", fontWeight: "600" }} className="text-[#0984D6] text-sm " >back</button>
                )}
                <div className='ml-auto' style={{width: '258px'}} >
                    <select className='w-full h-11 px-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded ' >
                        <option>Search</option>
                    </select>
                </div>
            </div>
            {!infoTab && (
                <> 
                    <div className='w-full mt-6 h-fit flex pb-6' >
                        <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 0 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                            <p className={styles.MontserratSemiBold} >All users (5)</p>
                        </button>
                        <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                            <p className={styles.MontserratSemiBold} >Visitors (70)</p>
                        </button>
                        <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                            <p className={styles.MontserratSemiBold} >Online (10)</p>
                        </button>
                        <button onClick={()=> setTab(3)} style={tab === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={tab == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                            <p className={styles.MontserratSemiBold} >Offline (10)</p>
                        </button> 
                    </div>
                    {tab === 0 && (
                        <AllUser click={setInfoTab} />
                    )}
                    {tab === 1 && (
                        <Visitor />
                    )}
                    {tab === 2 && (
                        <Online click={setInfoTab} />
                    )}
                    {tab === 3 && (
                        <Offline click={setInfoTab} />
                    )}
                </>
            )}
            {infoTab && (
                <UserInfo />
            )}
        </div>
    )
}