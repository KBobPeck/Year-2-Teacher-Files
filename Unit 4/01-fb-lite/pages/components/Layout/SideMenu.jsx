import { useRouter } from "next/router";
import Link from "next/link";
import router from "../../../tmp/auth";

const SideMenu = () => {
  const isActive = (route) => router.pathname === route;

  return <div>SideMenu</div>;
};

export default SideMenu;
