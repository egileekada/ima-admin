import { NextPage } from "next";
import { Layout } from "../../layout";
import { Property } from "../../components/Property";

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
