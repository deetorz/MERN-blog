import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

function App() {
  return (
    // create a list of routes
    <Routes>
      {/* main route for the layout */}
      <Route path={"/"} element={<Layout />}>
        {/* default route */}
        <Route index element={<MainPage />} />
        {/* additional routes */}
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/register"} element={<RegisterPage />} />
        <Route path={"/post"} element={<div>Post</div>} />
      </Route>
    </Routes>
  );
}

export default App;
