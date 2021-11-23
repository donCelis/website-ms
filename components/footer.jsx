import Image from "next/image";
import Link from "next/link";
import "@styles/components/footer.scss";
import { menu_links } from "data";

const Footer = () => {
  return (
    <footer className="footer">
      <section className="footer-header border-bottom py-4">
        <div className="container">
          <div className="d-flex align-items-center justify-content-between">
            <h1 className="logo logo-white">
              <Link href="/">
                <a>
                  <Image
                    priority
                    src="/images/logo-ms.svg"
                    alt="Logo website ms"
                    width={160}
                    height={44}
                    layout="fixed"
                  />
                </a>
              </Link>
            </h1>
            <ul className="socials">
              <li>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/images/socials-icons/facebook-circle.svg"
                    alt="facebook"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/images/socials-icons/instagram-circle.svg"
                    alt="instagram"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/images/socials-icons/linkedin-circle.svg"
                    alt="linkedin"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/images/socials-icons/twitter-circle.svg"
                    alt="twitter"
                  />
                </a>
              </li>
              <li>
                <a href="#">
                  <img
                    className="img-fluid"
                    src="/images/socials-icons/youtube-circle.svg"
                    alt="youtube"
                  />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <section className="footer-body pt-4 pb-5">
        <div className="container">
          <div className="row gy-5 gy-lg-0">
            <aside className="col-12 col-sm-6 col-lg-3">
              <article className="second-menu">
                <h5 className="mayus">sobre nosotros</h5>
                <nav>
                  {menu_links.map((menu, id) => (
                    <Link key={id} href={menu.path}>
                      <a>{menu.name}</a>
                    </Link>
                  ))}
                </nav>
              </article>
            </aside>
            <aside className="col-12 col-sm-6 col-lg-3">
              <article className="local-info">
                <h5 className="mayus">encuéntranos</h5>
                <ul>
                  <li>Avenida Costanera.</li>
                  <li>Las colinas 1234, Costanera.</li>
                  <li>+56 9 1234 5678</li>
                </ul>
              </article>
            </aside>
          </div>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
