import './HeroimgStyles.css';
import {Link} from "react-router-dom";
import React from 'react';
import coverimg from "../assets/cover.jpg";

const Heroimg = () => {
  return (
    <div className='hero'>
        <div className='mask'>
          <img className='intro_img' src={coverimg} alt="CoverImg"></img>
        </div>
        <div className='content'>
        <h1>Hi, I'm Thejas.</h1>
        <p>I'm a machine learning enthusiast and a part time web developer!</p>
        <div>
          <Link to="/projects" className='btn'>Projects</Link>
          <Link to="/contact" className='btn btn-light'>Contact</Link>
        </div>
        </div>
    </div>
  )
}

export default Heroimg