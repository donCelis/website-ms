import Link from "next/link";
import "@styles/components/navigation.scss";
import { menu_links } from "data";
const Navigation = () => {
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
