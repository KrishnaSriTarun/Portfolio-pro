import About from "./Components/About"
import Header from "./Components/Header"
import Hero from "./Components/Hero"
import Skills from './Components/Skills';
import Experiences from './Components/Experiences';
import Projects from "./Components/Projects";
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './index.css'
function App() {

  return (
    <>
    <Header/>
    <Hero
        name="Vansh"
        role="Full Stack Developer"
        intro="I build elegant and scalable web experiences using MERN stack. Let's bring your ideas to life!"
        imageSrc="/me.png"
        resumeLink="https://drive.google.com/file/d/1H76Z5LRdEZ8M40dBoqJC63yijvMiYb8Y/view?usp=drive_link"
        githubLink="https://github.com/vanshjais1777"
        linkedinLink="https://www.linkedin.com/in/vansh-jaiswal-806271218"
        phoneNo="+916386169658"
        emailLink="mailto: vanshjais1777@gmail.com"
      />
      <About/>
      <Skills/>
      <Experiences/>
      <Projects/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App
