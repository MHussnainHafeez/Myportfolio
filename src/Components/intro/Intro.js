import React from 'react'
import "./Intro.css"
import bg from "../../Images/bg.png"
import { Link } from 'react-router-dom'
import  btnImg from "../../assets/hireme.png"
const Intro = () => {
  return (
    <section id='intro'>
<div className="introContent">
    <span className="hello">Hello,</span>
    <span className="introText">I'm <span className="introName">Hussnain</span> <br /> MERN Stack Developer</span>
    <p className="introPara">I am a skilled MERN Stack Web Developer with experience in creating <br/> responsive and user friendly websites.</p>
<Link><button className="btn"><img src={btnImg} alt="hireme" className='btnImg'/> Hire Me</button></Link>
</div>
<img src={bg} alt="" className="bg" />
    </section>
  )
}

export default Intro
