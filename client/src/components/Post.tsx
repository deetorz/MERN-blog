import { format, formatISO9075, parseISO } from "date-fns";
import "./Post.scss";
import { Link } from "react-router-dom";

// We define an interface PostDetailsProps to
// specify the shape of the PostDetails props
interface PostProps {
  isDetailsPage: boolean;
  title: string;
  content: string;
  image: string;
  createdAt: string;
}

const Post = (postProps: PostProps) => {
  return (
    <>
      {postProps.isDetailsPage ? (
        <div></div>
      ) : (
        <div className="post">
          <Link to={"/post/id"}>
            <img src={"http://localhost:4000/" + postProps.image} alt="" />
          </Link>
          <div className="post-title">
            <Link className="color-primary link" to={"/post/id"}>
              <h2>{postProps.title}</h2>
            </Link>
            <span>{format(new Date(postProps.createdAt), "MMM dd, yyyy")}</span>
          </div>
        </div>
      )}
    </>
  );
};

export default Post;
