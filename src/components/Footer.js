import React from "react";
import TwitterIcon from "@material-ui/icons/Twitter";
import GithubIcon from "@material-ui/icons/GitHub";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import "../styles/Footer.css";

function Footer() {
  return (
    <div className="footer">
      <div className="socialMedia">
        <a
          href="https://www.linkedin.com/in/aseem-kulkarni-b13330166/"
          style={{ "text-decoration-lines": "none" }}
        >
          <LinkedInIcon />
        </a>
        <a href="https://twitter.com/aseem_kulkarni">
          <TwitterIcon />
        </a>
        <a href="https://github.com/Crucibo">
          <GithubIcon />
        </a>
      </div>
    </div>
  );
}

export default Footer;
