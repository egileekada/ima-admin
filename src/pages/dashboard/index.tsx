import React, { useState } from "react";
import { NextPage } from "next";
import { DashboardHome } from "../../components/DashboardHome";

const Dashboard: NextPage = () => {
  const [page, setPage] = useState("detail");

  return <DashboardHome />;
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
