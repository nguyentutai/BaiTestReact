import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useAuth } from "../contexts/AuthProvider";

export default function HeaderPage() {
  const { accessToken, logout } = useAuth();
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024 && isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isOpen]);
  return (
    <motion.div
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
    >
      <div className="container-main relative flex justify-between items-center py-9">
        <div className="flex items-center gap-14">
          <div className="max-w-[48.7px]">
            <img className="w-full" src="../public/logo.png" alt="" />
          </div>
          <nav className="lg:block hidden">
            <ul className="flex items-center gap-6 *:text-xs *:font-[500] hover:*:text-[#9059DB] hover:*:font-semibold duration-500">
              <li>
                <Link to={"/"}>About</Link>
              </li>
              <li>
                <Link to={"/"}>Help</Link>
              </li>
              <li>
                <Link to={"/"}>Features</Link>
              </li>
              <li>
                <Link to={"/"}>Signup</Link>
              </li>
            </ul>
          </nav>
        </div>

        <div className="mx-10">
          <div
            className={`${
              isOpen ? "max-h-72" : "max-h-0"
            } overflow-hidden transition-max-height w-[90%] z-50 left-[50%] -translate-x-[50%] bg-[#68C9BA] absolute top-full duration-500 ease-in-out lg:block`}
          >
            <ul className="lg:flex lg:justify-between text-white p-3 hover:*:text-[#9059DB] hover:*:font-bold hover:*:duration-500">
              <li className="p-4">
                <Link to="/">Home</Link>
              </li>
              <li className="p-4">
                <Link to="/about">About</Link>
              </li>
              <li className="p-4">
                <Link to="/services">Services</Link>
              </li>
              <li className="p-4">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="lg:block hidden">
          {accessToken ? (
            <div className="flex items-center gap-8 ">
              <Link className="btn text-base block" to={"/"}>
                Profile
              </Link>
              <button className="btn text-base block" onClick={logout}>
                Logout
              </button>
            </div>
          ) : (
            <div>
              <Link className="btn text-base block" to={"/login"}>
                Sign In
              </Link>
            </div>
          )}
        </div>
        <div className="block lg:hidden">
          <button onClick={toggleMenu} className="focus:outline-none">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
