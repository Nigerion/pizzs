import { Link, useLocation } from "react-router-dom";

import cl from "./Header.module.scss";

export const Header = () => {
  const location = useLocation();

  return (
    <header className={cl.header}>
      <div className={cl.logo}>PizzaApp</div>
      <nav>
        <ul className={cl.nav}>
          <li>
            <Link
              to="/"
              className={`${cl.link} ${location.pathname === "/" ? cl.active : ""}`}
            >
              Главная
            </Link>
          </li>
          <li>
            <Link
              to="/notFound"
              className={`${cl.link} ${location.pathname === "/notFound" ? cl.active : ""}`}
            >
              NotFound
            </Link>
          </li>
          <li>
            <Link
              to="/login"
              className={`${cl.link} ${location.pathname === "/login" ? cl.active : ""}`}
            >
              Login
            </Link>
          </li>
        </ul>
      </nav>
      <div className={cl.userSection}>Пользователь</div>
    </header>
  );
};
