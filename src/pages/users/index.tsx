import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout"; 
import DashboardUser from "../../components/DashboardUser";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardUser />
    </Layout>
  );
};

export default Index; 
