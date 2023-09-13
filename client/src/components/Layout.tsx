import { Outlet } from "react-router-dom";
import Header from "./Header";
const Layout = () => {
  return (
    <main>
      <Header />
      {/* Will render whatever is passed through the element prop in route */}
      <Outlet />
    </main>
  );
};

export default Layout;
