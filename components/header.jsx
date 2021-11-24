import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";
import "@styles/components/header.scss";

const Header = () => {
  return (
    <header className={`header_site "sticky-top`}>
      <nav className="navbar navbar-expand-lg">
        <section className="container">
          <h1 className="logo-dark navbar-brand">
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
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#main-menu"
          >
            <img src="/images/icons/icon-menu.svg" alt="icon main menu" />
          </button>
          <div className="collapse navbar-collapse" id="main-menu">
            <Navigation />
          </div>
        </section>
      </nav>
    </header>
  );
};

export default Header;
