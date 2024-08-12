import { useEffect, useState } from 'react'
import './App.css'
import Home from './components/Home'

function App() {
  let bannerText = "TODO";
  const link = "";
  
  const [bannerOn, setBannerOn] = useState();
  useEffect(()=>{

  }, [])
  return (
    <>
      <Home/>
    </>
  )
}

export default App
