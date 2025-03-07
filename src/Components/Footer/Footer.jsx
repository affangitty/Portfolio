import React from "react";
import "./Footer.css";
import github from "../../assets/github.png";
import linkedin from "../../assets/linkedin.png";
import instagram from "../../assets/Instagram.png";
import twitter from "../../assets/Twitter.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="copyright">&#169; 2025 &nbsp;&nbsp; Affan Ahammed</div>
      <div className="links">
        <ul>
          <li>
            <a
              href="https://github.com/affangitty"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={github} alt="Github" />
            </a>
          </li>
          <li>
            <a
              href="http://www.linkedin.com/in/affan-ahammed"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={linkedin} alt="Linkedin" />
            </a>
          </li>
          <li>
            <a
              href="https://www.instagram.com/_affan__42/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={instagram} alt="Instagram" />
            </a>
          </li>
          <li>
            <a
              href="https://twitter.com/AffanX42"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img src={twitter} alt="Twitter" />
            </a>
          </li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
