import React, { useState } from "react";
import { NextPage } from "next";
import { Property } from "../../components/Property";

const Index: NextPage = () => {
  return <Property setPage={() => {}} />;
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
