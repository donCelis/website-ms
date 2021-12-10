import Image from "next/image";
import { services } from "data";

const Item_service = ({ title, image, name_btn, mod = "", color = "red" }) => {
  return (
    <aside className={"g-col-12 " + mod}>
      <article className="services-card">
        <Image
          src={image}
          width={184}
          height={90}
          layout="fixed"
          objectFit="contain"
          className="services-card-img"
          alt={title}
        />
        <h3 className="services-card-title">{title}</h3>
        <button className={"button button-sm button-" + color}>
          {name_btn}
          <span>
            <img className="flecha" src="./images/flecha.svg" alt="Arrow" />
          </span>
        </button>
      </article>
    </aside>
  );
};

const Services = () => {
  const last_element = services.length - 1;
  return (
    <section className="services">
      <div className="container">
        <div className="text">
          <div className="line"></div>
          <h3 className="services-title size-med">
            Lorem ipsum dolor sit amet
          </h3>
        </div>
        <section className="grid g-row-gap-3">
          {services.map((props, id) => (
            <Item_service
              key={id}
              {...props}
              mod={`${
                id !== last_element ? "g-col-md-6" : "g-col-md-12"
              } g-col-lg-4`}
            />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Services;
