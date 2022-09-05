import React, { useState } from "react";
import Image from 'next/image'
import styles from './index.module.css'
import { MyProperties } from "../myProperties";


export function Property({setPage}:{setPage:any}){

const [position, setPosition] = useState('all')
const [showDelete, setShowDelete] = useState(false)

const handleDelete = () => {
    setShowDelete(prevState => !prevState)
}



const myStyle: object = {
    color: '#0984D6',
    borderBottom: '1.5px solid #0984D6'
}

    return(
        <div>
            <div style={{marginTop:'48px'}} className={styles.myProperty}>
                <p>Property</p>
                <input type='text' placeholder='Search'></input>
            </div>

            <div className={styles.differentContainers}>
                <p style={position==='all' ? myStyle: {} } onClick={() => setPosition('all')}>All Properties (5)</p>
                <p style={position==='rent' ? myStyle: {} } onClick={() => setPosition('rent')}>Rent (70)</p>
                <p style={position==='buy' ? myStyle: {} } onClick={() => setPosition('buy')}>Buy (10)</p>
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

            {position==='all' && <div className={styles.myPropsHolder}>
                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Buy"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='false' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>

                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Rent"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='false' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>

                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Buy"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='false' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>

                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Rent"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='false' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>
            </div>}

            {position ==='rent' && <div className={styles.myPropsHolder}>
                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Rent"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='true' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>

                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Rent"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='true' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>

                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Rent"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='true' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>
                </div>}


                {position ==='buy' && <div className={styles.myPropsHolder}>
                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Rent"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='true' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>

                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Rent"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='true' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>

                <MyProperties img='/images/recentImage1.png' description="1 bedroom" price="350,000" 
                agent="Prince David" location="East-West Road, Port Harcourt, Rivers State" type="Rent"
                date="27/08/2022 2:30pm" loan="Nil" status="active" remove='true' handleDelete={handleDelete}
                showDelete={showDelete} setPage={setPage}/>
                </div>}

        </div>
    )
}