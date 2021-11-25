import { Navigation } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { slider } from "data";

const Item_slider = ({ image, alt }) => {
  return (
    <article className="partners-card partners-card-post">
      <img className="partners-card-img img-fluid" src={image} alt={alt} />
    </article>
  );
};

const Slider_post = () => {
  return (
    <section className="partners partners-p-0">
      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        modules={[Navigation]}
        loop={false}
        navigation
        tag="section"
        wrapperTag="ul"
        className="swiper-post"
      >
        {slider.map((item, id) => (
          <SwiperSlide tag="li" key={id}>
            <Item_slider {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Slider_post;
