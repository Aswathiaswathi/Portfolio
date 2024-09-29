import React from 'react'
import { getImageUrl } from '../../utils'
import styles from "./Hero.module.css"
import '../../index.css'

const Hero = () => {
  return (
    <section className={`${styles.hero} ${styles.sectionP1}`} id='home'>
        <div className={styles.homeBox}>
            
            <div className={styles.homeDetails}>
                <h5>HELLO EVERYBODY, I AM </h5>
                <h1>ASWATHI K</h1>
                <h4>SOFTWARE TRAINER</h4>
                <p>I imparted foundational knowledge and practical skills in 
various programming languages like  Python, C, C++, HTML, 
CSS, JS, PHP, Django to beginners.</p>
                <button>Contact Me</button>
            </div>
            <div className={styles.homeImg}>
                <img src={getImageUrl("home/cvimg.jpeg")} height={150} alt="Photograph" />
            </div>
        
        </div>
        
      
    </section>
  )
}

export default Hero
