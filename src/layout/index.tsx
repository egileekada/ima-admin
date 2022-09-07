import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { DashboardSideNav } from "../components";
import Navbar from "../components/Navbar";

import styles from "./index.module.css";

export const Layout = function ({ children }: { [x: string]: any }) {
  return (
    <DashboardSideNav>
      <Navbar />
      {children}
    </DashboardSideNav>
  );
};
