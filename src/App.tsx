import { Outlet } from "react-router-dom";
// Тут будут распологаться обертки (<StoreProvider> и тд)
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
