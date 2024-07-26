import React from 'react'
import './Contact.css'
const Contact = () => {


    const onSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
    
        formData.append("access_key", "3aa657a0-4e00-4ddc-a55c-c834133b3e71");
    
        const object = Object.fromEntries(formData);
        const json = JSON.stringify(object);
    
        const res = await fetch("https://api.web3forms.com/submit", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: json
        }).then((res) => res.json());
    
        if (res.success) {
          alert(res.message)
        }
      };

      

  return (
    <div id='contact' className="contact">
        <h1 className='contact-title' >Contact Us</h1>
      <div className="contact-container">
        
        <div className="contact-details">
        <div className="contact-item">
          <h3 className="contact-item-title">Email</h3>
          <p className="contact-item-detail">brijeshsingh200804@gmail.com</p>
        </div>
        <div className="contact-item">
          <h3 className="contact-item-title">Phone</h3>
          <p className="contact-item-detail">+970 220 0130</p>
        </div>
        <div className="contact-item">
          <h3 className="contact-item-title">Address</h3>
          <p className="contact-item-detail">Govandi Slums, Shivaji Nagar, mumbai, maharastra, 400043</p>
        </div>
        
      </div>
      <form onSubmit={onSubmit} className="Contact-here">
        <label htmlFor="">Your Name</label>
        <input type="text" placeholder="Enter your name" name="name"  />
        <label htmlFor="">Your Email</label>
        <input type="email" placeholder="Enter your email" name="email"  />
        <label htmlFor="">Write a message</label>
        <textarea name="message" placeholder='Enter Your Message' rows="8"></textarea>
        <button >
        <span >Submit</span>
      </button>
      </form>
      </div>
    </div>
  )
}

export default Contact