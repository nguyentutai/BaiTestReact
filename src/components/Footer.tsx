import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
export default function FooterPage() {
  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
      <motion.div
        ref={ref2}
        initial={{ y: 100, opacity: 0 }}
        animate={inView2 ? { y: 0, opacity: 1 } : {}}
        transition={{ duration: 1, delay: 1 }}
      >
        <div className="container-main border-t py-14 grid grid-cols-12">
          <div className="lg:col-span-5 col-span-12 text-center lg:text-left">
            <div>
              <img
                className="mx-auto lg:mx-0"
                src="../public/logo-footer.png"
                alt=""
              />
            </div>
            <span className="block font-[500] pt-14">
              Warehouse Society, 234
            </span>
            <span className="block font-[500]">
              Bahagia Ave Street PRBW 29281
            </span>
            <span className="block pt-4">info@warehouse.project</span>
            <span className="block">1-232-3434 (Main)</span>
          </div>
          <div className="lg:col-span-2 col-span-12">
            <h3 className="font-[900] text-center lg:text-left">About</h3>
            <ul className="pt-14 leading-9 hover:*:text-[#9059DB] text-center lg:text-left">
              <li>
                <Link to={""}>Profile</Link>
              </li>
              <li>
                <Link to={""}>Features</Link>
              </li>
              <li>
                <Link to={""}>Careers</Link>
              </li>
              <li>
                <Link to={""}>DW News</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-2 col-span-12">
            <h3 className="font-[900] text-center lg:text-left">Help</h3>
            <ul className="pt-14 leading-9 hover:*:text-[#9059DB] text-center lg:text-left">
              <li>
                <Link to={""}>Support</Link>
              </li>
              <li>
                <Link to={""}>Sign up</Link>
              </li>
              <li>
                <Link to={""}>Guide</Link>
              </li>
              <li>
                <Link to={""}>Reports</Link>
              </li>
              <li>
                <Link to={""}>Q&A</Link>
              </li>
            </ul>
          </div>
          <div className="lg:col-span-3 col-span-12 mx-auto lg:mx-0">
            <h3 className="font-[900] lg:text-left text-center">
              Social Media
            </h3>
            <ul className="pt-14 flex gap-3">
              <li className="bg-gray-200 w-fit rounded-full p-3 hover:bg-pink-400 cursor-pointer duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 32 32"
                  className="size-6"
                >
                  <path d="M 16 6 C 12.234375 6 8.90625 6.390625 6.875 6.6875 C 5.195313 6.933594 3.839844 8.199219 3.53125 9.875 C 3.269531 11.300781 3 13.386719 3 16 C 3 18.613281 3.269531 20.699219 3.53125 22.125 C 3.839844 23.800781 5.195313 25.070313 6.875 25.3125 C 8.914063 25.609375 12.253906 26 16 26 C 19.746094 26 23.085938 25.609375 25.125 25.3125 C 26.804688 25.070313 28.160156 23.800781 28.46875 22.125 C 28.730469 20.695313 29 18.605469 29 16 C 29 13.394531 28.734375 11.304688 28.46875 9.875 C 28.160156 8.199219 26.804688 6.933594 25.125 6.6875 C 23.09375 6.390625 19.765625 6 16 6 Z M 16 8 C 19.632813 8 22.878906 8.371094 24.84375 8.65625 C 25.6875 8.78125 26.347656 9.417969 26.5 10.25 C 26.742188 11.570313 27 13.527344 27 16 C 27 18.46875 26.742188 20.429688 26.5 21.75 C 26.347656 22.582031 25.691406 23.222656 24.84375 23.34375 C 22.871094 23.628906 19.609375 24 16 24 C 12.390625 24 9.125 23.628906 7.15625 23.34375 C 6.3125 23.222656 5.652344 22.582031 5.5 21.75 C 5.257813 20.429688 5 18.476563 5 16 C 5 13.519531 5.257813 11.570313 5.5 10.25 C 5.652344 9.417969 6.308594 8.78125 7.15625 8.65625 C 9.117188 8.371094 12.367188 8 16 8 Z M 13 10.28125 L 13 21.71875 L 14.5 20.875 L 21.5 16.875 L 23 16 L 21.5 15.125 L 14.5 11.125 Z M 15 13.71875 L 18.96875 16 L 15 18.28125 Z"></path>
                </svg>
              </li>
              <li className="bg-gray-200 w-fit rounded-full p-3 hover:bg-pink-400 cursor-pointer duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="size-6"
                >
                  <path d="M25,3C12.85,3,3,12.85,3,25c0,11.03,8.125,20.137,18.712,21.728V30.831h-5.443v-5.783h5.443v-3.848 c0-6.371,3.104-9.168,8.399-9.168c2.536,0,3.877,0.188,4.512,0.274v5.048h-3.612c-2.248,0-3.033,2.131-3.033,4.533v3.161h6.588 l-0.894,5.783h-5.694v15.944C38.716,45.318,47,36.137,47,25C47,12.85,37.15,3,25,3z"></path>
                </svg>
              </li>
              <li className="bg-gray-200 w-fit rounded-full p-3 hover:bg-pink-400 cursor-pointer duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  x="0px"
                  y="0px"
                  width="100"
                  height="100"
                  viewBox="0 0 50 50"
                  className="size-6"
                >
                  <path d="M 46.792969 22.089844 L 27.910156 3.207031 C 27.109375 2.402344 26.054688 2 25 2 C 23.945313 2 22.890625 2.402344 22.089844 3.207031 L 18.355469 6.941406 L 22.976563 11.5625 C 24.511719 10.660156 26.511719 10.855469 27.828125 12.171875 C 29.144531 13.488281 29.335938 15.488281 28.433594 17.019531 L 32.976563 21.5625 C 34.511719 20.660156 36.511719 20.855469 37.828125 22.171875 C 39.390625 23.734375 39.390625 26.265625 37.828125 27.828125 C 36.265625 29.390625 33.734375 29.390625 32.171875 27.828125 C 30.855469 26.511719 30.660156 24.511719 31.5625 22.976563 L 27.019531 18.433594 C 26.695313 18.625 26.355469 18.765625 26 18.855469 L 26 31.140625 C 27.722656 31.585938 29 33.136719 29 35 C 29 37.210938 27.210938 39 25 39 C 22.789063 39 21 37.210938 21 35 C 21 33.136719 22.277344 31.585938 24 31.140625 L 24 18.855469 C 23.332031 18.683594 22.695313 18.351563 22.171875 17.828125 C 20.855469 16.511719 20.664063 14.511719 21.566406 12.980469 L 16.941406 8.355469 L 3.207031 22.089844 C 1.597656 23.695313 1.597656 26.304688 3.207031 27.910156 L 22.089844 46.792969 C 22.890625 47.597656 23.945313 48 25 48 C 26.054688 48 27.109375 47.597656 27.910156 46.792969 L 46.792969 27.910156 C 48.402344 26.304688 48.402344 23.695313 46.792969 22.089844 Z"></path>
                </svg>
              </li>
            </ul>
          </div>
        </div>
        <div className="container-main flex justify-between pb-14">
          <p className="text-[12px] max-w-[250px]">
            © Datawarehouse™, 2020. All rights reserved. Company Registration
            Number: 21479524.
          </p>
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="size-6 text-[#9059DB] bg-slate-200 w-10 h-10 rounded-full p-1"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M8.625 12a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H8.25m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0H12m4.125 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 0 1-2.555-.337A5.972 5.972 0 0 1 5.41 20.97a5.969 5.969 0 0 1-.474-.065 4.48 4.48 0 0 0 .978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25Z"
              />
            </svg>
          </div>
        </div>
      </motion.div>
    </>
  );
}
