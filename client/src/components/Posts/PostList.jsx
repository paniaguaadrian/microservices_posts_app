import React, { useState, useEffect } from "react";
import axios from "axios";

// Components
import CommentCreate from "../Comments/CommentCreate";
import CommentList from "../Comments/CommentList";

const PostList = () => {
  const [posts, setPosts] = useState({});

  const fetchPosts = async () => {
    // * We change the PORT of localhost from 4000 to 4002 bc we want to target the query service.
    const res = await axios.get("http://localhost:4002/posts");
    setPosts(res.data);
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  const renderedPosts = Object.values(posts).map((post) => {
    return (
      <div
        className="card"
        key={post.id}
        style={{ marginBottom: "20px", width: "30%" }}
      >
        <div className="card-body">
          <h3>{post.title}</h3>
          <CommentList comments={post.comments} />
          <CommentCreate postId={post.id} />
        </div>
      </div>
    );
  });

  return (
    <div className="d-flex flex-row flex-wrap justify-content-between">
      {renderedPosts}
    </div>
  );
};

export default PostList;
