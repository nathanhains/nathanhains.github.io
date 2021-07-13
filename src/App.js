import './App.css';
import React, {useState, useEffect} from 'react'
import {AnimatePresence, motion} from 'framer-motion'
import Aos from 'aos'
import 'aos/dist/aos.css'
import Lightbulb from './components/Lightbulb'
import LightbulbBottom from './components/LightbulbBottom'
import NavBar from './components/NavBar'
import Medias from './components/Medias'
import Boxes from './components/Boxes'
const App = () => {

  useEffect(() => {
    Aos.init({duration: 2000});
  }, [])

  const [clicked, setClicked] = useState("no")

  const handleClick = () => {
    clicked === "no" ? setClicked("yes") : setClicked("no")
  }
  
  return (
    <>
    <AnimatePresence>
    <NavBar clicked={clicked} motion={motion}/>
    <div className="App">
      <header id="welcome" className="App-header">
        <Lightbulb clicked={clicked} handleClick={handleClick}/>
      </header>
      {
      clicked === "no" ? null : 
      <>
      <h1 className="Learn">Learn</h1>
      <h1 className="Below" >Below</h1>
      </>
      }
      <h1  className="Fix">Fix</h1>
      <h1 className="The">The</h1>
      <h1 className="Light">Light</h1>   
    </div>
    </AnimatePresence>
        <Boxes motion={motion}/>
        <Medias/>
        <LightbulbBottom clicked={clicked}/>
    </>
  )
  }
export default App;
