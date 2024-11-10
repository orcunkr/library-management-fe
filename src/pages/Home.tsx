import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    <h1>Library Management System</h1>
    <nav>
      <Link to="/books">Books</Link> | <Link to="/users">Users</Link>
    </nav>
  </div>
);

export default Home;
