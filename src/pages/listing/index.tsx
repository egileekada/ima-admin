import React, { useState } from "react";
import { NextPage } from "next";
import DashboardListing from "../../components/DashboardListing";
import { Layout } from "../../layout";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardListing />;
    </Layout>
  );
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
