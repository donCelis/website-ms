import Image from "next/image";
import Link from "next/link";
import Navigation from "./navigation";
import "@styles/components/header.scss";

const Header = () => {
  return (
    <header>
      <section className="container">
        <h1 className="logo">
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
