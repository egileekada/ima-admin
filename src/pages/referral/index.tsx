import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout"; 
import DashboardRefferals from "../../components/DashboardRefferals";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardRefferals />
    </Layout>
  );
};

export default Index; 
