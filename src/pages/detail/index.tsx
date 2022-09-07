import React, { useState } from "react";
import { NextPage } from "next";
import { Property } from "../../components/Property";
import { Layout } from "../../layout";
import { PropertyDetails } from "../../components/propertyDetails";

const Index: NextPage = () => {
  return (
    <Layout>
      <PropertyDetails />;
    </Layout>
  );
};

export default Index;
