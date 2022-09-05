import React, { useState } from "react"
import { NextPage } from "next"
import { DashboardSideNav, FileCount } from "../../components"
import { DashboardHome } from "../../components/DashboardHome"
import { Property } from "../../components/Property"
import DashboardListing from "../../components/DashboardListing"
import Navbar from "../../components/Navbar"
import DashboardImaOriginal from "../../components/DashboardImaOriginal"
import { PropertyDetails } from "../../components/propertyDetails"



const Dashboard: NextPage = () => {
    const [page, setPage] = useState('detail')

    return (
        <div>
            <DashboardSideNav page={page} setPage={setPage}>
                <Navbar />
                {page==='dashboard' && <DashboardHome />}
                {page === 'property' && <Property setPage={setPage}/>}
                {page === 'listing' && <DashboardListing />}
                {page === 'original' && <DashboardImaOriginal />}
                {page === 'detail' && <PropertyDetails />}
            </DashboardSideNav>
        </div>
    )
}

export default Dashboard