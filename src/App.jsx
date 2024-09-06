import './App.scss'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import ProjectList from './components/ProjectList/ProjectList'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <>
      <Nav/>
      <main>
        <About/>
        <Skills/>
        <ProjectList/>
        <ContactForm/>
        <Footer/>
      </main>
    </>
  )
}

export default App
