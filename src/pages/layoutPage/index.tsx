import { Link, Outlet } from "react-router-dom";

export const LayoutPage = () => {
  return (
    <div>
      <header>
        <nav>
          <Link to="/">Главная</Link>
          <Link to="/notFound">NotFound</Link>
          <Link to="/login">Login</Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
