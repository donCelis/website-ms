import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";
import "@styles/components/header.scss";

const Header = () => {
  return (
    <header className="header_site sticky-top">
      <section className="container d-flex align-items-center justify-content-between">
        <h1 className="logo-dark">
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
        <Navigation />
      </section>
    </header>
  );
};

export default Header;
