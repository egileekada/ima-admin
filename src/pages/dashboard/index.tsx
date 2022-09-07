import React, { useState } from "react";
import { NextPage } from "next";
import { DashboardHome } from "../../components/DashboardHome";
import { Layout } from "../../layout";

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
