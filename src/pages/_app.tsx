import "../styles/globals.css";
import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
import { DashboardSideNav } from "../components";
import Navbar from "../components/Navbar";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <DashboardSideNav page="dashboard">
      <>
        <Navbar />
        <Component {...pageProps} />
      </>
    </DashboardSideNav>
  );
}

export default MyApp;
