import React, { useState } from 'react'
import './Work.css'
import { assets } from '../../assets/assets';

const Work = () => {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [sliderPosition2, setSliderPosition2] = useState(50);

  const handleSliderChange = (e) => {
    setSliderPosition(e.target.value);
    }

  const handleSliderChange2 = (e) => {
    setSliderPosition2(e.target.value);
  }
  return (
    <div className="mywork-container">
      <h1 className="work-title">Get Enhance Image with AI</h1>
      
      <div className="mywork-title">
      <div className="image-container">
        <img src={assets.pic1} alt="Bottom" className="bottom-image" />
        <img
          src={assets.pic2} alt="Top" className="top-image"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition}%)` }}
        />
        <div className="slider-container">
          <input
            type="range"
            max="95"
            min="5"
            value={sliderPosition}
            onChange={handleSliderChange}
            className="slider"
          />
        </div>
        <div className="label before">Before</div>
        <div className="label after">After</div>
      </div>

      <div className="image-container">
        <img src={assets.pic3} alt="Bottom" className="bottom-image" />
        <img
          src={assets.pic4} alt="Top" className="top-image"
          style={{ clipPath: `inset(0 0 0 ${sliderPosition2}%)` }}
        />
        <div className="slider-container">
          <input
            type="range"
            max="95"
            min="5"
            value={sliderPosition2}
            onChange={handleSliderChange2}
            className="slider"
          />
        </div>
        <div className="label before">Before</div>
        <div className="label after">After</div>
      </div>
      </div>


    </div>
  )
}

export default Work