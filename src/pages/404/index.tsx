import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Layout } from "../../layout";
import styles from "./index.module.css";

const Profile: NextPage = () => {
  const [activePage, setActivePage] = useState(0);
  //@ts-ignore
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        height: "100vh"
      }}
    >
      <p>404</p>
      <p>Are you lost?</p>
      <Link href="/profile">
        <a style={{ textDecoration: "underline", color: "#0984D6" }}>
          Back to your Hood
        </a>
      </Link>
    </div>
  );
};

export default Profile;
