import { NextPage } from "next"
import { motion } from 'framer-motion'
import Image from "next/image";
import { useFormik } from 'formik'; 
import * as yup from 'yup'
import React from "react"
import styles from './index.module.css'
import { BASEURL } from "../../BasicUrl/Url"; 
import * as axios from 'axios'  
import { getCookie } from "cookies-next";
import Router from "next/router";
import Modal from "../../components/modal"


const Login: NextPage = () => {
 
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const [loading, setLoading] = React.useState(false);   

    const loginSchema = yup.object({ 
        username: yup.string().required('Required'),
        password: yup.string().required('Required') 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {username: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    }); 
    

    const submit = async () => { 
        if (!formik.dirty) { 
          setMessage('You have to fill in th form to continue')
          setModal(2)           
          const t1 = setTimeout(() => {  
              setModal(0)       
              clearTimeout(t1);
          }, 2000); 
          return;
        }else if (!formik.isValid) { 
          setMessage('You have to fill in the form correctly to continue')
          setModal(2)           
          const t1 = setTimeout(() => {  
              setModal(0)       
              clearTimeout(t1);
          }, 2000); 
          return;
        }else {
            setLoading(true)
            try { 
        
                const request = await axios.default.post(`${BASEURL.URL}/auth/login`, formik.values, {
                    headers: { 'content-type': 'application/json', 
                }})   
                console.log(request);
                    
                setMessage('Loan On has been Processed submitted to the admin for approval')
                setModal(1)  
                const t1 = setTimeout(() => {    
                        Router.push("/")  
                    clearTimeout(t1); 
                }, 2000);   
                
            } catch (error: any) { 
                console.log(error.response.data.error.message);
                
                setMessage(error.response.data.error.message)
                setModal(2)           
                const t1 = setTimeout(() => {  
                    setModal(0)     
                    setLoading(false)  
                    clearTimeout(t1);
                }, 2000); 
                return error
            } 
            setLoading(false)
        }
    } 
    
    return(
        <div className={styles.mainWrapper}> 
            <Modal message={message} modal={modal} />
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
                        <input type='text' placeholder='Enter your email' />
                    </div>

                    <div className={styles.inputHolder} style={{marginTop: '24px'}}>
                        <label htmlFor='Email'>Password</label>
                        <input type='password' placeholder='Enter your password' required />
                    </div>

                    <div className={styles.loginHolder}>
                        <button onClick={()=> submit()} >Log in</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login