// src/components/Home.js
import React from 'react';

const Home = () => {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      <h1>Welcome to My Portfolio</h1>
      <p>
        Hi, I'm <strong>Chinta Leela Sai Manohar</strong> – a B.Tech IT student passionate about
        web development, AI, and software projects.
      </p>
      <p>
        Explore my projects, check out my skills, and feel free to contact me!
      </p>
      <img 
        src="https://via.placeholder.com/250" 
        alt="Profile" 
        style={{ borderRadius: '50%', marginTop: '20px' }} 
      />
    </div>
  );
};

export default Home;