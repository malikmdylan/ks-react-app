import "../styles.css";
import "../index.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Autoplay } from "swiper";
import "swiper/css/scrollbar";

export default function Slider({image1,name1,faculty1,image2,name2,faculty2,image3,name3,faculty3,image4,name4,faculty4,image5,name5,faculty5,image6,name6,faculty6,image7,name7,faculty7,image8,name8,faculty8,image9,name9,faculty9,image10,name10,faculty10}) {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={3}
        // enables autoplay
        autoplay={{ delay: 1000,disableOnInteraction:false }}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination, Autoplay]}
        className="mySwiper"
      >

        {/* slide1 */}
        <SwiperSlide className="swiper-slide">
          <img src={image1} alt="ii" className="image" />
          <div className="name">{name1}</div>
          <div className="faculty">Faculty:{faculty1}</div>
        </SwiperSlide>

        {/* slide2 */}
        <SwiperSlide>
          <img src={image2} alt="" className="image" />
          <div className="name">{name2}</div>
          <div className="faculty">Faculty:{faculty2}</div>
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide>
          <img src={image3} alt="ii" className="image" />
          <div className="name">{name3}</div>
          <div className="faculty">Faculty:{faculty3}</div>
        </SwiperSlide>

        {/* 4 */}
        <SwiperSlide>
          <img src={image4} alt="ii" className="image" />
          <div className="name">{name4}</div>
          <div className="faculty">Faculty:{faculty4}</div>
        </SwiperSlide>

        {/* 5 */}
        <SwiperSlide>
          <img src={image5} alt="ii" className="image" />
          <div className="name">{name5}</div>
          <div className="faculty">Faculty:{faculty5}</div>
        </SwiperSlide>

        {/* 6 */}
        <SwiperSlide>
          <img src={image6} alt="ii" className="image" />
          <div className="name">{name6}</div>
          <div className="faculty">Faculty:{faculty6}</div>
        </SwiperSlide>

        {/* 7 */}
        <SwiperSlide>
          <img src={image7} alt="ii" className="image" />
          <div className="name">{name7}</div>
          <div className="faculty">Faculty:{faculty7}</div>
        </SwiperSlide>

        {/* 8 */}
        <SwiperSlide>
          <img src={image8} alt="ii" className="image" />
          <div className="name">{name8}</div>
          <div className="faculty">Faculty:{faculty8}</div>
        </SwiperSlide>

        {/* 9 */}
        <SwiperSlide>
          <img src={image9} alt="ii" className="image" />
          <div className="name">{name9}</div>
          <div className="faculty">Faculty:{faculty9}</div>
        </SwiperSlide>

        {/* 10 */}
        <SwiperSlide>
          <img src={image10} alt="ii" className="image" />
          <div className="name">{name10}</div>
          <div className="faculty">Faculty:{faculty10}</div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
