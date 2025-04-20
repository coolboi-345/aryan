import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import BlogForm from './BlogForm';

const EditPost = ({ blogs, handleEdit }) => {
  const { id } = useParams();
  const navigate = useNavigate();

  const blog = blogs.find((b) => b.id.toString() === id);

  const onSubmit = (updatedBlog) => {
    handleEdit(updatedBlog);
    navigate('/');
  };

  return (
    <div>
      <h2>Edit Blog</h2>
      {blog ? <BlogForm blog={blog} onSubmit={onSubmit} /> : <p>Blog not found.</p>}
    </div>
  );
};

export default EditPost;
