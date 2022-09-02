import React from "react"
import { NextPage } from "next"
import { DashboardSideNav, FileCount } from "../../components"
import { DashboardHome } from "../../components/DashboardHome"



const Dashboard: NextPage = () => {
    return (
        <div>
            <DashboardSideNav>
                <DashboardHome />
            </DashboardSideNav>
        </div>
    )
}

export default Dashboard