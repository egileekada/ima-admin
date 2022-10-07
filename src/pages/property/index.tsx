import { NextPage } from "next";
import { Property } from "../../components/Property";
import { Layout } from "../../layout";

const Index: NextPage = () => {
  return (
    <Layout>
      <Property setPage={() => {}} />
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
