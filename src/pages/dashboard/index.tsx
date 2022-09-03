import React, { useState } from "react"
import { NextPage } from "next"
import { DashboardSideNav, FileCount } from "../../components"
import { DashboardHome } from "../../components/DashboardHome"
import { Property } from "../../components/Property"



const Dashboard: NextPage = () => {
    const [page, setPage] = useState('dashboard')

    return (
        <div>
            <DashboardSideNav page={page} setPage={setPage}>
                {page==='dashboard' && <DashboardHome />}
                {page === 'property' && <Property />}
            </DashboardSideNav>
        </div>
    )
}

export default Dashboard