import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout";
import DashboardWallet from "../../components/DashboardWallet";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardWallet />
    </Layout>
  );
};

export default Index; 
