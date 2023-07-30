import "./AboutContentStyles.css"
import {Link} from "react-router-dom";
import React from 'react'
import React1 from "../assets/machinelearning.jpg"
import React2 from "../assets/ai.jpg"

const AboutContent = () => {
  return (
    <div className="about">
        <div className="left">
            <h1>Who am I?</h1>
            <p> I am a passionate and ambitious Computer Science Engineering (CSE) student at PES University, fueled by an insatiable curiosity for cutting-edge technologies. My journey in the realm of technology has led me to explore the fascinating fields of Artificial Intelligence (AI), Machine Learning (ML), and Data Science, where I find myself constantly delving into the intricacies of data analysis and predictive modeling.</p>
            <Link to="/contact">
                <button className="btn">Contact</button>
            </Link>
        </div>
        <div className="right">
            <div className="img-container">
                <div className="img-stack top">
                    <img src={React1} className="img" alt="true"></img>
                </div>
                <div className="img-stack bottom">
                    <img src={React2} className="img" alt="true"></img>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AboutContent