import React from 'react';

function Header() {
  return (
    <header className="header">
      <div className="hero">
        <h1>Diya Chauhan</h1>
        <p>Full-Stack Developer | React Enthusiast</p>
        <p className="about">
          Passionate about building user-friendly web apps. Skilled in React, JavaScript, and APIs.
          Currently seeking opportunities in web development.
        </p>
      </div>
      <div className="resume-details">
        <h3>Skills</h3>
        <ul>
          <li>React, JavaScript, HTML/CSS</li>
          <li>APIs (e.g., OMDB, TMDb)</li>
          <li>Git, Vite, Node.js</li>
        </ul>
        <h3>Experience</h3>
        <p><strong>Freelance Developer (2023-Present)</strong>: Built portfolio apps and integrated APIs.</p>
        <p><strong>Graphic Designer at Tatva Academy (2022 - Present) </strong>: Learned Graphic Designing and collaborated on team projects.</p>
      </div>
    </header>
  );
}

export default Header;