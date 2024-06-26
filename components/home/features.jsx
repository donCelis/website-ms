import Image from "next/image";
import { features } from "data";

const Item_feature = ({ title, image }) => {
  return (
    <figure className="photo">
      <p>{title}</p>
      <Image
        src={image}
        width={300}
        height={300}
        layout="responsive"
        objectFit="cover"
        alt={title}
      />
    </figure>
  );
};

const Features = () => {
  return (
    <section className="features">
      <div className="container">
        <div className="grid g-gap-0 align-items-center">
          <aside className="g-col-12 g-col-lg-6">
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
              <button className="button button-red button-sm">
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
          <aside className="g-col-12 g-col-lg-6">
            <section className="features-images">
              {features.map((item, id) => (
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
