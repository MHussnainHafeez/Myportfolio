import "./Home.css";

import { Typography } from "@mui/material";
import html from "../../Images/html.png";
import Css from "../../Images/css.png";
import Css2 from "../../Images/css.png";
import js from "../../Images/js.png";
import nodejs from "../../Images/node.png";
import reactjs from "../../Images/react.png";
import Project from "../Project/Project";

import TimeLine from "../TimeLine/TimeLine";
import Contact from "../contact me/Contact";

const Home = () => {
  return (
    <div className="home">
      <div className="homeContainer">
        <Typography variant="h3">What I DO?</Typography>
        <TimeLine />
      </div>
      <div className="homeSkills">
        <Typography variant="h3">Skills</Typography>
        <div className="homeCubeSkills">
          <div className="homeCubeSkillsFaces homeCubeSkillsFace1">
            <img src={html} alt="Face1" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace2">
            <img src={Css} alt="Face2" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace3">
            <img src={Css2} alt="Face3" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace4">
            <img src={js} alt="Face4" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace5">
            <img src={nodejs} alt="Face5" />
          </div>

          <div className="homeCubeSkillsFaces homeCubeSkillsFace6">
            <img src={reactjs} alt="Face6" />
          </div>
        </div>

        <div className="cubeShadow"></div>

        {/* <div className="homeskillsBox" id="homeskillsBox">
          <SiCplusplus />
          <SiHtml5 />
          <SiCss3 />
          <SiJavascript />
          <SiMongodb />
          <SiExpress />
          <SiReact />
          <SiNodedotjs />
          <SiThreedotjs />
        </div> */}
      </div>
      <div className="projectSection">
        <div className="homeYoutubeWrapper">
          <Project />
        </div>
      </div>
      <div className="contct">
        <Contact/>
      </div>
    </div>
  );
};

export default Home;
