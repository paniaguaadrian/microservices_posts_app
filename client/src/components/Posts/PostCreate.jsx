import React, { useState } from "react";
import axios from "axios";

const PostCreate = () => {
  const [title, setTitle] = useState("");

  const submitHandler = async (event) => {
    event.preventDefault();

    await axios.post("http://localhost:4000/posts", {
      title,
    });
    // clear the input after submit
    setTitle("");
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div className="form-group">
          <label>Title</label>
          <input
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="form-control"
          />
        </div>
        <button className="btn btn-primary mt-3">Submit</button>
      </form>
    </div>
  );
};

export default PostCreate;
