import React from 'react';
import { useParams } from 'react-router-dom';
import BlogData from '../assets/BlogData.json';
import 'bootstrap/dist/css/bootstrap.min.css';

const BlogPost = () => {
    const { id } = useParams();
    const post = BlogData.find((post) => post.id === Number(id));
    if (!post) {
        return <div>Post not found!</div>;
    }
    return (
        <div className="container mt-5">
            <br></br>
            <br></br>
            <h1 className="mb-4">{post.title}</h1>
            <img src={post.image} alt={post.title} className="img-fluid mb-3 " style={{ width: '80vw' }} />
            <p className="text-justify">{post.content}</p>
            <p><strong>By:</strong> {post.author}</p>
            <p><strong>Published:</strong> {post.published_date}</p>

            {/* Add a button to go back */}
            <button onClick={() => window.history.back()} className="btn btn-warning">Go Back</button>
        </div>
    );
};

export default BlogPost;