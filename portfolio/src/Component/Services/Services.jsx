import React from 'react'
import './Services.css'
const Services = () => {
  return (
    <div id='services' className="services">
      <h2 className="services-title">Our Services</h2>
      <div className="services-list">
        <div className="service-item">
          <h3 className="service-title">Graphic Design</h3>
          <p className="service-description">We create stunning visuals and graphics that capture your brand's essence.</p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Logo Design</h3>
          <p className="service-description">Our team designs unique logos that make your brand stand out.</p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Brand Identity</h3>
          <p className="service-description">We develop comprehensive brand identities that resonate with your audience.</p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Illustration</h3>
          <p className="service-description">Our illustrations bring your ideas to life with creativity and precision.</p>
        </div>
        <div className="service-item">
          <h3 className="service-title">Typography</h3>
          <p className="service-description">We use typography to enhance your message and create a lasting impact.</p>
        </div>
        <div className="service-item">
          <h3 className="service-title">UI/UX Design</h3>
          <p className="service-description">Our UI/UX designs ensure a seamless and engaging user experience.</p>
        </div>
        <div className="service-item">
          <h3 className="service-title">3d Modeling</h3>
          <p className="service-description">Creating intricate 3D models with precision and creativity.</p>
        </div>
      </div>
      
    </div>
  )
}

export default Services