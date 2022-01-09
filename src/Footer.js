import React from "react";
import "./Footer.css";
import FacebookRoundedIcon from "@mui/icons-material/FacebookRounded";
import TwitterIcon from "@mui/icons-material/Twitter";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import { Link } from "react-router-dom";
function Footer() {
  return (
    <div className="footer">
      <div className="footer__upper">
        <h1>Sk Sajid</h1>
        <div className="footer__upperServices">
          <h4>Brands</h4>
          <h4>Media</h4>
          <h4>E-commerce</h4>
        </div>
      </div>
      <div className="footer__lower">
        <div className="footer__lowerServices">
          <h4>Brand Directory</h4>
          <h4>Case Studies</h4>
          <h4>Blog</h4>
          <h4>Pricing</h4>
          <h4>About</h4>
          <h4>Contact</h4>
        </div>

        <div className="social__icons">
          <a href="https://www.linkedin.com/in/sk-sajid-8a2642205/">
            <div className="social__icon">
              <FacebookRoundedIcon />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sk-sajid-8a2642205/">
            <div className="social__icon">
              <TwitterIcon />
            </div>
          </a>
          <a href="https://github.com/sajid2812">
            <div className="social__icon">
              <GitHubIcon />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sk-sajid-8a2642205/">
            <div className="social__icon">
              <LinkedInIcon />
            </div>
          </a>
          <a href="https://www.linkedin.com/in/sk-sajid-8a2642205/">
            <div className="social__icon">
              <InstagramIcon />
            </div>
          </a>
        </div>
      </div>
      <div className="footer__copyright">
        <div className="terms">
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
        </div>
        <p>Copyright © 2022 Sk Sajid. All rights reserved. Site credit.</p>
      </div>
    </div>
  );
}

export default Footer;
