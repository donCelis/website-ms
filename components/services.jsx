import { data_services } from "data";

const Item_service = ({ title, image, name_btn, mod = "" }) => {
  return (
    <div className={"col-md-12 " + mod}>
      <article className="services-card">
        <img className="services-card-img" src={image} alt={title} />
        <h3 className="services-card-title">{title}</h3>
        <button className="article_btn">
          {name_btn}
          <span>
            <img className="flecha" src="./images/flecha.svg" alt="Arrow" />
          </span>
        </button>
      </article>
    </div>
  );
};

const Services = () => {
  return (
    <section className="services">
      <div className="container">
        <div className="text">
          <div className="line"></div>
          <h3 className="services-title">Lorem ipsum dolor sit amet</h3>
        </div>
        <section className="row gx-5 gy-5 gy-lg-0">
          {data_services.map((props, id) => (
            <Item_service key={id} {...props} mod="col-lg-4" />
          ))}
        </section>
      </div>
    </section>
  );
};

export default Services;
