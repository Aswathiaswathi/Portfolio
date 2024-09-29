import React from 'react'
import styles from './Skills.module.css'
import skills from '../../data/skills.json'
import {getImageUrl} from '../../utils'

const Skills = () => {
  return (
    <section id='skills' className={`${styles.sectionP1} ${styles.skillsSec}`}>
      <h1>SKILLS</h1>
        <div className={styles.skills}>
          {skills.map((skill,id)=>{
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </div>
      
    </section>
  )
}

export default Skills
