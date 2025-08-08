import { BsFileEarmarkPlay } from "react-icons/bs";
import { GiArmorUpgrade } from "react-icons/gi";
import { MdOutlineDashboard } from "react-icons/md";
import { FaSearch } from "react-icons/fa";

type NavItem = {
  name: string;
  href: string;
  icon: any; // Accepts any valid React node (including JSX)
};

export const navops: NavItem[] = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <MdOutlineDashboard />,
  },
  {
    name: "Create New",
    href: "/dashboard/createNew",
    icon: <BsFileEarmarkPlay />,
  },
  {
    name: "Explore",
    href: "/dashboard/explore",
    icon: <FaSearch />,
  },
  {
    name: "Upgrade",
    href: "/dashboard/upgrade",
    icon: <GiArmorUpgrade />,
  },
];
