import { Typography } from "@mui/material";
import React from "react";
import "./About.css";
import mypic from "../../Images/myImage.png"

const About = ({ about }) => {
  return (
    <div id="about">
      <div className="aboutContainer">
        <Typography>About</Typography>
      </div>
      <div className="aboutContainer2">
        <div>
          <img src={mypic} alt="MH Hafeez  " className="aboutAvatar" />

          <Typography
            variant="h4"
            style={{ margin: "1vmax 0", color: "black" }}
          >
           M Hussnain
          </Typography>

          <Typography>DEVELOPER</Typography>

          <Typography style={{ margin: "1vmax 0", textAlign: "center" }}>
            MERN STACK DEVELOPER
          </Typography>
        </div>

        <div>
          <Typography
            style={{
              wordSpacing: "5px",
              lineHeight: "50px",
              letterSpacing: "5px",
              textAlign: "right",
            }}
          >
            I'm a passionate and dedicated MERN stack developer with a strong enthusiasm for creating dynamic and responsive web applications. I thrive in the world of web development.


            {/* {about.description} */}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default About;
