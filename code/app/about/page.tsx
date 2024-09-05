"use client";

import React from 'react';
import Link from 'next/link';
import '@/app/template/about.css'

const About = () => {
  return (
    <div className="about-page">
      <div className="content">
        <h1 className='aboutus'>About Us</h1>
        <p>Hello! We are the students from NYP, a group of passionate software developers with a keen interest in cybersecurity and digital forensics.</p>
        <br />
        <p>With a strong background in computer science, I have honed my skills in various programming languages and technologies. <br /> My journey into the world of cybersecurity has been fueled by a desire to understand the intricate details of digital security and to help protect sensitive information from cyber threats.</p>
        <br />
        <p>In our free time, We enjoy exploring new technologies, working on personal projects, and contributing to open-source communities. <br />We are always eager to learn and take on new challenges that push the boundaries of our knowledge and capabilities.</p>
        <br />
        <p>Feel free to reach out to us via <a href="https://www.nyp.edu.sg/student" className="contact-link">email</a> or connect with us on <a href="https://www.linkedin.com/in/leehsienloong/?originalSubdomain=sg" target="_blank" rel="noopener noreferrer" className="contact-link">LinkedIn</a>.</p>
        <h1 className= 'max-w-6xl mx-auto p-4'>SKIBIDIERS OUT </h1>
      </div>
    </div>
  );
};

export default About; 