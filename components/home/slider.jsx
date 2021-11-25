import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import { slider } from "data";

const Item_slider = ({ title, name_btn, paragraph }) => {
  return (
    <>
      <section className="item-slider">
        <section className="container">
          <div className="grid">
            <aside className="g-col-12 g-col-md-10 g-col-lg-6">
              <article className="article">
                <div className="line"></div>
                <h2 className="article_title size-big">{title}</h2>
                <p className="article-paragraph">{paragraph}</p>
                <button className="button button-red">
                  {name_btn}
                  <span>
                    <img
                      className="flecha"
                      src="./images/flecha.svg"
                      alt="Arrow"
                    />
                  </span>
                </button>
              </article>
            </aside>
          </div>
        </section>
      </section>
    </>
  );
};

const Slider = () => {
  return (
    <Swiper
      speed={800}
      slidesPerView={1}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      tag="section"
      wrapperTag="ul"
      className="swiper-slider-home"
    >
      {slider.map((item, index) => (
        <SwiperSlide
          tag="li"
          style={{ backgroundImage: `url(${item.image})` }}
          key={index}
        >
          <Item_slider {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Slider;
