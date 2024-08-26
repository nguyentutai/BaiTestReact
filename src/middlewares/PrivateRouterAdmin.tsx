import { Navigate, Outlet } from "react-router-dom";

const PrivateRouterAdmin = () => {
  const admin = localStorage.getItem("accessToken");
  if (admin) {
    return <Outlet />;
  } else {
    return <Navigate to="/" />;
  }
};

export default PrivateRouterAdmin;
