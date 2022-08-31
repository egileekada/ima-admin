import { NextPage } from "next"
import Image from "next/image";
import React from "react"
import styles from './index.module.css'


const Login: NextPage = () => {
    return(
        <div className={styles.mainWrapper}>
            <div className={styles.mainContainer}>
                <div className={styles.imageHolder}>
                    <img src='./images/loginCover.png' className={styles.img}></img>
                </div>

                <div className={styles.whiteSide}>
                    <div style={{display:'grid', placeItems:'center'}}>
                        <Image src="/images/logo-ima.svg" width={94} height={34} />
                    </div>

                    <p className={styles.panel}>Log In to Admin Panel</p>
                    <p className={styles.enter}>Enter your email and password below</p>
                    
                    <div className={styles.inputHolder} style={{marginTop: '50px'}}>
                        <label htmlFor='Email'>Email</label>
                        <input type='email' placeholder='Enter your email' required />
                    </div>

                    <div className={styles.inputHolder} style={{marginTop: '24px'}}>
                        <label htmlFor='Email'>Password</label>
                        <input type='password' placeholder='Enter your password' required />
                    </div>

                    <div className={styles.loginHolder}>
                        <button>Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login