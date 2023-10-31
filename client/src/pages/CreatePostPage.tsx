import { useState } from "react";
import "./CreatePostPage.scss";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";

const CreatePostPage = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [image, setImage] = useState<File | null>();

  async function createNewPost(event: any) {
    const newPostData = new FormData();
    newPostData.set("title", title);
    newPostData.set("content", content);
    if (image) {
      newPostData.set("image", image);
    }
    event.preventDefault();
    const response = await fetch("http://localhost:4000/create-post", {
      method: "POST",
      body: newPostData,
    });
  }

  return (
    <form onSubmit={createNewPost}>
      <input
        className="title-input background-secondary color-primary"
        type="title"
        placeholder={"Title"}
        value={title}
        onChange={(newTitle) => setTitle(newTitle.target.value)}
      />
      <input
        type="file"
        onChange={(newImage) =>
          setImage(
            newImage.target.files !== null ? newImage.target.files[0] : null
          )
        }
      />
      <ReactQuill
        value={content}
        onChange={(newContent) => setContent(newContent)}
      />
      <button className="background-accent-purple color-primary">
        Submit Post
      </button>
    </form>
  );
};

export default CreatePostPage;
