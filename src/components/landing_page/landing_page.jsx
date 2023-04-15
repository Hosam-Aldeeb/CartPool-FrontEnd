import React from 'react'
import About from "../about/about";
import Tools from "../tools/tools";
import Contact from "../contact/contact";
import './landing_page.css';

const LandingPage = () => {
  return (
    <div>
        <About />
        <Tools />
        <Contact />
    </div>
  )
}

export default LandingPage;
