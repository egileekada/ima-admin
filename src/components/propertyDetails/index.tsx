import React from "react";
import Image from 'next/image'
import styles from './index.module.css'


export function PropertyDetails(){
    return(
        <div>
            <div style={{marginTop:'48px'}} className={styles.myProperty}>
                <p>Property - detail</p>
                <input type='text' placeholder='Search'></input>
            </div>

            <div className={styles.differentContainers}>
                <div className={styles.details}>
                    <p>Property Details</p>
                    <p>3 Bedroom Semi-Detached Bungalow For Rent</p>
                </div>
                <p>Approved</p>
            </div>

            <section className={styles.mainSection}>
                <div className={styles.sectionLeft}>
                    <div>
                        <p>Rent</p>
                        <p style={{fontWeight:500, fontSize:'15px', marginTop:'10px'}}>N1,000,000</p>
                    </div>

                    <div className={styles.left2}>
                        <Image src='/images/avatar2.png' width={80} height={80} alt='avatar' style={{borderRadius:'50%'}}/>
                        <p className={styles.name}>Austine George</p>
                        <div style={{display:'flex', alignItems:'center', columnGap:'7px'}}>
                            <Image src='/images/Approval.png' width={20} height={20} alt='approved'/>
                            <p>Verified Agent</p>
                        </div>
                        <p className={styles.number}>08192308934</p>
                        <p className={styles.email}>johndoe@gmail.com</p>
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
                            <p>Swimming Pool</p>
                            <p>POP Ceiling</p>
                            <p>PVC Ceiling</p>
                            <p>Tiled Floor</p>
                            <p>Fenced</p>
                            <p>Parking Space</p>
                        </div>
                    </div>
                </div>
                <div className={styles.sectionRight}>
                    <div className={styles.firstRight}>
                        <div style={{borderRadius:'10px'}}><Image src='/images/detailPicture.png' width={545} height={367} alt='cover'/></div>
                        <p>3 Bedroom Semi-Detached Bungalow For Sale</p>
                        <div className={styles.right} style={{display:'flex', columnGap:'5px', alignItems:'center', marginTop:'6px'}}>
                            <Image src='/images/Location.png' width={25} height={15} alt='venue'/>
                            <p>Lokogoma District, Abuja, Lokogoma, FCT-Abuja</p>
                        </div>
                        <div className={styles.right} style={{display:'flex', columnGap:'37px', marginTop:'19px'}}>
                            <p>3 bedrooms</p>
                            <p>4 bath</p>
                            <p>Bungalow</p>
                        </div>

                        <div className={styles.description}>
                            <p>Description</p>
                            <p>"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
                                veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                                consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore
                                eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                                sunt in culpa qui officia deserunt mollit anim id est laborum."</p>
                        </div>
                    </div>
                    <div className={styles.photosWrapper}>
                        <p>Photos</p>
                        <div>
                            <Image src='/images/Photo1.png' width={150} height={150}/>
                            <Image src='/images/Photo2.png' width={150} height={150}/>
                            <Image src='/images/Photo1.png' width={150} height={150}/>
                            <Image src='/images/Photo2.png' width={150} height={150}/>
                            <Image src='/images/Photo1.png' width={150} height={150}/>
                            <Image src='/images/Photo2.png' width={150} height={150}/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}