import Link from "next/link";
import "styles/components/navigation.scss";
import { menu_links } from "data";

import { useRouter } from "next/router";

const Navigation = () => {
  const router = useRouter();
  const page_active = router.pathname;
  return (
    <ul className="menu ms-auto">
      {menu_links.map(({ name, path }, key) => (
        <li key={key}>
          <Link href={path}>
            <a className={page_active === path ? "active" : ""}>{name}</a>
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
