import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Circle, SideNav } from "../components";

import styles from "./index.module.css";

export const Layout = function ({ children }: { [x: string]: any }) {
  return (
    <div className={`${styles.container} flex`}>
      <SideNav />
      <main style={{ flex: 1, height: "100vh", overflow: "auto" }}>
        {children}
      </main>
    </div>
  );
};
