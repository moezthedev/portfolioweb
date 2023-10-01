
import './App.css'
import Header from './components/header'
import GoToTopButton from './components/gototop/gototop'
import Skills from './components/skills/skills'
import Services from './components/services/services'
import ProjectDetail from './components/projects/projects'
import ContactForm from './components/contact/contact'
import Footer from './components/footer/footer'
function App() {


  return (
    <>
   <Header/>
   <GoToTopButton/>
   <Skills/>
   <Services/>
  <ProjectDetail/>
    <ContactForm/>
    <Footer/>
    </>
  )
}

export default App
