import React from 'react' 
import styles from '../index.module.css' 
export default function Index() {

    const [tab, setTab] = React.useState(0)

    return (
        <div>
            <div className=' flex items-center my-6 ' > 
                <button onClick={()=> setTab(0)} style={tab === 0 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: { }} className={tab == 0 ? ' w-32 mr-4  ' : ' w-32 mr-4 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Add Image</p>
                </button>
                <button onClick={()=> setTab(1)} style={tab === 1 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {}} className={tab == 1 ? ' w-32 mx-4  ' : ' w-32 mx-4 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >All Images</p>
                </button>
                <button onClick={()=> setTab(2)} style={tab === 2 ? {borderBottom: "2px solid #0984D6 ", color: "#0984D6"}: {}} className={tab == 2 ? ' w-36 mx-4 ' : ' w-36 mx-4 border-opacity-50'} >
                    <p className={styles.MontserratSemiBold} >Remove Image </p>
                </button>
            </div>
            <div className=' w-full p-6 py-8 h-full border border-black rounded-md  ' >

                {tab === 0 && 
                    <div className=' w-fit ' > 
                        <p style={{fontFamily: "Inter", fontWeight: "600"}} >Upload Photo </p>
                        <input className=' border border-black rounded-md w-[600px] h-12 py-2 px-4 mt-2 mb-6 '  type="file" />
                        <div className=' flex items-center ' >
                            <div className=' w-28 mr-3 text-sm ' > 
                                <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                            </div>
                            <div className=' w-28 mx-3  text-sm ' > 
                                <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                            </div>
                            <div className=' w-28 mx-3  text-sm ' > 
                                <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                                <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                            </div>
                        </div>
                        <button className=' w-36 h-11 mt-12 text-white rounded-md bg-[#0984D6]  '  style={{fontFamily: "Montserrat", fontWeight: "700"}} >Publish</button>
                    </div>
                }
                {tab === 1 && 
                    <div className=' flex items-center ' >
                        <div className=' w-28 mr-3 text-sm ' > 
                            <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                            <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                            <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                        </div>
                        <div className=' w-28 mx-3  text-sm ' > 
                            <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                            <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                            <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                        </div>
                        <div className=' w-28 mx-3  text-sm ' > 
                            <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                            <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                            <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                        </div>
                    </div>
                }

                {tab === 2 && 
                    <div className=' w-fit ' > 
                        <p style={{fontFamily: "Inter", fontWeight: "400"}} >Select the images to be deleted</p>
                        <div className=' flex items-center mt-4 ' >
                            <div className=' w-fit mr-3 text-sm ' >   
                                <div className=' flex items-start ' >
                                    <input type="checkbox" />
                                    <div className=' ml-2' > 
                                        <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                                        <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                                        <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-fit mx-3  text-sm ' >  
                                <div className=' flex items-start ' >
                                    <input type="checkbox" />
                                    <div className=' ml-2' > 
                                        <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                                        <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                                        <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                                    </div>
                                </div>
                            </div>
                            <div className=' w-fit mx-3  text-sm ' >    
                                <div className=' flex items-start ' >
                                    <input type="checkbox" />
                                    <div className=' ml-2' > 
                                        <div className=' w-28 h-20 bg-red-700 mb-4 ' />
                                        <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >Ima banner </p>
                                        <p style={{fontFamily: "Montserrat", fontWeight: "400"}} >27/08/2022 3pm</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button className=' w-36 h-11 mt-12 text-white rounded-md bg-[#FF333F]  '  style={{fontFamily: "Montserrat", fontWeight: "700"}} >Delete</button>
                    </div>
                }
            </div>
        </div>
    )
}
