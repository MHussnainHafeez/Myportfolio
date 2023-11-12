import React from "react";
import "./about.css"
import UIDesign from "../../assets/ui-design.png"
import WebDesgin from "../../assets/website-design.png"
import AppDesgin from "../../assets/app-design.png"


const TimeLine = () => {
  return (
    <section id="about">
<span className="aboutDes"> I'm a passionate and dedicated MERN stack developer with a strong enthusiasm for creating dynamic and responsive web applications. I thrive in the world of web development, where I blend creativity with technical expertise to craft seamless and user-friendly digital experiences.</span>
<div className="skillBars">
  <div className="skillBar">
    <img src={UIDesign} alt="" className="skillBarImg" />
    <div className="skillBarText">
      <h2>UI/UX Design</h2>
      <p>I specialize in creating eye-catching and user-friendly interfaces that enhance the overall user experience</p>
    </div>
  </div>
  <div className="skillBar">
    <img src={WebDesgin} alt="" className="skillBarImg" />
    <div className="skillBarText">
      <h2>Web Applications</h2>
      <p>I specialize in crafting innovative and user-friendly web applications that transform ideas into seamless digital experiences</p>
    </div>
  </div>
  <div className="skillBar">
    <img src={AppDesgin} alt="" className="skillBarImg" />
    <div className="skillBarText">
      <h2>Mobile Responsive</h2>
      <p>I specialize in creating mobile-responsive web applications and websites, ensuring seamless and visually engaging experiences across various devices and screen sizes</p>
    </div>
  </div>
</div>
    </section>
  );
};

export default TimeLine;
