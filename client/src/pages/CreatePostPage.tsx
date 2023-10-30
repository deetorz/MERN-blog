import "./CreatePostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePostPage = () => {
  return (
    <form>
      <input
        className="title-input background-secondary color-primary"
        type="title"
        placeholder={"Title"}
      />
      <input type="file" />
      <ReactQuill />
      <button className="background-accent-purple color-primary">
        Submit Post
      </button>
    </form>
  );
};

export default CreatePostPage;
