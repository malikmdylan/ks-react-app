
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
  image1,
  image2,
  image3,
  image4,
  image5,
  image6,
}) {
  // note achievements prop refers to events ,courses,student learnt etc that is the text
  // below the circular slider
  return (
    <>
    <div className="heading-text">FEATURED IN</div>
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
        <SwiperSlide className="swiper-slide" style={{backgroundColor:"black"}}>
        <div className="circular-swiper-slide">
        <img src={image1} alt="" className="image" />
        
        </div>
       
         
        </SwiperSlide>

        {/* slide2 */}
        <SwiperSlide className="swiper-slide" style={{backgroundColor:"black"}}>
        <div className="circular-swiper-slide">
        <img src={image2} alt="" className="image" />
        
        </div>
       
         
        </SwiperSlide>

        {/* slide 3 */}
        <SwiperSlide className="swiper-slide" style={{backgroundColor:"black"}}>
        <div className="circular-swiper-slide">
        <img src={image3} alt="" className="image" />
        
        </div>
        
         
        </SwiperSlide>

        {/* 4 */}
        <SwiperSlide className="swiper-slide" style={{backgroundColor:"black"}}>
        <div className="circular-swiper-slide">
        <img src={image4} alt="" className="image" />
        
        </div>
        
         
        </SwiperSlide>

        {/* 5 */}
        <SwiperSlide className="swiper-slide" style={{backgroundColor:"black"}}>
        <div className="circular-swiper-slide">
        <img src={image5} alt="" className="image" />
        
        </div>
       
         
        </SwiperSlide>

        {/* 6 */}
        <SwiperSlide className="swiper-slide" style={{backgroundColor:"black"}}>
        <div className="circular-swiper-slide">
        <img src={image1} alt="" className="image" />
        
        </div>
        
          
        </SwiperSlide>

       

      

       

      
      </Swiper>
    </>
  );
}
