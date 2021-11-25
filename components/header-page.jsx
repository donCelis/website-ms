import "@styles/components/header-page.scss";

const Header_page = ({ children }) => {
  return (
    <section className="header-page">
      <div className="container">{children}</div>
    </section>
  );
};

export default Header_page;
