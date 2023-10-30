import Post from "../components/Post";
import "./MainPage.scss";

const MainPage = () => {
  return (
    <>
      <div className="posts">
        <Post isDetailsPage={false} />
        <Post isDetailsPage={false} />
        <Post isDetailsPage={false} />
      </div>
    </>
  );
};

export default MainPage;
