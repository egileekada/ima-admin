import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout"; 
import DashboardBooking from "../../components/DashboardBooking";

const Index: NextPage = () => {
  return (
    <Layout>
      <DashboardBooking />
    </Layout>
  );
};

export default Index; 
