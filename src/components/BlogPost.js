
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.description}</p>
      {/* Add a button to go back */}
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default BlogPost;