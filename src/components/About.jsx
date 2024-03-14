import React from 'react'
import logo from '../assets/nonstop-logo.svg'
import detail from '../assets/company-detail.png';
import './About.css'

const About = () => {
  return (
    <>
    <div className='about-header'>
       <img src={logo} alt='company-logo'/>
        <img className='details' src={detail} alt='details'/>
    </div>
    <h2 className='description-head'> Who We Are?</h2>
    <p className='description'>Founded in August 2015, we are a USA-based Bespoke Engineering Studio that provides Product Development as an Expertise.

We are more than just any other engineering team.
We are a group of value-driven, process-oriented software engineers. We provide Product Development Expertise and have 8 years’ worth of experience building products in the application (web and mobile) space across multiple domains. We understand the upside of staying invested in a product’s vision for the long term. We are a small and growing but proud group of individuals, and we believe in good karma.
We are believers in the ‘givers gain philosophy, and provide value to seek value’.

The company works with multiple early-stage and funded startups based out of San Francisco, Seattle, New York, London, and other prominent technology hubs worldwide.</p>
    </>
  )
}

export default About