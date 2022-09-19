import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout";  
import CustomerCare from "../../components/CustomerCare";

const Index: NextPage = () => {
  return (
    <Layout>
      <CustomerCare />
    </Layout>
  );
};

export default Index; 
