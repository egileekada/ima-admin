import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout";
import DashboardLoan from "../../components/DashboardLoan";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardLoan />;
    </Layout>
  );
};

export default Index;