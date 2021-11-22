import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { data_allies } from "data";

const Item_allies = ({ image, alt }) => {
  return (
    <article className="allies-card">
      <img className="allies-card-img img-fluid" src={image} alt={alt} />
    </article>
  );
};

const Allies = () => {
  const breakpoints = {
    375: {
      spaceBetween: 60,
      slidesPerView: 1,
    },
    576: {
      spaceBetween: 60,
      slidesPerView: 1,
    },
    768: {
      spaceBetween: 40,
      slidesPerView: 2,
    },
    1024: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
    1200: {
      spaceBetween: 30,
      slidesPerView: 4,
    },
  };
  return (
    <section className="allies">
      <div className="container">
        <div className="text">
          <div className="line"></div>
          <h3 className="allies-title">Lorem ipsum dolor sit amet</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={false}
          navigation
          breakpoints={breakpoints}
          tag="section"
          wrapperTag="ul"
          className="swiper-allies"
        >
          {data_allies.map((item, id) => (
            <SwiperSlide tag="li" key={id}>
              <Item_allies {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Allies;
