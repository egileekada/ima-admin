import React from "react"
import Image from "next/image";
import styles from "./index.module.css"


export function FileCount(){
    return (
        <div>
            <div><Image src='/images/dashboard.png' width={25} height={25}/></div>
            <div>
                <p>10,000</p>
                <p>Total Property</p>
            </div>
        </div>
    )
}