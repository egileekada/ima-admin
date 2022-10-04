import Image from "next/image";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { DashboardSideNav } from "../components";
import Navbar from "../components/Navbar";
import {BASEURL} from '../BasicUrl/Url'
import { getCookie } from "cookies-next";
const axios = require('axios')


import styles from "./index.module.css";

export const Layout = function ({ children }: { [x: string]: any }) {

  const [user, setUser] = useState({})

  useEffect(() => {
    const getUser = async() => {
      const token = getCookie('token')
      const userResponse = await axios.get(`${BASEURL.URL}/users/user`, {headers: {
        Authorization: `Bearer ${token}`
      }})
      setUser(userResponse.data.data)
    }
    getUser()
  },[])

  return (
    <DashboardSideNav user={user}>
      <Navbar user={user} />
      {children}
    </DashboardSideNav>
  );
};
