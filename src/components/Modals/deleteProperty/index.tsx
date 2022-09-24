import React from "react"
import Image from 'next/image'
import styles from './index.module.css'
import Modal from "../../modal";
import { getCookie } from "cookies-next";


export function DeleteProperty(props: any){ 

    const [loading, setLoading] = React.useState(false)
    const [message, setMessage] = React.useState('');
    const [modal, setModal] = React.useState(0);

    console.log(props.click);
    

    const Delete = async () => {
     
        setLoading(true);
        const request = await fetch(`https://hospital-memo-api.herokuapp.com/properties/${props.click}`, {
            method: 'DELETE',
            headers: {
            'Content-Type': 'application/json',
            Authorization : `Bearer ${getCookie("token")}`
            },
            // body: JSON.stringify(formik.values),
        });

        const json = await request.json();

        console.log(request.status)
        // console.log(json)
        if (request.status === 200) {    
            console.log(json.user.role)     
            setMessage('Login Successful')
            setModal(1)
            const t1 = setTimeout(() => { 
                setModal(0) 
                clearTimeout(t1);
                setLoading(false);
            }, 3000); 
        }else {
            // alert('Incorrect Email Or Password');
            console.log(json)  
                setMessage(json.error.message)
                setModal(2)
            const t1 = setTimeout(() => {
                setLoading(false);
                setModal(0)
                clearTimeout(t1);
            }, 3000);  
        } 
    }  

    return(
        <> 
            {!props.show && ( 
                <div className={styles.mainWrapper} >
                    <Modal message={message} modal={modal} />
                        <div>
                            <div className={styles.white}>
                                <div className={styles.whiteTop}>
                                    <p style={{fontWeight:600}}>Delete Property</p>
                                    <div onClick={()=> props.handleDelete()} style={{cursor:'pointer'}}><Image src='/images/close.png' width={11} height={11} alt='close'/></div>
                                </div>
                                <p className={styles.whiteMiddle}>Do you want to delete this property?</p>
                                <div className={styles.whiteBottom}>
                                    <button onClick={()=> Delete()} >{loading ? "loading..": "Yes"}</button>
                                    {/* <button onClick={()=> props.handleDelete()}>Cancel</button> */}
                                </div>
                            </div>
                        </div>
                </div>
            )}
            {props.show && (
                <div className=' w-full fixed flex justify-center items-center inset-0 bg-black bg-opacity-30 z-50 ' > 
                    <div>
                        <div className={styles.white}>
                            <div className={styles.whiteTop}>
                                <p style={{fontWeight:600}}>Delete Property</p>
                                <div onClick={()=> props.handleDelete(false)} style={{cursor:'pointer'}}><Image src='/images/close.png' width={11} height={11} alt='close'/></div>
                            </div>
                            <p className={styles.whiteMiddle}>Do you want to delete this property?</p>
                            <div className={styles.whiteBottom}>
                                <button onClick={()=> Delete()} >{loading ? "loading..": "Yes"}</button>
                                <button onClick={()=> props.handleDelete(false)}>Cancel</button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>

    )
}