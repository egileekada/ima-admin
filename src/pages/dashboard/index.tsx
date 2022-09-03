import React from "react"
import { NextPage } from "next"
import { DashboardSideNav, FileCount } from "../../components"
import { DashboardHome } from "../../components/DashboardHome"
import DashboardListing from "../../components/DashboardListing"
import Navbar from "../../components/Navbar"



const Dashboard: NextPage = () => {
    return (
        <div>
            <DashboardSideNav> 
                <Navbar />
                {/* <DashboardHome /> */}
                <DashboardListing />
            </DashboardSideNav>
        </div>
    )
}

export default Dashboard