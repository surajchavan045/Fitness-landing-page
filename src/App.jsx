import { useEffect, useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

function App = () => {
  
const [darkMode, setDarkMode] = useState(() => {
  const savedTheme = localStorage.getItem("theme");
  return savedTheme ? savedTheme = "dark" : true;
});

useEffect(() => {
   if (darkMode) {
    document.do
   }
})

  return (
    <>
      <div>
        <Navbar />
        <Hero />
      </div>
    </>
  )
}

export default App
