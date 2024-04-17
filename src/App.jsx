
import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="head">
        <header>
          <h1>Affan</h1>
        </header>
        <nav>
          <a href="#about" id="abt">About</a> &nbsp; <a href="#education">Education</a> &nbsp; 
          <a href="#technical-skills">Technical Skills</a> &nbsp;
          <a href="#projects">Projects</a> &nbsp;
          <a href="#contact-me">Contact Me</a>
        </nav>
      </div>
      <hr />
      <div className="img">
        <img src="/photo 2.jpg" alt="Affan" height="200px"/>
      </div>
      <div className="body">
        <section id="about">
          <h2>About Me</h2>
          <article className="about-me-content">
            <aside>
              <p>
                Hi, I'm Affan, an aspiring web developer passionate about creating beautiful and functional websites.
                I enjoy turning ideas into reality through coding and constantly seek to enhance my skills in the ever-evolving world of web development.
                With a solid foundation in both front-end and back-end technologies, I strive to build user-friendly and engaging digital experiences.
              </p>
            </aside>
          </article>
        </section>
        <section id="education">
          <h2>Education</h2>
          <table border="2">
            <tr>
              <th>Qualification</th>
              <th>Year</th>
              <th>Grade</th>
            </tr>
            <tr>
              <th>Narayana</th>
              <th>2020</th>
              <th>89.8%</th>
            </tr>
            <tr>
              <th>Allen Career Institute</th>
              <th>2022</th>
              <th>91.1%</th>
            </tr>
            <tr>
              <th>VIT Vellore</th>
              <th>2022-2026</th>
              <th>8.5</th>
            </tr>
          </table>
        </section>
        <section id="technical-skills">
          <h2>Technical Skills</h2>
          <ul>
            <li>Programming Languages(C, C++, Java, Python)</li>
            <li>Front-end Development(HTML, CSS, Javascript, jQuery, React.js)</li>
            <li>Back-end Development(Node.js, Next.js, Express.js, MongoDB)</li>
          </ul>
        </section>
        <section id="projects">
          <h2>Projects</h2>
          <aside>
            <ol>
              <li>TinDog - Tinder for Dogs</li>
              <li>Dice Game</li>
            </ol>
          </aside>
        </section>
        <section id="contact-me">
          <h2>Contact Me</h2>
          <ul>
            <li>Email - affanmwa@gmail.com</li>
            <li>Phone - 8886019885</li>
            <li><a href="https://www.linkedin.com/in/affan-ahammed/" className="linked">LinkedIn</a></li>
          </ul>
        </section>
        <footer>~Available Anytime</footer>
      </div>
    </div>
  );
}

export default App;