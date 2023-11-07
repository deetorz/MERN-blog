import { Route, Routes } from "react-router-dom";
import "./App.css";
import Layout from "./components/Layout";
import MainPage from "./pages/MainPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import PostDetailsPage from "./pages/PostDetailsPage";
import { UserContextProvider } from "./UserContext";
import CreatePostPage from "./pages/CreatePostPage";

function App() {
  return (
    // This allows access to the user context so read/write stored user data
    <UserContextProvider>
      {/* create a list of routes */}
      <Routes>
        {/* main route for the layout */}
        <Route path={"/"} element={<Layout />}>
          {/* default route */}
          <Route index element={<MainPage />} />
          {/* additional routes */}
          <Route path={"/login"} element={<LoginPage />} />
          <Route path={"/register"} element={<RegisterPage />} />
          <Route path={"/create-post"} element={<CreatePostPage />} />
          <Route path={"/post/:id"} element={<PostDetailsPage />} />
        </Route>
      </Routes>
    </UserContextProvider>
  );
}

export default App;
