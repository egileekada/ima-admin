import React, { useState } from "react";
import Image from 'next/image'
import styles from './index.module.css'
import 'react-quill/dist/quill.snow.css'
import dynamic from 'next/dynamic'
const ReactQuill = dynamic(() => import("react-quill"), { ssr: false });

export function WriteBlog(){

    const [value, setValue] = useState('')

    const [blogData, setBlogData] = useState({title:'', image:'', data:''})

const handleClick = () => {
    console.log(value)
}

    return(
        <div>
            <div style={{marginTop:'48px'}} className={styles.myProperty}>
                <p>Blog <span style={{marginLeft:'50px', fontSize:'16px', color:'#101010'}}>Write Post</span></p>
                <input type='text' placeholder='Search by name'></input>
            </div>

            <div style={{marginTop: '82px', paddingInline:'25px 159px', cursor:'pointer'}}>
                <input type='text' placeholder='Post Title' required className={styles.postTitle}></input>
                <div className={styles.uploadBox}>
                    <Image src='/images/upload.png' width={55.6} height={50} alt='upload' />
                    <p className={styles.drop}>Drop file here or click to upload</p>
                    <p className={styles.file}>Video: MP4 or PNG, JPEG, JPG</p>
                </div>
                <div className={styles.area}>
                    <ReactQuill value={value} onChange={setValue} className={styles.editor}/>
                </div>
                <div className={styles.postHolder}><button onClick={handleClick}>Preview</button></div>
            </div>
        </div>
    )
}