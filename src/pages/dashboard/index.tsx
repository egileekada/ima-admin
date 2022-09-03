import React from "react"
import { NextPage } from "next"
import { DashboardSideNav, FileCount } from "../../components"
import { DashboardHome } from "../../components/DashboardHome"
import { Property } from "../../components/Property"



const Dashboard: NextPage = () => {

    return (
        <div>
            <DashboardSideNav>
                <Property />
            </DashboardSideNav>
        </div>
    )
}

export default Dashboard