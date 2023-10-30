import "./Post.scss";

// We define an interface PostDetailsProps to
// specify the shape of the PostDetails component's
// props. In this interface, we declare isDetailsPage as a boolean.
interface PostProps {
  isDetailsPage: boolean;
}

const Post = ({ isDetailsPage }: PostProps) => {
  return (
    <>
      {isDetailsPage ? (
        <div className="post">
          <img
            src="https://techcrunch.com/wp-content/uploads/2023/09/GettyImages-1154922116.jpg?w=940&h=465&crop=1"
            alt=""
          />
          <h2 className="post-title">
            New California law would force firms to report diversity metrics
          </h2>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Post;
