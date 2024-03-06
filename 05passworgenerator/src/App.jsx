import { useState, useCallback } from 'react'

import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numberAllowed, setNumberAllowed] = useState(false);

  const [charAllwed, setCharAllowed] = useState(false);
  const [password, setPassword] = useState("")
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = ""
    "ABCDEFGHIJKLMNOPQRSHTUVWXYZabcdefghijklmnopqrstvuwxyz"
    if (numberAllowed) str += "0123456789"
    if (password) str += "!@$%&*-=+{}[]~`"

    for (let i = 1; i <= arr.length; i++) {
      let char = Math.floor(Math.random() * str.length + 1)

      pass = str.charAt(char)
    }
    setPassword(pass)


  }, [length, numberAllowed, charAllwed, setPassword])



  return (
    <>
      <div className="w-full max-w-md mx-auto shaow-md rounded-lg  px-4 my-8 text-orange-500 bg-gray-700" >
        <h1 className='text-white text-center'>passwordGenerator</h1>

        <div className='className=" flex shadow rounded-lg overflow-hidden mb-4" ' >
          <input
            type="text"
            value={password}
            className='outline-none w-full py-1 px-3'
            placeholder='password '
            readOnly
          />
          <button className='bg-blue-700 text-white outline-none px-3 py-0.5 sharink-0'>copy</button>

        </div>
        <div className='flex text-5m gap-x-2'>
          <div className='flex items-center gap-x-1'>
            <input
              type="range"
              min={6}
              max={100}
              value={length}
              className='cursor-pointer'
              onChange={(e) => { setLength(e.target.value) }}
            />
            <label>Length:{length}</label>
          </div>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={numberAllowed}
            id='numberInput'
            onChange={() => {
              setNumberAllowed((prev) => !prev);
            }}
          />
          <label htmlfor="numberInput">Numbers</label>
        </div>
        <div className='flex items-center gap-x-1'>
          <input
            type="checkbox"
            defaultChecked={charAllwed}
            id='characterInput'
            onChange={() => {
              setCharAllowed((prev) => !prev);
            }}

          />
          <label htmlfor="charterInput"> Character</label>
        </div>
      </div>

    </>
  )

}
export default App;
