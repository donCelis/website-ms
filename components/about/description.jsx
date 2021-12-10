import Image from "next/image";
import imageInfo from "public/images/about/boat-daylight.jpg";

const Description = () => {
  return (
    <section className="about-description">
      <div className="container">
        <section className="grid align-items-center">
          <aside className="g-col-12 g-col-md-12 g-col-lg-6">
            <article className="about-description-text">
              <div className="line"></div>
              <h2>¿Lorem ipsum dolor sit amet, consectetur adipiscing elit?</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Sed ut perspiciatis unde omnis iste
                natus error sit voluptatem.
              </p>
            </article>
          </aside>
          <aside className="g-col-12 g-col-md-12 g-col-lg-5 g-start-lg-8">
            <figure className="about-description-photo">
              <Image
                src={imageInfo}
                layout="intrinsic"
                objectFit="cover"
                alt="boat-daylight"
              />
            </figure>
          </aside>
        </section>
      </div>
    </section>
  );
};

export default Description;
