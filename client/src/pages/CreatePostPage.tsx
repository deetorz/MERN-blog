import "./CreatePostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePostPage = () => {
  return (
    <form>
      <input className="title-input" type="title" placeholder={"Title"} />
      <input type="file" />
      <ReactQuill />
    </form>
  );
};

export default CreatePostPage;
