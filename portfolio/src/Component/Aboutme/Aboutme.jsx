import React from 'react'
import './Aboutme.css'

import { assets } from '../../assets/assets'
const Aboutme = () => {
  return (
    <div id='aboutme' className="about-me">
      <img src={assets.brijeshsi} alt="About Me" className="about-me-image" />
      <div className="about-me-content">
        <h2 className="about-me-title">About Me</h2>
        <p className="about-me-text">I am a passionate graphic designer with over 2 years of experience in creating beautiful and functional designs.</p>
        <div className="about-me-skills">
          <h3 className="skills-title">Skills</h3>
          <ul className="skills-list">
            <li className="skills-item">
              Graphic Design
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '90%' }}></div>
              </div>
            </li>
            <li className="skills-item">
              Logo Design
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '80%' }}></div>
              </div>
            </li>
            <li className="skills-item">
              Brand Identity
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '85%' }}></div>
              </div>
            </li>
            <li className="skills-item">
              Illustration
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '65%' }}></div>
              </div>
            </li>
            <li className="skills-item">
              Typography
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '70%' }}></div>
              </div>
            </li>
            <li className="skills-item">
              UI/UX Design
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '85%' }}></div>
              </div>
            </li>
            <li className="skills-item">
              3D animation
              <div className="skill-bar">
                <div className="skill-level" style={{ width: '85%' }}></div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Aboutme