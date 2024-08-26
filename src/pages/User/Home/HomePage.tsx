import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import BlogPage from "../../../components/Home/Blog";
import Slider from "react-slick";
import { useEffect, useRef, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { IGallerie } from "../../../types/IGallerie";
import { instance } from "../../../services/apiUrl";

export default function HomePage() {
  const [galleries, setGalleries] = useState<IGallerie[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await instance.get("/galleries");
      setGalleries(data);
    })();
  }, []);
  const { ref: ref1, inView: inView1 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const { ref: ref2, inView: inView2 } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  const sliderRef = useRef<Slider>(null);
  const next = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };
  const previous = () => {
    console.log("1");
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };
  const settings = {
    dots: true,
    infinite: true,
    autoplay: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };

  return (
    <>
      <div className="container-main pb-14">
        {/* Banner */}
        <div className="lg:relative py-10">
          <div>
            <motion.div
              className="py-8"
              initial={{ y: -100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{
                duration: 1,
                delay: 0.6,
                ease: "easeInOut",
              }}
            >
              <h1 className="lg:text-[70px] text-[50px] font-[700] text-[#212353] leading-[88px] text-center lg:text-left lg:max-w-[641px]">
                Save your data storage here.
              </h1>

              <p className="text-lg lg:max-w-[386px] text-center lg:text-left text-[#566771] py-12">
                Data Warehouse is a data storage area that has been tested for
                security, so you can store your data here safely but not be
                afraid of being stolen by others.
              </p>
              <Link to={"/"} className="btn block lg:m-0 mx-auto">
                Learn more
              </Link>
            </motion.div>
          </div>
          <motion.div
            className="lg:absolute lg:bottom-0 right-0 max-w-[585px]"
            initial={{ y: 100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{
              duration: 1,
              delay: 0.6,
              ease: "easeInOut",
            }}
          >
            <img className="w-full" src="../public/banner.png" alt="" />
          </motion.div>
        </div>
        <div>
          <motion.div
            className="text-center pt-[164px]"
            ref={ref1}
            initial={{ y: -100, opacity: 0 }}
            animate={inView1 ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <h3 className="text-[40px] font-[700] pb-12">Features</h3>
            <p className="max-w-[560px] mx-auto text-[#566771]">
              Some of the features and advantages that we provide for those of
              you who store data in this Data Warehouse.
            </p>
          </motion.div>
        </div>
        <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 pt-20">
          <BlogPage
            title={"Search Data"}
            content={
              "Don’t worry if your data is very large, the Data Warehoue provides a search engine, which is useful for making it easier to find data effectively saving time."
            }
            image={"../public/image1.png"}
            bg_image={"../public/feature1.png"}
          />
          <BlogPage
            title={"24 Hours Access"}
            content={
              "Access is given 24 hours a full morning to night and meet again in the morning, giving you comfort when you need data when urgent."
            }
            image={"../public/image2.png"}
            bg_image={"../public/feature2.png"}
          />
          <BlogPage
            title={"Print Out"}
            content={
              "Print out service gives you convenience if someday you need print data, just edit it all and just print it."
            }
            image={"../public/image3.png"}
            bg_image={"../public/feature3.png"}
          />
          <BlogPage
            title={"Security Code"}
            content={
              "Data Security is one of our best facilities. Allows for your files to be safer. The file can be secured with a code or password that you created, so only you can open the file."
            }
            image={"../public/image4.png"}
            bg_image={"../public/feature4.png"}
          />
        </div>
        <motion.div
          ref={ref2}
          initial={{ y: 100, opacity: 0, scale: 0.8 }}
          animate={inView2 ? { y: 0, opacity: 1, scale: 1 } : {}}
          transition={{ duration: 1, delay: 1.2 }}
          className="pt-28"
        >
          <div className="bg-[#9059DB] rounded-[50px] p-20">
            <h3 className="text-[40px] font-[700] text-white">Testimonials</h3>
            <div className=" rounded-[20px] relative">
              <Slider
                {...settings}
                ref={sliderRef}
                className="pt-20 rounded-[20px]"
              >
                {galleries &&
                  galleries.map((gall) => (
                    <div
                      key={gall.id}
                      className="bg-white rounded-[20px] px-24 py-16 !flex gap-10"
                    >
                      <div>
                        <img className="w-[130px]" src={gall.imageUrl} alt="" />
                      </div>
                      <div>
                        <h3 className="font-[900]">John Fang </h3>
                        <span className="text-[#9059DB] text-sm">
                          wordfaang.com
                        </span>
                        <p className="max-w-[350px] pt-4 text-[#566771] lg:line-clamp-4 line-clamp-2">
                          {gall.desctiption}
                        </p>
                      </div>
                    </div>
                  ))}
              </Slider>
              <div className="" style={{ textAlign: "center" }}>
                <div
                  className="absolute top-[55%] -left-[5%] cursor-pointer text-white"
                  onClick={previous}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M6.75 15.75 3 12m0 0 3.75-3.75M3 12h18"
                    />
                  </svg>
                </div>
                <div
                  className="absolute top-[55%] -right-[5%] cursor-pointer text-white"
                  onClick={next}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="size-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
}
