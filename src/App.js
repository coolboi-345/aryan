import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import AddPost from './components/AddPost';
import EditPost from './components/EditPost';
import './App.css';

function App() {
  const [blogs, setBlogs] = useState([]);
  const [nextId, setNextId] = useState(1);

  const handleAdd = (blog) => {
    setBlogs([...blogs, { ...blog, id: nextId }]);
    setNextId(nextId + 1);
  };

  const handleEdit = (updatedBlog) => {
    setBlogs(blogs.map(blog => 
      blog.id === updatedBlog.id ? updatedBlog : blog
    ));
  };
  

  const handleDelete = (id) => {
    setBlogs(blogs.filter((blog) => blog.id !== id));
  };

  return (
    <Router>
      <div className="App">
      <header className="header">
          <h2>
            <Link to="/" className="blogster-link">D𝒶𝒾𝓁𝓎-𝐵𝓁ℴℊ𝓈</Link>
          </h2>
        </header>
        <Routes>
          <Route
            path="/"
            element={<Home blogs={blogs} handleDelete={handleDelete} />}
          />
          <Route
            path="/add"
            element={<AddPost handleAdd={handleAdd} />}
          />
          <Route
            path="/edit/:id"
            element={<EditPost blogs={blogs} handleEdit={handleEdit} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
