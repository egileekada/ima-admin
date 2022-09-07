import React, { useState } from "react";
import { NextPage } from "next";
import DashboardListing from "../../components/DashboardListing";

const Index: NextPage = () => {
  return <DashboardListing />;
};

export default Index;

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
