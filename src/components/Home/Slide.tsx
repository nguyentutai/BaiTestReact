import { useRef } from "react";
import Slider from "react-slick";
export default function Slide() {
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
      <div className="bg-[#9059DB] rounded-[50px] p-20">
        <h3 className="text-[40px] font-[700] text-white">Testimonials</h3>
        <div className="custom-slider">
          <Slider {...settings} ref={sliderRef} className="pt-20">
            <div className="bg-white shadow-2xl rounded-[20px] px-24 py-16 !flex gap-10">
              <div>
                <img src="../public/people.png" alt="" />
              </div>
              <div>
                <h3 className="font-[900]">John Fang </h3>
                <span className="text-[#9059DB] text-sm">wordfaang.com</span>
                <p className="max-w-[350px] pt-4 text-[#566771]">
                  Suspendisse ultrices at diam lectus nullam. Nisl, sagittis
                  viverra enim erat tortor ultricies massa turpis. Arcu pulvinar
                  aenean nam laoreet nulla.
                </p>
              </div>
            </div>
            <div>2</div>
            <div>3</div>
          </Slider>
          <div className="banner-np" style={{ textAlign: "center" }}>
            <div className="button-pree" onClick={previous}>
              <i className="fa-solid fa-chevron-left"></i>
            </div>
            <div className="button-next" onClick={next}>
              <i className="fa-solid fa-chevron-right"></i>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
