import { Typography } from "@mui/material";
import React from "react";

import { BsGithub, BsInstagram, BsLinkedin, BsFacebook } from "react-icons/bs";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
  
      <div>
        <Typography variant="h5">About Me</Typography>
        <Typography>
          Hey, my name is M Hussnain Hafeez. I'm a passionate and dedicated MERN stack developer with a strong enthusiasm for creating dynamic and responsive web applications.
        </Typography>

       
      </div>
      <div>
        <Typography variant="h6">Social Media</Typography>
        <a href="https://github.com/MHussnainHafeez" target="black">
          <BsGithub />
        </a>
        <a href="https://www.facebook.com/hussnain.hafeez.19/" target="black">
          <BsFacebook />
        </a>
        <a href="https://www.instagram.com/mhussnainhafeez_19/" target="black">
          <BsInstagram />
        </a>
        <a href="https://www.linkedin.com/in/m-hussnain-hafeez-5b1806227/" target="black">
          <BsLinkedin />
        </a>
      </div>
    </div>
  );
};

export default Footer;
