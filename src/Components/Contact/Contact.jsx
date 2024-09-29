import React from 'react'
import styles from './Contact.module.css';
import { getImageUrl } from '../../utils';

const Contact = () => {
  return (
    <section className={`${styles.contact} ${styles.sectionP1}`} style={{'--background-image':`url(${getImageUrl("contact/c2.jfif")})`}} id='contact'>
        <h1>SEND ME A MESSAGE</h1>
        <hr style={{width:'10%',height:'5px',margin:'0 auto',backgroundColor:'#086ab5',border:'none'}} />
        <div className={styles.contactDetails}>
            <div className={styles.details}>
                <h2>Getting in touch is easy!</h2>
                <ul>
                    <li>56 Glassford Street Glasgow GI IUL New York</li>
                    <li>kottarathilaswathi@gmail.com</li>
                    <li>7902959463</li>
                </ul>
                <div className={styles.icons}>
                <i class="fab fa-facebook-f"></i>
				<i class="fab fa-twitter"></i>
				<i class="fab fa-instagram"></i>
                <i class="fab fa-pinterest-p"></i>

                </div>
            </div>
                <form action="" className={styles.form}>
                    <input type="text" placeholder='Your Name' />
                    <input type="text" placeholder='Your Email' />
                    <textarea name="" id="" placeholder='Your Message' rows='4'></textarea>
                    <button className={styles.sendBtn}>SEND MESSAGE</button>
                </form>

        </div>
      
    </section>
  )
}

export default Contact
