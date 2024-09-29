import React from 'react'
import styles from './Experience.module.css'
import history from '../../data/history.json'
import { getImageUrl } from '../../utils'

const Experience = () => {
  return (
    <section className={`${styles.experience} ${styles.sectionP1}`} id='experience'>
        <h1>EXPERIENCE</h1>
        <h2>MY EXPERIENCE</h2>
        {
          history.map((historyItem,id)=>{
            return(
              <div className={styles.expDetails}>
              <span>{`${historyItem.startDate} - ${historyItem.endDate}`}</span>
              <h3>{historyItem.role}</h3>
              <h4>{historyItem.organisation}</h4>
              <p>{historyItem.description}</p>
          </div>
            );
          })
        }
       
      
    </section>
  )
}

export default Experience
