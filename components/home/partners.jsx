import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { partners } from "data";

const Item_partners = ({ image, alt }) => {
  return (
    <article className="partners-card">
      <img className="img-fluid" src={image} alt={alt} />
    </article>
  );
};

const Partners = () => {
  const breakpoints = {
    320: {
      spaceBetween: 30,
      slidesPerView: 1,
    },
    360: {
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
    <section className="partners">
      <div className="container">
        <div className="text">
          <div className="line"></div>
          <h3 className="partners-title size-med">Lorem ipsum dolor sit amet</h3>
        </div>
        <Swiper
          modules={[Navigation]}
          loop={false}
          navigation
          breakpoints={breakpoints}
          tag="section"
          wrapperTag="ul"
          className="swiper-partners"
        >
          {partners.map((item, id) => (
            <SwiperSlide tag="li" key={id}>
              <Item_partners {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Partners;
