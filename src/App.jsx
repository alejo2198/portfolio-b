import './App.scss'
import Nav from './components/Nav/Nav'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import ProjectList from './components/ProjectList/ProjectList'
import ContactForm from './components/ContactForm/ContactForm'
import Footer from './components/Footer/Footer'

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <>
      <ToastContainer theme="dark"/>
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
