import { NextPage } from "next"; 
import { Layout } from "../../layout";
import DashboardImaOriginal from "../../components/DashboardImaOriginal";

const Index: NextPage = () => {
  return ( 
    <Layout>
      <DashboardImaOriginal />;
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
