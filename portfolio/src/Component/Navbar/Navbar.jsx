import React from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link } from 'react-scroll'

const Navbar = () => {
  const syncPointer = (event) => {
    const pointerX = event.x;
    const pointerY = event.y;

    const x = pointerX.toFixed(2);
    const y = pointerY.toFixed(2);
    const xp = (pointerX / window.innerWidth).toFixed(2);
    const yp = (pointerY / window.innerHeight).toFixed(2);

    document.documentElement.style.setProperty('--x', x);
    document.documentElement.style.setProperty('--xp', xp);
    document.documentElement.style.setProperty('--y', y);
    document.documentElement.style.setProperty('--yp', yp);
};

document.body.addEventListener('pointermove', syncPointer);

const scrollToContact = () => {
  const contactSection = document.getElementById('contact');
  if (contactSection) {
    contactSection.scrollIntoView({ behavior: 'smooth' });
  }
};


  return (
    <div id='navbar' className='navbar' >

      <div className="menu">
        <img src="" alt="" className="navclose" />
        <Link activeClass='active' to='home' spy={true} smooth={true} offset={-100} duration={500} className='menulist'>Home</Link>
        <Link activeClass='active' to='aboutme' spy={true} smooth={true} offset={-40} duration={500} className='menulist'>About me</Link>
        <Link activeClass='active' to='services' spy={true} smooth={true} offset={-40} duration={500} className='menulist'>Service</Link>
        <Link activeClass='active' to='work' spy={true} smooth={true} offset={0} duration={500} className='menulist'>Portfolio</Link>
      </div>
      <button onClick={scrollToContact}>
        <span>Connect with us</span>
      </button>
    </div>
  )
}

export default Navbar