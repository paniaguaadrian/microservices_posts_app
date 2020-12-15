import React from "react";

// * Components
// Posts
import PostCreate from "./components/Posts/PostCreate";
import PostList from "./components/Posts/PostList";

// Comments
import CommentCreate from "./components/Comments/CommentCreate";

const App = () => {
  return (
    <div className="container">
      <h1>Create Post</h1>
      <PostCreate />
      <hr />
      <h1>Posts</h1>
      <PostList />
    </div>
  );
};

export default App;
