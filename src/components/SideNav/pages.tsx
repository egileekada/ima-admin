import { ContactsSvg, DashboardSVG, ReportsSvg } from "../../assets";

export const pages = [
  {
    title: "Dashboard",
    ActiveImage: <DashboardSVG fill="#0C0507" />,
    InActiveImage: <DashboardSVG />
  },
  {
    title: "Properties"
  },
  {
    title: "Contacts",
    ActiveImage: <ContactsSvg fill="#0C0507" />,
    InActiveImage: <ContactsSvg />
  },
  { title: "Listing" },
  { title: "Loan" },
  { title: "Transactions" },
  { title: "Customers" },
  { title: "Referrals" },
  { title: "Messages" },
  { title: "Bookings" },
  { title: "Media" },
  {
    title: "Reports",
    ActiveImage: <ReportsSvg fill="#0C0507" />,
    InActiveImage: <ReportsSvg />
  },
  { title: "Settings" }
];
