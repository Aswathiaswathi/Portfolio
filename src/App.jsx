import styles from './App.module.css';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Experience from './Components/Experience/Experience';
import Projects from './Components/Projects/Projects';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import Skills from './Components/Skills/Skills';



function App() {
 
  return (
    <div className={styles.App}>
     <Navbar/>
<Hero/>
<About/>   
<Experience/>
<Skills/>
<Projects/>
<Contact/>
<Footer/>
    </div>
  )
}

export default App
