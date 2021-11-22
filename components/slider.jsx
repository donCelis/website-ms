import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

import { data_slider } from "data";

const Item_slider = ({ title, name_btn, paragraph}) => {
  return (
    <>
      <section className="item-slider">
        <section className="container">
          <div className="row">
            <aside className="col-12 col-md-10 col-lg-6">
              <article className="article">
                <div className="line"></div>
                <h2 className="article_title">{title}</h2>
                <p className="article-paragraph">{paragraph}</p>
                <button className="article_btn">
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
    >
      {data_slider.map((item, index) => (
        <SwiperSlide
          style={{ backgroundImage: `url(${item.image})` }}
          key={index}
        >
          <Item_slider {...item} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export { Slider };
