import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Circle, ProfileCard } from "../../components";
import { Layout } from "../../layout";
import styles from "./index.module.css";

const Profile: NextPage = () => {
  const [activePage, setActivePage] = useState(0);
  //@ts-ignore
  return (
    <Layout>
      <div className="flex" style={{ gap: 21 }}>
        <div className="bg-white br-16" style={{ flex: 0.7, padding: 13 }}>
          <h2 style={{ padding: "8px 37px 8px 37px" }} className="f20 fw700">
            Users
          </h2>
          <div>
            <ul
              className="flex justify-between"
              style={{
                padding: "16px 20px",

                display: "grid",
                gridTemplateColumns: "0.4fr repeat(3,1fr) 0.5fr"
              }}
            >
              <li
                className="f14 fw700"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                ID
              </li>

              <li
                className="f14 fw700"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                User
              </li>
              <li
                className="f14 fw700"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                Phone
              </li>
              <li
                className="f14 fw700"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                Email
              </li>
              <li
                className="f14 fw700"
                style={{ color: "rgba(102, 102, 102, 1)" }}
              >
                Action
              </li>
            </ul>
            <ul>
              {[1, 2, 3, 4, 5].map((user, idx) => (
                <li>
                  <ul
                    className="flex justify-between"
                    style={{
                      padding: "16px 20px",
                      backgroundColor:
                        idx % 2 == 0 ? "rgba(243, 242, 243, 1)" : "transparent",
                      display: "grid",
                      gridTemplateColumns: "0.4fr repeat(3,1fr) 0.5fr"
                    }}
                  >
                    <li
                      className="f14"
                      style={{ color: "rgba(102, 102, 102, 1)" }}
                    >
                      {`00${idx + 1}`}
                    </li>

                    <li
                      style={{ color: "rgba(9, 132, 214, 1)" }}
                      className="f14"
                    >
                      Precious Malamchy
                    </li>
                    <li
                      className="f14"
                      style={{ color: "rgba(102, 102, 102, 1)" }}
                    >
                      08067178608
                    </li>
                    <li
                      className="f14"
                      style={{ color: "rgba(102, 102, 102, 1)" }}
                    >
                      austine@gmail.com
                    </li>
                    <li>
                      <p
                        style={{ color: "rgba(9, 132, 214, 1)" }}
                        className="pointer fw700 f14"
                      >
                        View
                      </p>
                    </li>
                  </ul>
                </li>
              ))}
            </ul>
            <div style={{ marginTop: 71 }}>
              <div className="center">
                <ul className="flex" style={{ columnGap: 8 }}>
                  {[1, 2, "...", "9", "10"].map((page, idx) => (
                    <li
                      onClick={() => setActivePage(idx)}
                      style={{
                        width: 32,
                        height: 32,
                        borderRadius: 4,
                        border:
                          "1px solid " +
                          (idx === activePage
                            ? "rgba(9, 132, 214, 1)"
                            : "rgba(223, 227, 232, 1)")
                      }}
                      className="center pointer"
                    >
                      {page}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div style={{ flex: 0.3 }}>
          <ProfileCard style={{ width: "100%" }} />
        </div>
      </div>
    </Layout>
  );
};

export default Profile;
