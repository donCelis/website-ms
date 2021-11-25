import "@styles/components/header-page.scss";

const Header_page = ({ title = "Page" }) => {
  return (
    <section className="header-page">
      <div className="container">
        <h2>{title}</h2>
      </div>
    </section>
  );
};

export default Header_page;
