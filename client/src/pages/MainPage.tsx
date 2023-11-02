import { Key, useEffect, useState } from "react";
import Post from "../components/Post";
import "./MainPage.scss";

interface Post {
  _id: Key;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const MainPage = () => {
  const [posts, setPosts] = useState(Array<Post>);
  useEffect(() => {
    fetch("http://localhost:4000/posts").then((response) => {
      response.json().then((posts) => {
        setPosts(posts);
      });
    });
  }, []);

  return (
    <>
      <div className="posts">
        {posts.map((post: Post) => {
          return <Post key={post._id} isDetailsPage={false} {...post} />;
        })}
      </div>
    </>
  );
};

export default MainPage;
