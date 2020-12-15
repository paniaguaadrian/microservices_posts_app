import React, { useState } from "react";

const CommentCreate = ({ postI }) => {
  const submitHandler = () => {
    console.log("comment created");
  };
  return (
    <div>
      <form>
        <div className="form-group">
          <label>New Comment</label>
          <input className="form-control" />
        </div>
        <button className="btn btn-primary">Submit</button>
      </form>
    </div>
  );
};

export default CommentCreate;
