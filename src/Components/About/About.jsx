import React from 'react'
import styles from './About.module.css';
import { getImageUrl } from '../../utils';

const About = () => {
  return (
    <section className={`${styles.about} ${styles.sectionP1}`} id='about'>
        <div className={styles.aboutImg}>
           
                <img src={getImageUrl("about/cvimg2.jpeg")} height="350" alt="" />
            <div className={styles.imgBorder}>
            </div>
        </div>
        <div className={styles.aboutDetails}>
            <span>HELLO</span>
            <h1>A Little About Me</h1>
            <p>To begin my career as a web developer where I can apply my  
knowledge of HTML,CSS,JS,Python and Django to create 
effective and efficient web solutions, while continuously 
improving my skills and contributing to success of the team.</p>
<div className={styles.aboutMe}>
    <div >
        <h5>Name:</h5>
        <p>Aswathi K</p>
        <h5>Phone:</h5>
        <p>7902959463</p>
    </div>
    <div>
        <h5>Email:</h5>
        <p>kottarathilaswathi@gmail.com</p>
        <h5>Job:</h5>
        <p>Software Trainer</p>
    </div>
    <div>
        <h5>Age:</h5>
        <p>24 years</p>
        <h5>From:</h5>
        <p>Malappuram</p>
    </div>
</div>
<button className={styles.cvBtn}>Download CV</button>
<button className={styles.hireBtn}>Hire Me</button>
        </div>
    </section>
  )
}

export default About
