import React from 'react'
import styles from './index.module.css' 
import AllProperties from './AllProperties'
import Approved from './Approved'
import Rejected from './Rejected'
import New from './New'
import Rent from './Rent'
import Buy from './Buy'

export default function Index(){

    const [tab, setTab] = React.useState(0)

    const ClickHandler =(item: any)=> { 
        sessionStorage.setItem("original", item)
        setTab(item)
    }

    React.useEffect(()=>{
        if(sessionStorage.getItem("original")){
            setTab(Number(sessionStorage.getItem("original")+""))
        }
    },[tab])

    return(
        <div>
            <div className=' w-full flex mt-14 '>
                <p className={styles.MontserratExtraBold} >Ima Original</p>
                <div className='ml-auto' style={{width: '258px'}} >
                    <select className='w-full h-11 px-4 bg-[#E4E6EE] border border-[#E4E6EE] rounded ' >
                        <option>Search</option>
                    </select>
                </div>
            </div>
            <div className='w-full mt-6 h-fit flex pb-6' >
                <button onClick={()=> ClickHandler(0)} style={Number(sessionStorage.getItem("original")+"") === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={Number(sessionStorage.getItem("original")+"") == 0 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >All Properties (5)</p>
                </button>
                <button onClick={()=> ClickHandler(1)} style={Number(sessionStorage.getItem("original")+"") === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={Number(sessionStorage.getItem("original")+"") == 1 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >New (70)</p>
                </button>
                <button onClick={()=> ClickHandler(2)} style={Number(sessionStorage.getItem("original")+"") === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={Number(sessionStorage.getItem("original")+"") == 2 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Approved (10)</p>
                </button>
                <button onClick={()=> ClickHandler(3)} style={Number(sessionStorage.getItem("original")+"") === 3 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={Number(sessionStorage.getItem("original")+"") == 3 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Rejected (10)</p>
                </button> 
                <button onClick={()=> ClickHandler(4)} style={Number(sessionStorage.getItem("original")+"") === 4 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={Number(sessionStorage.getItem("original")+"") == 4 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Rent (10)</p>
                </button> 
                <button onClick={()=> ClickHandler(5)} style={Number(sessionStorage.getItem("original")+"") === 5 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {borderBottom: "2px solid #101010 "}} className={Number(sessionStorage.getItem("original")+"") == 5 ? ' w-40  ' : ' w-40 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Buy (10)</p>
                </button> 
            </div>
            {tab === 0 && (
                <AllProperties />
            )}
            {tab === 1 && (
                <New />
            )}
            {tab === 2 && (
                <Approved />
            )}
            {tab === 3 && (
                <Rejected />
            )}
            {tab === 4 && (
                <Rent />
            )}
            {tab === 5 && (
                <Buy />
            )}
        </div>
    )
}