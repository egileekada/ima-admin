import React, { useState } from "react"
import { NextPage } from "next"
import { DashboardSideNav, FileCount } from "../../components"
import { DashboardHome } from "../../components/DashboardHome"
import { Property } from "../../components/Property"
import DashboardListing from "../../components/DashboardListing"
import Navbar from "../../components/Navbar"



const Dashboard: NextPage = () => {
    const [page, setPage] = useState('dashboard')

    return (
        <div>
            <DashboardSideNav page={page} setPage={setPage}>
                <Navbar />
                {page==='dashboard' && <DashboardHome />}
                {page === 'property' && <Property />}
                {page === 'listing' && <DashboardListing />}
            </DashboardSideNav>
        </div>
    )
}

export default Dashboard