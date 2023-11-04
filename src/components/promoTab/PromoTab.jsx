import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Button from "../../base-components/Button/Button";

const PromoTab = () => {
  return (
    <div className="h-full w-full">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={50}
        slidesPerView={1}
        speed={800}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
        <SwiperSlide className="flex mb-12 flex flex-col items-center justify-center h-full">
          <div className="text-4xl text-[#505050] text-center">
            Transfer files...
          </div>
          <div className="text-5xl text-[#0196F5] font-bold text-center">
            up to 10x faster
          </div>
          <div className="text-lg text-[#505050] text-center mb-6">
            with our patented technology
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Button
              bgColor="transparent"
              borderRadius="20px"
              width="35%"
              height="100%"
              textColor="#0196F5"
              borderColor="#0196F5"
              borderWidth="2"
              hoverBackgroundColor="#0196F5"
              hoverTextColor="white">
              See our benchmarks
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex mb-12 flex flex-col items-center justify-center h-full">
          <div className="text-4xl text-[#505050] text-center">
            Upgrade to pro...
          </div>
          <div className="text-5xl text-[#0196F5] font-bold text-center">
            up to 100 GB
          </div>
          <div className="text-lg text-[#505050] text-center mb-6">
            up to 5 GB for free
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Button
              bgColor="transparent"
              borderRadius="20px"
              width="40%"
              height="100%"
              textColor="#0196F5"
              borderColor="#0196F5"
              borderWidth="2"
              hoverBackgroundColor="#0196F5"
              hoverTextColor="white">
              See how we compare
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex mb-12 flex flex-col items-center justify-center h-full">
          <div className="text-4xl text-[#505050] text-center">
            Transfer files...
          </div>
          <div className="text-5xl text-[#0196F5] font-bold text-center">
            transfer 100 GB
          </div>
          <div className="text-lg text-[#505050] text-center mb-6">
            with our patented technology
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Button
              bgColor="transparent"
              borderRadius="20px"
              width="30%"
              height="100%"
              textColor="#0196F5"
              borderColor="#0196F5"
              borderWidth="2"
              hoverBackgroundColor="#0196F5"
              hoverTextColor="white">
              Become a Pro
            </Button>
          </div>
        </SwiperSlide>

        <SwiperSlide className="flex mb-12 flex flex-col items-center justify-center h-full">
          <div className="text-4xl text-[#505050] text-center">
            Transfer files...
          </div>
          <div className="text-5xl text-[#0196F5] font-bold text-center">
            100% secure
          </div>
          <div className="text-lg text-[#505050] text-center mb-6">
            with end-to-end encryption
          </div>
          <div className="w-full flex flex-col items-center justify-center">
            <Button
              bgColor="transparent"
              borderRadius="20px"
              width="60%"
              height="100%"
              textColor="#0196F5"
              borderColor="#0196F5"
              borderWidth="2"
              hoverBackgroundColor="#0196F5"
              hoverTextColor="white">
              Learn more about our technology
            </Button>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default PromoTab;
