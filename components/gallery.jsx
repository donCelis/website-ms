import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const Gallery = () => {
  return (
    <Swiper
      direction="horizontal"
      loop={false}
      speed={800}
      mousewheel={false}
      spaceBetween={0}
      slidesPerView={1}
      pagination={{ clickable: true }}
      /* onSlideChange={() => console.log("slide change")} */
      /* onSwiper={(swiper) => console.log(swiper)} */
      modules={[Pagination]}
    >
      <SwiperSlide
        style={{
          backgroundImage: "url(./images/bg-home.png)",
          /* position: "relative", */
        }}
      >
        <div className="container">
          <article>
            <h2>Lorem, ipsum dolor. 1</h2>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eius,
              debitis aliquid sed quasi nam saepe provident. Rerum, numquam
              officiis recusandae suscipit tempora, natus magni distinctio
              delectus consequatur obcaecati velit?
            </p>
          </article>
        </div>
        {/* <img
          style={{ position: "absolute", left: 0, top: 0, zIndex: -1 }}
          src="./images/bg-home.png"
          alt=""
        /> */}
      </SwiperSlide>
      <SwiperSlide
        style={{
          /* background:
                  "url(./images/bg-home.png) no-repeat center / cover",
                height: "100%", */
          position: "relative",
        }}
      >
        <div className="container">
          <article>
            <h2>Lorem, ipsum dolor. 2</h2>
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ex eius,
              debitis aliquid sed quasi nam saepe provident. Rerum, numquam
              officiis recusandae suscipit tempora, natus magni distinctio
              delectus consequatur obcaecati velit?
            </p>
          </article>
        </div>
        <img
          style={{ position: "absolute", left: 0, top: 0, zIndex: -1 }}
          src="./images/bg-home.png"
          alt=""
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Gallery;
