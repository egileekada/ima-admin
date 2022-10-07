import React, { useEffect, useState } from "react";
import Image from "next/image";
import styles from "./index.module.css";
import { useRouter } from "next/router";
import {FaUserAlt, FaUserClock, FaUsers, FaUserNinja} from "react-icons/fa"
import {BsHouseFill} from "react-icons/bs"
import {BiWallet, BiMessageDots} from "react-icons/bi"
import {RiMoneyDollarCircleLine} from "react-icons/ri"
import {AiFillBook} from "react-icons/ai"
import {ImUsers} from "react-icons/im"
import {RiNodeTree} from "react-icons/ri"
import {MdDashboard, MdOutlineSettingsSuggest} from "react-icons/md"



export function DashboardSideNav({
  children, user
}: {
  [x: string]: any;
  page?: string;
  setPage?: any;
}) {
  const backgroundStyle: object = {
    backgroundColor: "#fff"
  };

  const color: object = {
    color: "#0984D6"
  };
  const router = useRouter();
  const [page, setPage] = useState(router.asPath.substr(1));

  useEffect(() => {
    router.push(page);
  }, [page]);


  return (
    <div  style={{ fontFamily: "Montserrat"}} className={styles.mainWrapper}>
      <div>
        <div className={styles.avatarWrapper}>
          <div className={styles.avatarBox} style={{padding:'8px'}}>
          {user?.avatar ? (<Image
              src="/images/profilePics.png"
              width={40}
              height={40}
              alt="avatar"
            />) : <FaUserAlt style={{color:'white', width:'100%', height:'100%'}} />}
          </div>
          <div className={styles.title}>
            <p>{user?.username}</p>
            <p>{user?.email}</p>
          </div>
        </div>
        <p className={styles.mainMenu}>MAIN MENU</p>

        <ul className={styles.dashboardUL}>
          <li
            className={styles.dashboardList}
            style={page === "dashboard" ? backgroundStyle : {}}
            onClick={() => setPage("dashboard")}
          >
            <div>
            <MdDashboard style={page === "dashboard" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "dashboard" ? color : {}}>Dashboard</p>
          </li>

          <li
            className={styles.dashboardList}
            style={
              page === "property" ? backgroundStyle : {}
            }
            onClick={() => setPage("property")}
          >
            <div>
              <BsHouseFill style={page === "property" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "property" ? color : {}}>
              Property
            </p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "listing" ? backgroundStyle : {}}
            onClick={() => setPage("listing")}
          >
            <div>
            <FaUserClock style={page === "listing" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "listing" ? color : {}}>Listing</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "original" ? backgroundStyle : {}}
            onClick={() => setPage("original")}
          >
            <div>
            <FaUserAlt style={page === "original" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "original" ? color : {}}>Ima Original</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "users" ? backgroundStyle : {}}
            onClick={() => setPage("users")}
          >
            <div>
            <FaUsers style={page === "users" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "users" ? color : {}}>Users</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "agents" ? backgroundStyle : {}}
            onClick={() => setPage("agents")}
          >
            <div>
            <FaUsers style={page === "agents" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "agents" ? color : {}}>Agents</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "wallet" ? backgroundStyle : {}}
            onClick={() => setPage("wallet")}
          >
            <div>
            <BiWallet style={page === "wallet" ? color : {color:'#fff', width:'18px', height:'18px'}} />

            </div>
            <p style={page === "wallet" ? color : {}}>Wallet</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "loan" ? backgroundStyle : {}}
            onClick={() => setPage("loan")}
          >
            <div>
            <RiMoneyDollarCircleLine style={page === "loan" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "loan" ? color : {}}>Loan</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "bookings" ? backgroundStyle : {}}
            onClick={() => setPage("bookings")}
          >
            <div>
            <AiFillBook style={page === "bookings" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "bookings" ? color : {}}>Bookings</p>
          </li>

          {/* <li
            className={styles.dashboardList}
            style={page === "messages" ? backgroundStyle : {}}
            onClick={() => setPage("messages")}
          >
            <div>
            <BiMessageDots style={page === "messages" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "messages" ? color : {}}>Messages</p>
          </li> */}

          <li
            className={styles.dashboardList}
            style={page === "blog" ? backgroundStyle : {}}
            onClick={() => setPage("blog")}
          >
            <div>
            <ImUsers style={page === "blog" ? color : {color:'#fff', width:'18px', height:'18px'}} />

            </div>
            <p style={page === "blog" ? color : {}}>Blog</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "settings" ? backgroundStyle : {}}
            onClick={() => setPage("settings")}
          >
            <div>
            <MdOutlineSettingsSuggest style={page === "settings" ? color : {color:'#fff', width:'18px', height:'18px'}} />

            </div>
            <p style={page === "settings" ? color : {}}>Settings</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "referral" ? backgroundStyle : {}}
            onClick={() => setPage("referral")}
          >
            <div>
            <RiNodeTree style={page === "referral" ? color : {color:'#fff', width:'18px', height:'18px'}} />

            </div>
            <p style={page === "referral" ? color : {}}>Referral</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "customer" ? backgroundStyle : {}}
            onClick={() => setPage("customer")}
          >
            <div>
            <FaUserNinja style={page === "referral" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "customer" ? color : {}}>Customer Care</p>
          </li>
        </ul>
      </div>

      <div className={styles.whiteWrapper}>{children}</div>
    </div>
  );
}
