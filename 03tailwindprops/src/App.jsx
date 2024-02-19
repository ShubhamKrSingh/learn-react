import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card.jsx'

function App() {


  return (
    <>
      <h1 className='bg-green-400 text-black rounded-xl m-4 p-4'>chai aur code</h1>
      <Card username= "shubham" btnText= 'click me'/>
      <Card username= "saurabh" btnText= 'visit me'/>
    </>
  )
}

export default App
