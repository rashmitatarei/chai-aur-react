import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  let [counter, setCounter] = useState(5)

  //let counter  =  5

  const incValue = () => {
    // console.log("value added--->",Math.random());
    console.log("incbtnclicked", counter)

    counter = counter + 1
    setCounter(counter)
  }

  const decValue = () => {
    // console.log("decBtnclicked",counter)

    counter = counter - 1
    if (counter < 0)
      setCounter(0)
    else
      setCounter(counter)


  }
  return (
    <>
      <h1>chai aur react</h1>
      <h2>counter value:{counter}</h2>
      <button onClick={incValue}>increament {counter}</button>
      <br />
      <button onClick={decValue}>decrement {counter}</button>
      <p>footer:{counter}</p>
    </>
  )
}

export default App
