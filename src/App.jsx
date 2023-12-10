import Header from './Components/Header/Header'
import Hero from './Components/Hero/Hero'
import About from './Components/About/About'
import Offers from './Components/Offers/Offers'
import Location from './Components/Location/Location'
import Footer from './Components/Footer/Footer'
import { CoContext } from "./Context/ComodaContext";
import { useContext, useState } from 'react'
import MenuH from './Components/MenuH/MenuH'
import './App.css'

function App() {

  const { menuH, setScrollH } = useContext(CoContext);
  const [scrollTop, setScrollTop] = useState(0);

  function handleScroll(e) {
    setScrollTop(window.scrollY);

    if (scrollTop > 10){
      setScrollH(true)
    }
    else{
      setScrollH(false)
    }
  }

  window.addEventListener("scroll", handleScroll)

  return (
    <div>
      <Header></Header>
      {menuH === true && <MenuH></MenuH>}
      <Hero></Hero>
      <About></About>
      <Offers></Offers>
      <Location></Location>
      <Footer></Footer>
    </div>
  )
}

export default App
