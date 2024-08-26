import { Outlet } from "react-router-dom";
import HeaderPage from "../components/Header";
import FooterPage from "../components/Footer";

export default function ClientLayout() {
  return (
    <>
      <HeaderPage />
      <Outlet />
      <FooterPage />
    </>
  );
}
