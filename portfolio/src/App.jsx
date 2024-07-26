import React from 'react'
import Aboutme from './Component/Aboutme/Aboutme'
import Footer from './Component/Footer/Footer'
import Navbar from './Component/Navbar/Navbar'
import Services from './Component/Services/Services'
import Work from './Component/Work/Work'
import Mywork from './Component/Mywork/Mywork'
import Contact from './Component/Contact/Contact'
import FooterN from './Component/End/FooterN'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Footer/>
      <Aboutme/> 
      <Services/>
      <Mywork/>
      <Work/>
      <Contact/>
      <FooterN/>
      
    </div>
  )
}

export default App