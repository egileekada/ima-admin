import React, { useState } from "react";
import Image from 'next/image'
import styles from './index.module.css'
import { MyProperties } from "../myProperties";
import { useQuery } from "@tanstack/react-query";
import { getCookie } from "cookies-next";
import { BASEURL } from "../../BasicUrl/Url";
import Router from "next/router";


export function Property({setPage}:{setPage:any}){

const [position, setPosition] = useState('all')
// const [position, setPosition] = useState(new Date)
const [showDelete, setShowDelete] = useState(false)

const handleDelete = () => {
    setShowDelete(prevState => !prevState)
}



const myStyle: object = {
    color: '#0984D6',
    borderBottom: '2px solid #0984D6'
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
    )
    )  

    const ClickHandler =(item: any)=> { 
        sessionStorage.setItem("propertiestabs", item)
        setPosition(item)
    }

    React.useEffect(()=>{
        if(sessionStorage.getItem("propertiestabs")){
            setPosition(sessionStorage.getItem("propertiestabs")+"")
        }
    },[position])

    return(
        <div>
            <div style={{marginTop:'48px'}} className={styles.myProperty}>
                <p>Property</p>
                <input type='text' placeholder='Search'></input>
            </div>

            <div className={styles.differentContainers}>
                <p style={sessionStorage.getItem("propertiestabs")+""==='all' ? myStyle: {} } onClick={() => ClickHandler('all')}>All Properties (5)</p>
                <p style={sessionStorage.getItem("propertiestabs")+""==='rent' ? myStyle: {} } onClick={() => ClickHandler('rent')}>Rent (70)</p>
                <p style={sessionStorage.getItem("propertiestabs")+""==='buy' ? myStyle: {} } onClick={() => ClickHandler('buy')}>Buy (10)</p>
            </div>

            <ul className={styles.propertyList}>
                <li>
                    <input type='checkbox'></input>
                    <p>Property</p>
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

                <li>
                    <p>Loan</p>
                </li>

                <li>
                    <p>Status</p>
                </li>

                <li>
                    <p>Action</p>
                </li>
            </ul>

            {position==='all' && <>
                {!isLoading && (
                    <>
                        {data.data.properties.map((item: any) => {
                            return( 
                                <div key={item._id} className={styles.myPropsHolder}>
                                    <MyProperties click={item._id} img={item?.imagesURLs[0]} description={item?.name} price={(item?.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                                        agent={item?.uploadedBy?.username} location={item?.location?.address+", "+item?.location?.city+", "+item?.location?.state} type={item?.type}
                                        date={new Date(item?.createdAt).toUTCString()} loan="Nil" status={item.status} remove='true' handleDelete={handleDelete}
                                        showDelete={showDelete} setPage={setPage}/>
                                </div>
                            )
                        })}
                    </>
                )}
                </>}


            {position==='rent' && <>
                {!isLoading && (
                    <>
                        {data.data.properties.filter((item: any) => item?.type === "Rent").map((item: any) => {
                            return( 
                                <div key={item._id} className={styles.myPropsHolder}>
                                    <MyProperties click={item._id}  img={item?.imagesURLs[0]} description={item?.name} price={(item?.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                                        agent={item?.uploadedBy?.username} location={item?.location?.address+", "+item?.location?.city+", "+item?.location?.state} type={item?.type}
                                        date={new Date(item?.createdAt).toUTCString()} loan="Nil" status={item.status} remove='true' handleDelete={handleDelete}
                                        showDelete={showDelete} setPage={setPage}/>
                                </div>
                            )
                        })}
                    </>
                )}
            </>} 

            {position==='buy' && <>
                {!isLoading && (
                    <>
                        {data.data.properties.filter((item: any) => item?.type === "Buy").map((item: any) => {
                            return( 
                                <div key={item._id} className={styles.myPropsHolder}>
                                    <MyProperties click={item._id}  img={item?.imagesURLs[0]} description={item?.name} price={(item?.price).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")} 
                                        agent={item?.uploadedBy?.username} location={item?.location?.address+", "+item?.location?.city+", "+item?.location?.state} type={item?.type}
                                        date={new Date(item?.createdAt).toUTCString()} loan="Nil" status={item.status} remove='true' handleDelete={handleDelete}
                                        showDelete={showDelete} setPage={setPage}/>
                                </div>
                            )
                        })}
                    </>
                )}
            </>}  

        </div>
    )
}