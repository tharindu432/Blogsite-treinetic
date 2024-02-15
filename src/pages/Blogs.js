import React, { useState, useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
//importing the data from the json file
import BlogData from '../assets/BlogData.json';

const Blogs = () => {

  
  
  const [posts, setPosts] = useState([]); // Store blog posts
  const [showCreateModal, setShowCreateModal] = useState(false);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editPostId, setEditPostId] = useState(null);
  const [newPost, setNewPost] = useState({
    // Initial state for new post data
    author: '',
    date: '',
    title: '',
    description: '',
    image: '',
  });
  const [editPost, setEditPost] = useState({}); // Track edited post data
  

  useEffect(() => {
    
    setPosts(BlogData);
   
  }, []);

  // Create Post
  const handleCreatePost = (event) => {
    event.preventDefault();

    
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    setShowCreateModal(false);
    setNewPost({ ...newPost, author: '', date: '', title: '', description: '', image: '' });
  };

  // Edit Post
  const handleEditPost = (event) => {
    event.preventDefault();


    const updatedPosts = posts.map((post) => (post.id === editPostId ? editPost : post));
    setPosts(updatedPosts);
    setShowEditModal(false);
    setEditPostId(null);
    setEditPost({});
  };

  // Delete Post
  const handleDeletePost = (postId) => {
   
    const updatedPosts = posts.filter((post) => post.id !== postId);
    setPosts(updatedPosts);
  };

  return (
    
    <Container className="mt-5 mb-1">
      <h2>Blog Posts</h2>

      {/* Create Post Button */}
      <Button variant="warning" onClick={() => setShowCreateModal(true)}>
        Create Post
      </Button>

      {/* Create Post Modal */}
      <Modal show={showCreateModal} onHide={() => setShowCreateModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Create New Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleCreatePost}>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                value={newPost.author}
                onChange={(e) => setNewPost({ ...newPost, author: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select date"
                value={newPost.date}
                onChange={(e) => setNewPost({ ...newPost, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title"
                value={newPost.title}
                onChange={(e) => setNewPost({ ...newPost, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter post description"
                value={newPost.description}
                onChange={(e) => setNewPost({ ...newPost, description: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                value={newPost.image}
                onChange={(e) => setNewPost({ ...newPost, image: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Create
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
        
        {/* Edit Post Modal */}
      <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Edit Post</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleEditPost}>
            <Form.Group controlId="author">
              <Form.Label>Author</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter author name"
                value={editPost.author}
                onChange={(e) => setEditPost({ ...editPost, author: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="date">
              <Form.Label>Date</Form.Label>
              <Form.Control
                type="date"
                placeholder="Select date"
                value={editPost.date}
                onChange={(e) => setEditPost({ ...editPost, date: e.target.value })}
              />
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter post title"
                value={editPost.title}
                onChange={(e) => setEditPost({ ...editPost, title: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="description">
              <Form.Label>Description</Form.Label>
              <Form.Control
                as="textarea"
                rows={3}
                placeholder="Enter post description"
                value={editPost.description}
                onChange={(e) => setEditPost({ ...editPost, description: e.target.value })}
                required
              />
            </Form.Group>
            <Form.Group controlId="image">
              <Form.Label>Image URL</Form.Label>
              <Form.Control
                type="text"
                placeholder="Enter image URL"
                value={editPost.image}
                onChange={(e) => setEditPost({ ...editPost, image: e.target.value })}
              />
            </Form.Group>
            <Button variant="primary" type="submit">
              Save
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
      {/* Blog Posts */}
      <Row className="mt-3">
        {posts.map((post) => (
          <Col md={4} key={post.id}>
            <Card className="mb-3">
              <Card.Img variant="top" src={post.image} />
              <Card.Body>
                <Card.Title>{post.title}</Card.Title>
                <Card.Text>{post.description}</Card.Text>
                <Button variant="primary" onClick={() => setShowEditModal(true)}>
                  Edit
                </Button>
                <Button variant="danger" onClick={() => handleDeletePost(post.id)}>
                  Delete
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

export default Blogs;
        
                
