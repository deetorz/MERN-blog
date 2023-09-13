import Post from "../components/Post";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="posts">
        <Post />
        <Post />
        <Post />
      </div>
    </>
  );
};

export default MainPage;
