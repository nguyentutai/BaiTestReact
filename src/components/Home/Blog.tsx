import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
interface IProps {
  bg_image: string;
  image: string;
  title: string;
  content: string;
}
export default function BlogPage({ bg_image, image, title, content }: IProps) {
  const { ref, inView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });
  return (
    <>
      <motion.div
        ref={ref}
        initial={{ opacity: 0, scale: 0.8 }}
        animate={inView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 1, delay: 0.8 }}
      >
        <div className="relative">
          <div
            className="py-8 w-[85%] rounded-[50px] h-[352px] relative bg-no-repeat bg-cover ml-auto"
            style={{ backgroundImage: `url(${bg_image})` }}
          >
            <div className="absolute left-[45%]">
              <h3 className="text-2xl">{title}</h3>
              <p className="max-w-[200px] text-base py-5">{content}</p>
              <div className="flex items-center gap-2 hover:gap-4 duration-300">
                <span className="font-[800] hover:text-[#9059DB] cursor-pointer duration-300">
                  Learn more
                </span>
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
          <div className="max-w-[228px] absolute top-[50%] -translate-y-[50%]">
            <img className="w-full" src={image} alt="" />
          </div>
        </div>
      </motion.div>
    </>
  );
}
