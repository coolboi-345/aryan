import React from "react";
import { Link } from "react-router-dom";

const Home = ({ blogs, handleDelete }) => {
  return (
    <div className="home">
      <Link to="/add" className="add-btn">Create Blog</Link>
      {blogs.length === 0 ? (
        <p>No Existing Blogs Available</p>
      ) : (
        blogs.map((blog) => (
          <div key={blog.id} className="blog-post">
            <h3>{blog.title}</h3>
            <p>{blog.content}</p>
            <div className="actions">
              <Link to={`/edit/${blog.id}`} className="edit-btn">Edit Blog</Link>
              <button onClick={() => handleDelete(blog.id)} className="delete-btn">Delete Blog</button>
            </div>
          </div>
        ))
      )}
    </div>
  );
};

export default Home;
