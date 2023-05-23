import React from 'react';
import myImage from '../assets/images/MadihaUmair.png';

export default function About() {
  return (
    <div>
      <div className="about">
        <div id="about-text-portion">
          <h1>Hi, I'm Madiha <span>...</span></h1>
          <h1> - Full Stack Developer -</h1>
            <p id="about-text">I am passionate about coding and love to build things that can help people.</p>
            <p id="about-text-cont">I am always looking for new challenges and opportunities to learn and grow as a developer.</p>
          <button class="downloadbtn">
            <a href="https://drive.google.com/file/d/10UTAwbjtXjnGM4qt3gLeW1GGTaNrlYny/view?usp=sharing" download="Madiha Resume">
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