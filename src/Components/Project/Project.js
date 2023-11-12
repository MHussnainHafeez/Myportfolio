import React from "react";
import "./Project.css";
import seventh from "../../Images/1st.png";
import sixth from "../../Images/2nd.png";
import fifth from "../../Images/3rd.png";
import fourth from "../../Images/4rth.png";
import third from "../../Images/5th.png";
import second from "../../Images/6th.png";
import first from "../../Images/7th.png";

const Project = () => {
  return (
    <section id="works">
      <h2 className="workTitle">PROJECTS</h2>
      <span className="workDes">
        I take pride attention to the smallest details and making sure that my
        work is pixel perfect.
        <br /> Here are Projects made by myself.
      </span>
      <div className="workImgs">
        <div className="block">
          <a
            href="https://github.com/MHussnainHafeez/OnlineMaidFinder"
            target="blank"
          >
            <img src={first} alt="" className="workImg" />{" "}
            <p className="pTitle">Online Maid Finder</p>
          </a>
        </div>
        <div className="block">
          <a href="/" target="blank">
            <img src={second} alt="" className="workImg" />
            <p className="pTitle">Gym Website</p>
          </a>
        </div>
        <div className="block">
          <a href="/" target="blank">
            <img src={third} alt="" className="workImg" />
            <p className="pTitle">Gaming Website</p>
          </a>
        </div>
        <div className="block">
          <a href="/" target="blank">
            <img src={fourth} alt="" className="workImg" />
            <p className="pTitle">Auto Experts</p>
          </a>
        </div>
        <div className="block">
          <a href="/" target="blank">
            <img src={fifth} alt="" className="workImg" />
            <p className="pTitle">WEb Builder</p>
          </a>
        </div>
        <div className="block">
          <a href="/" target="blank">
            <img src={sixth} alt="" className="workImg" />
            <p className="pTitle">Weather App</p>
          </a>
        </div>
        <div className="block">
          <a href="/" target="blank">
            <img src={seventh} alt="" className="workImg" />
            <p className="pTitle">Practice Website</p>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Project;
