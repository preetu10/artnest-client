/* eslint-disable react/no-unescaped-entities */

import { Swiper, SwiperSlide } from "swiper/react";

 
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Autoplay, EffectFade, Pagination } from "swiper/modules";
const Banner = () => {
    return (
        <div>
      <Swiper
        spaceBetween={30}
        effect={"fade"}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{ delay: 3500 }}
        modules={[EffectFade, Pagination, Autoplay]}
        className="mySwiper rounded-xl mt-3 mb-10"
      >
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#715329] shadow-2xl"
            style={{
              backgroundImage:
                "url(login.jpg)",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Explore Nature's Canvas</h1>
                <p className="mb-5 font-semibold">
                Venture into breathtaking landscapes that bring the beauty of the natural world to life on canvas. Each painting in our collection showcases the vibrancy and serenity of Earth’s varied environments, rendered with artistic precision and deep passion.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#715329] shadow-2xl"
            style={{
              backgroundImage:
                "url(banner1.jpg)",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Discover Soulful Portraits</h1>
                <p className="mb-5 font-semibold">
                Uncover the depths of emotion and character in our exquisite portrait gallery. Every artwork captures the subtle intricacies of human expression, offering a profound glimpse into diverse personal stories and the human spirit.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div
            className="hero min-h-screen shadow-[#715329] shadow-2xl"
            style={{
              backgroundImage:
                "url(banner2.jpg)",
            }}
          >
            <div className="hero-overlay "></div>
            <div className="hero-content text-center text-neutral-content">
              <div className="max-w-3xl">
                <h1 className="mb-5 text-5xl font-extrabold">Unveil Abstract Realms</h1>
                <p className="mb-5 font-semibold">
                Step into the vivid and boundless realms of abstract art. This collection features works that challenge perceptions and celebrate the freedom of expression, using bold colors and innovative compositions to stir the imagination.
                </p>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
    );
};

export default Banner;