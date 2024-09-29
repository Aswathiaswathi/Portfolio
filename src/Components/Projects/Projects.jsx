import React from 'react';
import styles from './Projects.module.css';
import { getImageUrl } from '../../utils';
import projects from '../../data/projects.json';

const Projects = () => {
  return (
    <section  className={`${styles.projects}  ${styles.sectionP1} `} id='projects'>
        <h1>MY PROJECTS</h1>
        <div className={styles.proContainer}>
            {
                projects.map((project,id)=>{
                    return(
                        <div key={id} className={styles.pro}>
                        <img src={getImageUrl(project.imageSrc)} alt="" />
                        <div className={styles.proDetails}>
                            <h4>{project.title}</h4>
                            <h5>{project.subTitle}</h5>
                            <div className={styles.description}>
                            <p>{project.description}</p>
                            <ul>
                                {
                                    project.skills.map((skill,id)=>{
                                      return(<li key={id}>{skill}</li>);
                                    })
                                }
                            </ul>
                            </div>
                            <div className={styles.links}>
                               <a href={project.preview} className={styles.previewBtn}>Preview</a> 
                               <a href={project.source} className={styles.githubBtn}>GitHub Link</a>
                            </div>
                        </div>
                    </div>
                    );
                })
            }
                 
        </div>
    </section>
  )
}

export default Projects
