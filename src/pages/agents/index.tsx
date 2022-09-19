import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout"; 
import DashboardAgent from "../../components/DashboardAgent";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardAgent />
    </Layout>
  );
};

export default Index;