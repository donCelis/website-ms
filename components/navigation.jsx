import Link from "next/link";
import { menu } from "@styles/components/navigation.module.css";

const Navigation = () => {
  const menu_links = [
    {
      name: "nosotros",
      path: "/us",
    },
    {
      name: "actividades",
      path: "/activities",
    },
    {
      name: "contacto",
      path: "/contact",
    },
  ];

  return (
    <nav className={menu}>
      {menu_links.map(({ name, path }, key) => (
        <Link key={key} href={path}>
          <a>{name}</a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;
