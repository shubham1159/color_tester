import { createRoot } from 'react-dom/client'
import './index.css'

import Nav from './Nav/Nav.jsx'
import Header from './Header/Header.jsx'
import Logo from './Logos/Logo.jsx'
import Benefits from './Benefits/Benefits.jsx'
import Contact from './Contact/Contact.jsx'
import Footer from './Footer/Footer.jsx'


createRoot(document.getElementById('root')).render(
  <>
  <Nav/>
  <Header/>
  <Logo/>
  <Benefits/>
  <Contact/>
  <Footer/>
  </>
  
)
