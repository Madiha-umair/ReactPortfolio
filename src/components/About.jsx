import React from 'react';
import myImage from '../assets/images/MadihaUmair.png';

export default function About() {
  return (
    <div>
        
      <div className="about">
        <div id="profileimg">
        <img src={myImage} alt="My Image" width= "300" height="380" />
        </div>
        <div id="about-text-portion">
        <h1>Hi, I'm <span>Madiha ...</span></h1>
        <h1> Full-Stack Developer!!</h1>
        <p id="about-text">I am passionate about coding and love to build things that can help people.</p>
        <p id="about-text-cont">I am always looking for new challenges and opportunities to learn and grow as a developer.</p>
        <button class="downloadbtn">
          <a href="https://drive.google.com/file/d/1Mo1YVh8InNJLt0ecIg16dIDu8EzD6ruB/view?usp=share_link" download="Madiha Resume">
            Resume  
          </a>
        </button>
      <div className="social-icons">
        <a href="https://www.facebook.com">
          <i className="fa fa-facebook"></i>
        </a>
        <a href="https://www.twitter.com">
          <i className="fa fa-twitter"></i>
        </a>
        <a href="https://www.linkedin.com">
          <i className="fa fa-linkedin"></i>
        </a>
        <a href="https://www.instagram.com">
          <i className="fa fa-instagram"></i>
        </a>
      </div>
      </div>
      </div>
      <hr id="line" />
    </div>
    
  );
}