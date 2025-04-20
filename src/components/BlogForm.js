import React, { useState, useEffect } from 'react';

const BlogForm = ({ blog, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    if (blog) {
      setTitle(blog.title);
      setContent(blog.content);
    }
  }, [blog]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !content) return;

    onSubmit({
      id: blog?.id || Date.now(),
      title,
      content,
    });

    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>Title  </label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />

      <label>Content</label>
      <textarea
        rows="4"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />

      <button type="submit">{blog ? 'Update Blog' : 'Post  Blog'}</button>
    </form>
  );
};

export default BlogForm;
