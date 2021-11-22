import Link from "next/link";
import "@styles/components/navigation.scss";

const Navigation = () => {
  const menu_links = [
    {
      name: "nosotros",
      path: "/us",
      visit: false,
    },
    {
      name: "actividades",
      path: "/activities",
      visit: false,
    },
    {
      name: "contacto",
      path: "/contact",
      visit: false,
    },
  ];

  return (
    <nav className="menu">
      {menu_links.map(({ name, path, visit }, key) => (
        <Link key={key} href={path}>
          <a className={visit ? styles.active : ""}>{name}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
