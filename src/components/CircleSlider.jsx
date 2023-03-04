
import "./style1.css";

import "./CircleSlider.css";


// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";



// import required modules
import { Pagination, Autoplay } from "swiper";
import "swiper/css/scrollbar";

export default function CircleSlider({
  no1,achievements1,no2,achievements2,
  no3,achievements3,
  no4,achievements4,
  no5,achievements5,
  no6,achievements6
}) {
  // note achievements prop refers to events ,courses,student learnt etc that is the text
  // below the circular slider
  return (
    <>
      <Swiper
        slidesPerView={3}
        spaceBetween={40}
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
        <div className="circular-swiper-slide">
        <div className="text">{no1}</div>
        
        </div>
        <div className="below-circle-text">{achievements1}</div>
         
        </SwiperSlide>

        {/* slide2 */}
        <SwiperSlide className="swiper-slide">
        <div className="circular-swiper-slide">
        <div className="text">{no2}</div>
        
        </div>
        <div className="below-circle-text">{achievements2}</div>
         
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide className="swiper-slide">
        <div className="circular-swiper-slide">
        <div className="text">{no3}</div>
        
        </div>
        <div className="below-circle-text">{achievements3}</div>
         
        </SwiperSlide>

        {/* 4 */}
        <SwiperSlide className="swiper-slide">
        <div className="circular-swiper-slide">
        <div className="text">{no4}</div>
        
        </div>
        <div className="below-circle-text">{achievements4}</div>
         
        </SwiperSlide>

        {/* 5 */}
        <SwiperSlide className="swiper-slide">
        <div className="circular-swiper-slide">
        <div className="text">{no5}</div>
        
        </div>
        <div className="below-circle-text">{achievements5}</div>
         
        </SwiperSlide>

        {/* 6 */}
        <SwiperSlide className="swiper-slide">
        <div className="circular-swiper-slide">
        <div className="text">{no6}</div>
        
        </div>
        <div className="below-circle-text">{achievements6}</div>
          
        </SwiperSlide>

       

      

       

      
      </Swiper>
    </>
  );
}
