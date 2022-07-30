import { NextPage } from "next";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { Circle } from "../../components";
import { Layout } from "../../layout";
import styles from "./index.module.css";

const Profile: NextPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  //@ts-ignore
  return (
    <Layout>
      <section
        style={{
          height: "100vh",

          flex: 1
        }}
      >
        <div className="flex">
          <div style={{ flex: 1 }}>
            <div className="flex" style={{ flex: 1 }}>
              <ProfileCard />
              <div style={{ padding: "0 17px", width: "100%" }}>
                <Summary />
                <Bookings />
              </div>
            </div>
            <section
              className="bg-white br-16"
              style={{ marginTop: 33, marginRight: 17 }}
            >
              <h2
                style={{ padding: "21px 37px 8px 37px" }}
                className="f20 fw700"
              >
                Active Listings
              </h2>
              <ul>
                {[1, 3].map((propt, idx) => (
                  <li
                    key={idx}
                    style={{
                      padding: "20px 36px",
                      borderTop: "1px solid rgba(217, 217, 217, 1)",
                      columnGap: 24,
                      borderBottom:
                        idx == 1 ? "1px solid rgba(217, 217, 217, 1)" : "none"
                    }}
                    className="flex"
                  >
                    <div>
                      <Image
                        src="/images/propty.svg"
                        width={150}
                        height={220}
                      />
                    </div>
                    <div>
                      <h3
                        className="fw700 f20"
                        style={{ color: "rgba(9, 132, 214, 1)" }}
                      >
                        3 Bedroom Semi-Detached Bungalow For Sale
                      </h3>
                      <div style={{ width: 267 }}>
                        <p
                          style={{
                            marginTop: 10,
                            color: "rgba(111, 111, 111, 1)"
                          }}
                          className="f15"
                        >
                          Lokogoma District, Abuja, Lokogoma, FCT-Abuja
                        </p>
                      </div>
                      <h3
                        className="fw700 f20"
                        style={{ color: "rgba(9, 132, 214, 1)", marginTop: 30 }}
                      >
                        250,000
                      </h3>
                    </div>
                  </li>
                ))}
              </ul>
              <div className="center" style={{ padding: 18 }}>
                <Link href="#">
                  <a
                    className="fw700 f20"
                    style={{ color: "rgba(9, 132, 214, 1)" }}
                  >
                    View All
                  </a>
                </Link>
              </div>
            </section>
          </div>

          <div style={{ height: 200, width: 250 }}>
            <section
              className="bg-white br-16"
              style={{
                border: "1px solid rgba(111, 111, 111, 0.2)",
                marginBottom: 17
              }}
            >
              <div style={{}}>
                <h2 style={{ padding: 20 }} className="f20 fw700">
                  Agent Details
                </h2>
                <div style={{ padding: 20 }}>
                  <h4 className="f14">Identification</h4>
                  <div
                    style={{ height: 129, overflow: "hidden", marginTop: 13 }}
                    className="br-10"
                  >
                    <Image
                      src="/images/propty.svg"
                      width={"100%"}
                      height={"100%"}
                      objectFit="cover"
                      layout="responsive"
                    />
                  </div>
                </div>
              </div>

              <div style={{ padding: 20 }}>
                <h4 className="f14" onClick={() => setIsOpen(!isOpen)}>
                  Selfie Photo
                </h4>
                <div
                  style={{
                    height: true ? 175 : 0,
                    overflow: "hidden",
                    marginTop: 13
                  }}
                  className="br-10"
                >
                  <Image
                    src="/images/propty.svg"
                    width={"100%"}
                    height={"100%"}
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
              </div>
              <div style={{ padding: 20 }}>
                <h4 className="f14">Selfie Video</h4>
                <div
                  style={{ height: 175, overflow: "hidden", marginTop: 13 }}
                  className="br-10"
                >
                  <Image
                    src="/images/propty.svg"
                    width={"100%"}
                    height={"100%"}
                    objectFit="cover"
                    layout="responsive"
                  />
                </div>
              </div>
              <section style={{ paddingBottom: 80 }}>
                <div style={{ marginTop: 21, padding: "0 20px" }}>
                  <h3>CAC Certificate</h3>
                  <p style={{ marginTop: 13 }}>
                    <a
                      style={{
                        color: "rgba(1, 106, 174, 1)",
                        textDecoration: "underline"
                      }}
                    >
                      rockvillaCACCertificate.pdf
                    </a>
                  </p>
                </div>
              </section>
            </section>
            <div className="br-16 bg-white" style={{ padding: "21px 14px" }}>
              <h3
                className="f20 fw700 center-text"
                style={{ color: "#0C0507" }}
              >
                Files
              </h3>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Profile;

const Summary = () => {
  return (
    <div
      style={{
        marginBottom: 22,
        padding: "39px 23px",
        border: "1px solid rgba(111, 111, 111, 0.2)"
      }}
      className="bg-white br-16"
    >
      <ul
        className="br-16 bg-white"
        style={{
          gap: 16,
          display: "grid",
          gridTemplateColumns: "1fr 1fr"
        }}
      >
        {[1, 2, 3, 4].map((item, idx) => (
          <li
            key={idx}
            style={{
              padding: "26px 22px",
              height: 100,
              boxShadow: "0 2px 2px 2px #f3f3f3",
              border: "1px solid rgba(111, 111, 111, 0.2)"
            }}
            className="br-10"
          >
            <div>
              <h3 className="f20 fw700" style={{ color: "#6F6F6F" }}>
                1500
              </h3>
              <p className="f14" style={{ color: "#6F6F6F", marginTop: 6 }}>
                Revenue
              </p>
            </div>
            <div></div>
          </li>
        ))}
      </ul>
    </div>
  );
};

const ProfileCard = () => {
  return (
    <div
      style={{
        padding: 23,
        backgroundColor: "#fff",
        width: "fit-content",
        border: "1px solid rgba(111, 111, 111, 0.2)",
        borderRadius: 16
      }}
    >
      <div
        className="flex-col align-center"
        style={{ paddingTop: 40, marginBottom: 21 }}
      >
        <Circle
          style={{
            backgroundColor: "rgba(255,255,0,0.6)",
            marginBottom: 22
          }}
        >
          <Image
            src="/images/avatar.svg"
            alt="avatar"
            width="100%"
            height="100%"
          />
        </Circle>

        <h2 className="f14 fw700 center-text " style={{ marginBottom: 22 }}>
          George Smart
        </h2>
        <h3
          className="center-text f14"
          style={{
            padding: "6px 33px",
            backgroundColor: "rgba(235, 50, 35, 0.25)",
            borderRadius: 100,
            color: "rgba(235, 50, 35, 1)"
          }}
        >
          Premium
        </h3>
      </div>
      <div
        style={{
          paddingTop: 17,
          borderTop: "1px solid rgba(216, 216, 216, 1)"
        }}
      >
        <ul>
          {[
            { title: "Phone", value: "08192308934" },
            { title: "Email", value: "johndoe@gmail.com" },
            { title: "DOB", value: "12/12/2000" },
            { title: "Country", value: "Nigeria" },
            { title: "State", value: "Rivers" },
            { title: "Address", value: "15 Johnson Street" }
          ].map((item, idx) => (
            <li
              className="flex"
              key={idx}
              style={{ marginBottom: 20, padding: "0 8px" }}
            >
              <p
                style={{ width: 80, color: "rgba(111, 111, 111, 1)" }}
                className="f14"
              >
                {item.title} :
              </p>
              <p style={{ color: "rgba(111, 111, 111, 1)" }} className="f14">
                {item.value}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

const Bookings = () => (
  <div style={{ backgroundColor: "#fff" }} className="br-16">
    <h2 style={{ padding: "21px 37px 8px 37px" }} className="f20 fw700">
      Booking
    </h2>
    <ul>
      {[1, 2, 4, 5].map((booking, idx) => (
        <li
          key={idx}
          style={{
            padding: "21px 13px 12px 13px",
            borderTop: "1px solid rgba(217, 217, 217, 1)"
          }}
        >
          <ul
            className="flex justify-between align-center"
            style={{ columnGap: 16 }}
          >
            {[
              { title: "Esther John" },
              { title: "08089189078" },
              { title: "27-Jun-2022 8am" },
              {
                title: "View"
              }
            ].map((item, idx) => (
              <li
                key={idx}
                style={{ color: "rgba(111, 111, 111, 1)" }}
                className="f14"
              >
                {idx == 0 ? (
                  <Circle size={30}>
                    <Image src="/images/avatar.svg" width={30} height={30} />
                  </Circle>
                ) : (
                  item.title
                )}
              </li>
            ))}
          </ul>
        </li>
      ))}
    </ul>
  </div>
);
