import { data_features } from "data";

const Item_feature = ({ title, image }) => {
  return (
    <div className="photo">
      <p>{title}</p>
      <img className="img-fluid" src={image} alt={title} />
    </div>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="row gx-5 align-items-center">
          <aside className="col-12 col-lg-6">
            <article className="article dark">
              <div className="line"></div>
              <h3 className="article_title size-med">¿Lorem ipsum?</h3>
              <p className="article-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="article-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="button button-red">
                Lorem
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
          <aside className="col-12 col-lg-6">
            <section className="features-images">
              {data_features.map((item, id) => (
                <Item_feature key={id} {...item} />
              ))}
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Features;
