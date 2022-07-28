import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Circle } from "../components";
import { pages } from "./pages";
import styles from "./index.module.css";
import { DashboardSVG } from "../assets";

export const Layout = function () {
  const [activeTab, setActiveTab] = useState(0);
  return (
    <div className={`${styles.container} fw700`}>
      <nav className={styles.nav}>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <div className="flex-col align-center" style={{ paddingTop: 40 }}>
            <Circle
              style={{
                backgroundColor: "rgba(255,255,0,0.6)",
                marginBottom: 24
              }}
            >
              <Image
                src="/images/avatar.svg"
                alt="avatar"
                width="100%"
                height="100%"
              />
            </Circle>

            <h2 className="f12 fw400 center-text" style={{ marginBottom: 5 }}>
              Welcome Back
            </h2>
            <h3 className="center-text">George Smith</h3>
          </div>
        </div>
        <ul className={styles.navItemWrapper}>
          {pages.map((tab, idx) => (
            <li style={{}} key={idx}>
              <Link href="#">
                <a
                  className={`${styles.navItem} flex align-center`}
                  onClick={() => setActiveTab(idx)}
                >
                  <div
                    style={{
                      width: 24,
                      height: 28,
                      marginRight: 8,
                      backgroundColor:
                        idx === activeTab
                          ? "rgba(249, 224, 246, 1)"
                          : "transparent"
                    }}
                    className="center"
                  >
                    {idx == activeTab ? tab.ActiveImage : tab.InActiveImage}
                    {/* fill={idx == 0 ? "#0C0507" : "#6F6F6F"}  */}
                  </div>
                  <p
                    style={{
                      color: idx === activeTab ? "#0C0507" : "#6F6F6F",
                      fontWeight: idx == activeTab ? "700" : "500"
                    }}
                  >
                    {tab.title}
                  </p>
                </a>
              </Link>
            </li>
          ))}
        </ul>

        <div style={{ padding: "0 26px" }}>
          <div
            style={{ padding: "28px 0", borderTop: "1px solid #0C0507" }}
          ></div>
        </div>
      </nav>
    </div>
  );
};
