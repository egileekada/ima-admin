
import { NextPage } from "next";
import { Layout } from "../../layout";
import DashboardListing from "../../components/DashboardListing";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardListing />
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
