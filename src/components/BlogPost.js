
import React from 'react';

const BlogPost = ({ post }) => {
  return (
    <div>
      <h1>{post.title}</h1>
        <img src={post.image} alt={post.title} />
      <p>{post.description}</p>
        <p>By: {post.author}</p>
        <p>Published: {post.published_date}</p>
        

      {/* Add a button to go back */}
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default BlogPost;