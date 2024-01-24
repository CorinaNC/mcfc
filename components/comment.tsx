import React from "react";
import "./comment.css";

const CommentBox = () => {



  return (
    <div className="comment-box">
      <h3 className="comment-title">Comment</h3>
      <textarea 
      className="comment-textarea"/>
      <button className="comment-button">Submit</button>
    </div>
  );
}

export default CommentBox;