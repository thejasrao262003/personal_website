import "./footerStyles.css";
import React from 'react';
import {FaHome, FaPhone, FaMailBulk, FaLinkedin, FaInstagram, FaFacebook, FaGithub} from "react-icons/fa";

const Footer = () =>{
    return (
        <div className="footer">
            <div className="footer-container">
                <div className="left">
                    <div className="location">
                        <FaHome size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                    <div>
                        <p>Bengaluru, Karnataka.</p>
                        <p>India</p>
                    </div>
                    </div>
                    <div className="phone">
                        <h4>
                        <FaPhone size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                    +91 9345258726
                        </h4>
                    </div>
                    <div className="email">
                        <h4>
                        <FaMailBulk size={20} style={{color: "#fff", marginRight:"2rem"}}/>
                    thejasrao262003@gmail.com
                        </h4>
                    </div>
                </div>
                <div className="right">
                    <h4>About Me</h4>
                    <p>This is me, Thejas P Rao, currently a student at PES UNIVERSITY pursuing my BTech degree in Computer Science.</p>
                    <div className="social">
                    <a href="https://www.linkedin.com/in/thejas-p-rao-391a56248/" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                    <a href="https://github.com/thejasrao262003" target="_blank" rel="noopener noreferrer">
                        <FaGithub size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                    <a href="https://www.instagram.com/thejasrao2003/" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} style={{ color: "#fff", marginRight: "1rem" }} />
                    </a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer