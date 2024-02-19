import { useState } from 'react'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter] = useState(0)

  // let counter = 1

  const addValue = () => {
    // console.log("value added", Math.floor(Math.random()*6));
    // counter = counter + 
    if(counter < 20){
      setCounter(counter + 1)
      setCounter((prevCounter) => {return prevCounter + 1})
      
    }
    console.log("clicked", counter);
  }

  const removeValue = () => {
    // console.log("value added", Math.floor(Math.random()*6));
    // counter = counter + 1
    if(counter >= 1){
      setCounter(counter - 1)
    }
    console.log("clicked", counter);
  }

  return (
    <>
    <h1>chai aur react</h1>
    <h2>Counter: {counter}</h2>
    <button
    onClick={addValue}
    >Increase value {counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Decrease value {counter}</button>
    <p>footer {counter}</p>
    </>
  )
}

export default App
