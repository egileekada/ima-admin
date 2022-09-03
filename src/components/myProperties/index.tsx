import React from "react";
import Image from 'next/image'
import styles from './index.module.css'
import { DeleteProperty } from "../Modals/deleteProperty";

export function MyProperties({img, description, price, agent, location, type, date, loan, status, remove, handleDelete, showDelete}:
    {img: string, description:string, price:string, agent:string, location:string, type:string,
    date:string, loan:string, status:string, remove:string, handleDelete:any, showDelete:any}){
    return(
        <ul className={styles.propertyList}>
            <li>
                <input type='checkbox'></input>
                <div style={{display:'flex', alignItems:'center', columnGap:'8px'}}>
                    <div><Image src={img} width={48} height={48} alt='property'/></div>
                    <div>
                        <p>{description}</p>
                        <p>{`N${price}`}</p>
                    </div>
                </div>
            </li>

            <li>{agent}</li>

            <li>{location}</li>

            <li>
                <button className={type==='Buy'? styles.listButton1: styles.listButton2}>{type}</button>
            </li>

            <li>{date}</li>

            <li>{loan}</li>

            <li>{status}</li>

            <li>
                {showDelete && <DeleteProperty handleDelete={handleDelete} />}
                <p style={{fontWeight:700, color:'#0984D6', cursor:'pointer'}}>View</p>
                {remove==='true' && <div style={{cursor:'pointer'}} onClick={handleDelete}>
                    <Image src='/images/remove.png' width={14} height={18} alt='remove'/>
                </div>}
            </li>
        </ul>
    )
}