import React, { useState } from "react";
import { NextPage } from "next"; 
import { Layout } from "../../layout";  
import Settings from "../../components/Settings";

const Index: NextPage = () => {
  return (
    <Layout>
      <Settings />
    </Layout>
  );
};

export default Index; 