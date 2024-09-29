import React,{useState} from 'react'
import styles from './Navbar.module.css';
import { getImageUrl } from '../../utils';


const Navbar = () => {
  const [menuOpen,setMenuOpen]=useState(false)
  return (
    <section className={styles.header}>
    <nav className={styles.navbar}>
      <a href="/" className={styles.title}>Portfolio</a>
      <div className={styles.menu}>
        <img className={styles.menubtn} src={ menuOpen ? getImageUrl("nav/close.png") : getImageUrl("nav/menuicon.png") }
         height="30"  alt="Menuicon-button" onClick={()=> setMenuOpen(!menuOpen)} />
        <ul className={`${styles.menuitems} ${menuOpen && styles.menuopen}`} onClick={()=>setMenuOpen(false)}>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>

        </ul>
      </div>
     
    </nav>
    </section>

  )
}

export default Navbar
