import "styles/components/header-page.scss";

const Header_page = ({ children, mod = "" }) => {
  return (
    <section className={`header-page ${mod}`}>
      <div className="container">{children}</div>
    </section>
  );
};

export default Header_page;
