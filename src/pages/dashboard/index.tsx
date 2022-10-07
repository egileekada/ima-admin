import React, { useState } from "react";
import { NextPage } from "next";
import { Layout } from "../../layout";
import { DashboardHome } from "../../components/DashboardHome";
import {BASEURL} from '../../BasicUrl/Url'
import { getCookie } from "cookies-next";
const axios = require('axios')

const Dashboard: NextPage = () => {
  const [page, setPage] = useState("detail");

  return (
    <Layout>
      <DashboardHome />
    </Layout>
  );
};

export default Dashboard;



{
  /* {page === "property" && <Property setPage={setPage} />} */
}
{
  /* {page === "listing" && <DashboardListing />} */
}
{
  /* {page === "original" && <DashboardImaOriginal />} */
}
{
  /* {page === "detail" && <PropertyDetails />} */
}
