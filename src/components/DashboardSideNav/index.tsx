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
import {MdDashboard} from "react-icons/md"



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
    <div className={styles.mainWrapper}>
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
            {page === "dashboard" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <MdDashboard style={page === "dashboard" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "dashboard" ? color : {}}>Dashboard</p>
            {page === "dashboard" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={
              page === "property" ? backgroundStyle : {}
            }
            onClick={() => setPage("property")}
          >
            {(page === "property") && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
              <BsHouseFill style={page === "property" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "property" ? color : {}}>
              Property
            </p>
            {(page === "property") && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "listing" ? backgroundStyle : {}}
            onClick={() => setPage("listing")}
          >
            {page === "listing" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <FaUserClock style={page === "listing" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "listing" ? color : {}}>Listing</p>
            {page === "listing" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "original" ? backgroundStyle : {}}
            onClick={() => setPage("original")}
          >
            {page === "original" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <FaUserAlt style={page === "original" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "original" ? color : {}}>Ima Original</p>
            {page === "original" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "users" ? backgroundStyle : {}}
            onClick={() => setPage("users")}
          >
            {page === "users" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <FaUsers style={page === "users" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "users" ? color : {}}>Users</p>
            {page === "users" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "agents" ? backgroundStyle : {}}
            onClick={() => setPage("agents")}
          >
            {page === "agents" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <FaUsers style={page === "agents" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "agents" ? color : {}}>Agents</p>
            {page === "agents" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "wallet" ? backgroundStyle : {}}
            onClick={() => setPage("wallet")}
          >
            {page === "wallet" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <BiWallet style={page === "wallet" ? color : {color:'#fff', width:'18px', height:'18px'}} />

            </div>
            <p style={page === "wallet" ? color : {}}>Wallet</p>
            {page === "wallet" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "loan" ? backgroundStyle : {}}
            onClick={() => setPage("loan")}
          >
            {page === "loan" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <RiMoneyDollarCircleLine style={page === "loan" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "loan" ? color : {}}>Loan</p>
            {page === "loan" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "bookings" ? backgroundStyle : {}}
            onClick={() => setPage("bookings")}
          >
            {page === "bookings" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <AiFillBook style={page === "bookings" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "bookings" ? color : {}}>Bookings</p>
            {page === "bookings" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "messages" ? backgroundStyle : {}}
            onClick={() => setPage("messages")}
          >
            {page === "messages" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <BiMessageDots style={page === "messages" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "messages" ? color : {}}>Messages</p>
            {page === "messages" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "blog" ? backgroundStyle : {}}
            onClick={() => setPage("blog")}
          >
            {page === "blog" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <ImUsers style={page === "blog" ? color : {color:'#fff', width:'18px', height:'18px'}} />

            </div>
            {page === "blog" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <p style={page === "blog" ? color : {}}>Blog</p>
          </li>

          <li
            className={styles.dashboardList}
            style={page === "settings" ? backgroundStyle : {}}
            onClick={() => setPage("settings")}
          >
            {page === "settings" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
              <Image
                src="/images/dashboard.png"
                width={15}
                height={15}
                alt="icon"
              />
            </div>
            <p style={page === "settings" ? color : {}}>Settings</p>
            {page === "settings" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "referral" ? backgroundStyle : {}}
            onClick={() => setPage("referral")}
          >
            {page === "referral" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <RiNodeTree style={page === "referral" ? color : {color:'#fff', width:'18px', height:'18px'}} />

            </div>
            <p style={page === "referral" ? color : {}}>Referral</p>
            {page === "referral" && (
              <div className={styles.curve2}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
          </li>

          <li
            className={styles.dashboardList}
            style={page === "customer" ? backgroundStyle : {}}
            onClick={() => setPage("customer")}
          >
            {page === "customer" && (
              <div className={styles.curve}>
                <Image src="/images/roundTop.png" width={25} height={25} />
              </div>
            )}
            <div>
            <FaUserNinja style={page === "referral" ? color : {color:'#fff', width:'18px', height:'18px'}} />
            </div>
            <p style={page === "customer" ? color : {}}>Customer Care</p>
            {/* {page==='customer'&&<div className={styles.curve2}><Image src='/images/roundTop.png' width={25} height={25}/></div>} */}
          </li>
        </ul>
      </div>

      <div className={styles.whiteWrapper}>{children}</div>
    </div>
  );
}
