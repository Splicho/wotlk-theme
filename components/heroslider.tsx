import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import { Icon } from '@iconify/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/autoplay';

export default function HeroSlider() {
  return (
    <div className="relative w-full max-w-[500px] group">
      <button 
        className="absolute bg-slate-800 backdrop-blur-sm rounded-full h-12 w-12 md:flex hidden items-center justify-center left-0 top-1/2 -translate-y-1/2 -translate-x-16 z-10 text-white/50 hover:text-white transition-colors duration-200"
        id="swiper-hero-prev"
      >
        <Icon icon="mdi:chevron-left" className="w-8 h-8" />
      </button>
      <Swiper
        modules={[Navigation, Autoplay]}
        navigation={{
          prevEl: '#swiper-hero-prev',
          nextEl: '#swiper-hero-next',
        }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        className="w-full"
      >
        <SwiperSlide>
          <h1 className="text-[68px] header-font text-center leading-[1.2] tracking-[-1px] bg-gradient-to-b from-[#0b89c6] to-white text-transparent bg-clip-text drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
            <span className="block">EMBARK ON</span>
            <span className="block">A ADVENTURE</span>
          </h1>
        </SwiperSlide>
        <SwiperSlide>
          <h1 className="text-[68px] header-font text-center leading-[1.2] tracking-[-1px] bg-gradient-to-b from-[#0b89c6] to-white text-transparent bg-clip-text drop-shadow-[0_2px_0px_rgba(0,0,0,1)]">
            <span className="block">BEGIN YOUR</span>
            <span className="block">JOURNEY</span>
          </h1>
        </SwiperSlide>
      </Swiper>
      <button 
        className="absolute bg-slate-800 backdrop-blur-sm rounded-full h-12 w-12 md:flex hidden items-center justify-center right-0 top-1/2 -translate-y-1/2 translate-x-16 z-50 text-white/50 hover:text-white transition-colors duration-200"
        id="swiper-hero-next"
      >
        <Icon icon="mdi:chevron-right" className="w-8 h-8" />
      </button>
    </div>
  );
} 