import React from "react"
import { NextPage } from "next"
import { DashboardSideNav } from "../../components"



const Dashboard: NextPage = () => {
    return (
        <div>
            <DashboardSideNav>
                <h1>Welcome</h1>
            </DashboardSideNav>
        </div>
    )
}

export default Dashboard