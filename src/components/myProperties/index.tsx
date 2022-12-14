import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { DeleteProperty } from "../Modals/deleteProperty";
import Link from "next/link";
import Router from "next/router";

export function MyProperties({ 
  click,
  img,
  description,
  price,
  agent,
  location,
  type,
  date,
  loan,
  status,
  remove,
  handleDelete,
  showDelete,
  setPage
}: { 
  click: any;
  img: string;
  description: string;
  price: string;
  agent: string;
  location: string;
  type: string;
  date: string;
  loan: string;
  status: string;
  remove: string;
  handleDelete: any;
  showDelete: any;
  setPage: any;
}) {
  return (
    <ul className={styles.propertyList}>
      <li>
        {/* <Link href="/detail"> */}
          <a className=" flex items-center " >
            <input type="checkbox"></input>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "8px"
              }}
            >
              <div className=" w-12 ml-2 ">
                <img src={img} className='w-full h-12 object-cover' alt="property" />
              </div>
              <div>
                <p>{description}</p>
                <p>{`N${price}`}</p>
              </div>
            </div>
          </a>
        {/* </Link> */}
      </li>

      <li>{agent}</li>

      <li>{location}</li>

      <li>
        <button
          className={type === "Buy" ? styles.listButton1 : styles.listButton2}
        >
          {type}
        </button>
      </li>

      <li>{date}</li>

      <li>{loan}</li>

      <li>{status}</li>

      <li>
        {showDelete && <DeleteProperty handleDelete={handleDelete} click={click}/>}
        <p onClick={()=> {localStorage.setItem("propertyId", click), Router.push("/detail")}} style={{ fontWeight: 700, color: "#0984D6", cursor: "pointer" }}>
          View
        </p>
        {remove === "true" && (
          <div style={{ cursor: "pointer" }} onClick={handleDelete}>
            <Image
              src="/images/remove.png"
              width={14}
              height={18}
              alt="remove"
            />
          </div>
        )}
      </li>
    </ul>
  );
}
