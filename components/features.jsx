const Item_feature = ({ title, image, mod = "" }) => {
  return (
    <div className={"photo " + mod}>
      <p>{title}</p>
      <img className="img-fluid" src={image} />
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
              <h3 className="article_title">¿Lorem ipsum?</h3>
              <p className="article-paragraph">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
              </p>
              <p className="article-paragraph">
                Ut enim ad minim veniam, quis nostrud exercitation ullamco
                laboris nisi ut aliquip ex ea commodo consequat.
              </p>
              <button className="article_btn">
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
              <Item_feature
                mod="middle"
                title="Lorem, ipsum dolor."
                image="/images/features/80-300x300.jpg"
              />
              <Item_feature
                mod="move-up"
                title="Lorem, ipsum dolor."
                image="/images/features/230-300x300.jpg"
              />
              <Item_feature
                mod="move-down"
                title="Lorem, ipsum dolor."
                image="/images/features/938-300x300.jpg"
              />
            </section>
          </aside>
        </div>
      </div>
    </section>
  );
};

export default Features;
