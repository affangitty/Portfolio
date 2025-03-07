import React from "react";
import "./About.css";
import my_img1 from "../../assets/My_Picture.jpg";
import my_img2 from "../../assets/My_Picture2.jpg";

function About() {
  return (
    <section className="aboutSection" id="About">
      <h1>About Me</h1>
      <h2>Why Choose Me?</h2>
      <div className="aboutBox">
        <p>
          Hailing from Bengaluru, Karnataka, I am a passionate Full-Stack Web Developer currently pursuing a Bachelor's degree in Computer Science and Engineering at Vellore Institute of Technology. With expertise in React.js, Next.js, and TypeScript, I specialize in building scalable and efficient web applications.
          Through my internships at M&G and Valsco Technology, I have honed my skills in frontend development, collaborating with designers to create seamless user experiences. My work on projects like HackOff, JetSetMed, and TripMate has strengthened my ability to craft innovative digital solutions.
          Driven by a constant desire to learn and innovate, I embrace challenges in web development and software engineering, striving to push the boundaries of creativity and technology. I am always seeking opportunities to contribute to impactful projects and deliver exceptional digital experiences.
        </p>
      </div>
    </section>
  );
}

export default About;
