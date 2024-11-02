import React from 'react';
import Heading from '../components/Heading';
import Image from 'next/image';
import about from '../images/about.jpg';
import styles from './about.module.css'; // Import the CSS module

function About() {
  return (
    <>
      <div>
        <Heading title="About" subtitle="Lets Introduce myself with you!" />
      </div>
      <div className={styles.content}>
        <div className={styles.image}>
          <Image src={about} alt="About Image" />
        </div>
        <div className={styles.text}>
          <h1>My Story</h1>
          <p>
          My journey into web development began with curiosity and a desire to learn. I started by exploring YouTube tutorials, where I dove into the fundamentals of web development. Along the way, I explored many areas, gaining insights into various technologies—some I mastered, while others I am still building expertise in. However, through all my learning, I found that web development felt like the perfect fit for me. It became clear that this was the field I wanted to pursue. Today, I am continuing my learning as part of the Governor House initiative, deepening my knowledge and honing my skills.
          </p>
          <h1>I Do Web Design & Development since I was 16 Years Old</h1>
          <p>
          I have been passionate about web design and development since I was 16. After completing my matriculation, I began learning the foundations of web development, and my journey has continued ever since.
          </p>
        </div>
      </div>
    </>
  );
}

export default About;
