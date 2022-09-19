import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout";  
import DashboardPackages from "../../components/DashboardPackages";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardPackages />
    </Layout>
  );
};

export default Index;