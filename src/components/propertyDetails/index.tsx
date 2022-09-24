import React from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { useQuery } from "@tanstack/react-query";
import { BASEURL } from "../../BasicUrl/Url";
import { getCookie } from "cookies-next";
import Router from "next/router";

export function PropertyDetails() {
  
  // const Id = localStorage.getItem("propertyId")+""

  const [index, setIndex] = React.useState("")


  React.useEffect(()=>{
      if(localStorage.getItem("propertyId")){
        setIndex(localStorage.getItem("propertyId")+"")
      } else {
          localStorage.setItem("propertyId", "0")
      }
  },[index])

  const { isLoading, data } = useQuery(['propertiesdetails'+index], () =>
    fetch(`${BASEURL.URL}/properties/${index}`, {
        method: 'GET', // or 'PUT'
        headers: {
            'Content-Type': 'application/json', 
            Authorization : `Bearer ${getCookie("token")}`
        }
    }).then(res =>
        res.json()
    )
  )     

  return (
    <>

      {!isLoading && (

        <div>
          <div style={{ marginTop: "48px" }} className={styles.myProperty}>
            <div style={{fontFamily: "Montserrat", fontWeight: "600"}} className=" flex items-center " >
              <button onClick={()=> Router.back()} className=" bg-[#0984D6] py-1 mr-3 rounded-lg px-4 text-white " >back</button>
              <p>{"Property - detail"}</p>
            </div>
            <input type="text" placeholder="Search"></input>
          </div>

          <div className={styles.differentContainers}>
            <div className={styles.details}>
              <p>{"Property Details"}</p>
              <p>{data?.data?.name} {data?.data?.type === "Buy" ? "For Sale":"For Rent"}</p>
            </div>
            <p>Approved</p>
          </div>

          <section className={styles.mainSection}>
            <div className={styles.sectionLeft}>
              <div>
                <p>{data?.data?.type}</p>
                <p style={{ fontWeight: 500, fontSize: "15px", marginTop: "10px" }}>
                ₦{(data?.data?.price)?.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}
                </p>
              </div>

              <div style={{paddingLeft: "10px", paddingRight: "10px"}} className={styles.left2}>
                <img className=" w-24 h-24 rounded-3xl " src={data?.data?.imagesURLs[0]} />
                {/* <Image
                  src="/images/avatar2.png"
                  width={80}
                  height={80}
                  alt="avatar"
                  style={{ borderRadius: "50%" }}
                /> */}
                <p className={styles.name}>{data?.data?.uploadedBy?.username}</p>
                {data?.data?.uploadedBy?.isVerified && (

                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      columnGap: "7px"
                    }}
                    > 
                    <Image
                      src="/images/Approval.png"
                      width={20}
                      height={20}
                      alt="approved"
                    />
                    <p>Verified Agent</p>
                  </div>
                )}
                <p className={styles.number}>{data?.data?.uploadedBy?.phone}</p>
                <p className={styles.email}>{data?.data?.uploadedBy?.email}</p>
              </div>

              <div className={styles.left3}>
                <p>Property Location</p>
              </div>

              <div className={styles.left3}>
                <p>Other Property</p>
              </div>

              <div className={styles.left4}>
                <p>Amenities</p>
                <div>
                  {data?.data?.amenities.map((item: any)=> {
                    return(
                      <p key={item} >{item}</p>
                    )
                  })}
                  {/* <p>Swimming Pool</p>
                  <p>POP Ceiling</p>
                  <p>PVC Ceiling</p>
                  <p>Tiled Floor</p>
                  <p>Fenced</p>
                  <p>Parking Space</p> */}
                </div>
              </div>
            </div>
            <div className={styles.sectionRight}>
              <div className={styles.firstRight}>
                <div style={{ borderRadius: "10px" }}>
                  <Image
                    src="/images/detailPicture.png"
                    width={545}
                    height={367}
                    alt="cover"
                  />
                </div>
                <p>{data?.data?.name} {data?.data?.type === "Buy" ? "For Sale":"For Rent"}</p>
                <div
                  className={styles.right}
                  style={{
                    display: "flex",
                    columnGap: "5px",
                    alignItems: "center",
                    marginTop: "6px"
                  }}
                >
                  <Image
                    src="/images/Location.png"
                    width={25}
                    height={15}
                    alt="venue"
                  />
                  <p>{data?.data?.location?.address+", "+data?.data?.location?.city+", "+data?.data?.location?.state}</p>
                </div>
                <div
                  className={styles.right}
                  style={{ display: "flex", columnGap: "37px", marginTop: "19px" }}
                >
                  <p>{data?.data?.bedRooms} bedrooms</p>
                  <p>{data?.data?.bathRooms} bath</p>
                  <p>{data?.data?.subCategory}</p>
                </div>

                <div className={styles.description}>
                  <p>Description</p>
                  <p>{data?.data?.description}</p>
                </div>
              </div>
              <div className={styles.photosWrapper}>
                <p>Photos</p>
                <div className=" w-full grid-cols-2 grid gap-4  " >
                  {data?.data?.imagesURLs.map((item: any)=> {
                    return(
                      <img key={item} src={item} className="w-full h-full object-cover rounded-lg" />
                    )
                  })}
                  {/* <Image src="/images/Photo1.png" width={150} height={150} />
                  <Image src="/images/Photo2.png" width={150} height={150} />
                  <Image src="/images/Photo1.png" width={150} height={150} />
                  <Image src="/images/Photo2.png" width={150} height={150} />
                  <Image src="/images/Photo1.png" width={150} height={150} />
                  <Image src="/images/Photo2.png" width={150} height={150} /> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      )}
    </>
  );
}
