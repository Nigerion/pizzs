import { Outlet } from "react-router-dom";

import { Header } from "../../components/Header/Header";

export const LayoutPage = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <footer></footer>
    </div>
  );
};
