import { NavLink, Outlet, useNavigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthProvider";
import { useEffect } from "react";

export default function AdminLayout() {
  const { accessToken, logout } = useAuth();
  const navigate = useNavigate();
  useEffect(() => {
    if (!accessToken) {
      navigate("/login");
    }
  }, [accessToken, navigate]);
  return (
    <>
      <div className="grid grid-cols-12 gap-5">
        <div className="col-span-2 bg-[#D9D9D9] h-screen py-10">
          <div>
            <img className="mx-auto" src="../public/logo.png" alt="" />
          </div>
          <NavLink
            to={"/admin"}
            className="block py-3 my-4 ps-4 hover:bg-black hover:text-white duration-300 mx-3 rounded-lg"
          >
            Post
          </NavLink>
          <NavLink
            to={""}
            onClick={logout}
            className="block py-3 my-4 ps-4 hover:bg-black hover:text-white duration-300 mx-3 rounded-lg"
          >
            Logout
          </NavLink>
        </div>
        <div className="col-span-10">
          <Outlet />
        </div>
      </div>
    </>
  );
}
