import React from 'react';
import { useNavigate } from 'react-router-dom';
import BlogForm from './BlogForm';

const AddPost = ({ handleAdd }) => {
  const navigate = useNavigate();

  const onSubmit = (blog) => {
    handleAdd(blog);
    navigate('/');
  };

  return (
    <div>
      <h2>New Blog</h2>
      <BlogForm onSubmit={onSubmit} />
    </div>
  );
};

export default AddPost;
