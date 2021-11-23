import Link from "next/link";
import "@styles/components/navigation.scss";
import { menu_links } from "data";
const Navigation = () => {
  return (
    <ul className="menu ms-auto">
      {menu_links.map(({ name, path, visit }, key) => (
        <li key={key}>
          <Link href={path}>
            <a className={visit ? styles.active : ""}>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
