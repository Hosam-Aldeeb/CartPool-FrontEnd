import React, { useEffect, useRef } from 'react';
import './about.css';
import SmartShoppingImage from '../../assets/smart_shopping.jpg';
import { init } from 'ityped';

const About = () => {

    const textRef=useRef()

    useEffect(() => {
        init(textRef.current,{
            showCursor: true,
            backSpeed: 50,
            typeSpeed: 90,
            backDelay: 900,
            
            strings:['Welcome to CartPool!','convenience of online grocery shopping with efficiency of personal shopping','Seamless and hassle-free grocery shopping experience ']
        })
        },
    []);
 
    return (
        <section id='about'>
            <div className="container about__container">
                <div className='about__me'>
                    <h1> <span ref={textRef}> </span> </h1>
                </div>
            
                <div className="about__me-image">
                    <img src={SmartShoppingImage} alt='Smart shopping'/>
                </div>
            </div>
        </section>
    )
}

export default About;
