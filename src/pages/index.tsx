import { NextPage } from "next"
import { motion } from 'framer-motion'
import Image from "next/image";
import { useFormik } from 'formik'; 
import * as yup from 'yup'
import React from "react"
import styles from './login/index.module.css'
import { BASEURL } from "../BasicUrl/Url"; 
import * as axios from 'axios'  
import { setCookie } from "cookies-next";
import { useRouter } from "next/router";
import Modal from "../components/modal"


const Login: NextPage = () => {


 
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);
    const [loading, setLoading] = React.useState(false);   

    const loginSchema = yup.object({ 
        email: yup.string().required('Required'),
        password: yup.string().required('Required') 
    }) 

    // formik
    const formik = useFormik({
        initialValues: {email: '', password: ''},
        validationSchema: loginSchema,
        onSubmit: () => {},
    });  
    const router = useRouter(); 
    
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
        
                const request = await axios.default.post(`${BASEURL.URL}/auth/admin-login`, formik.values, {
                    headers: { 'content-type': 'application/json', 
                }})    
                setCookie("token", request.data.data.token);
                    
                setMessage(request.data.ststus)
                setModal(1)  
                const t1 = setTimeout(() => {
                  router.push("/dashboard");
                    clearTimeout(t1); 
                }, 2000);   
                
            } catch (error: any) {  
                
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
                        <input
                            name="email"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("email", true, true)
                            } type='text' placeholder='Enter your email' /> 
                        <div className="w-full h-auto pt-2">
                            {formik.touched.email && formik.errors.email && (
                                <motion.p
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.email}
                                </motion.p>
                            )}
                        </div> 
                    </div>

                    <div className={styles.inputHolder} style={{marginTop: '24px'}}>
                        <label htmlFor='Email'>Password</label>
                        <input 
                            name="password"
                            onChange={formik.handleChange}
                            onFocus={() =>
                                formik.setFieldTouched("password", true, true)
                            } 
                            type="password" placeholder='Enter your password' required />
                    
                        <div className="w-full h-auto pt-2">
                            {formik.touched.password && formik.errors.password && (
                                <motion.p
                                    initial={{ y: -50, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    className="text-xs font-Ubuntu-Medium text-[#ff0000]"
                                >
                                    {formik.errors.password}
                                </motion.p>
                            )}
                        </div> 
                    </div>

                    <div className={styles.loginHolder}>
                        <button onClick={()=> submit()} >{loading  ? "Loading..":"Log in"}</button>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Login