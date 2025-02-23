import { useState, useCallback, useEffect, useRef} from 'react'


function App() {
  // basic requirements for UI look
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")
  
  const passwordRef = useRef(null)
  // creating password generator
  const passwordGenerator = useCallback(() => {
    let pass ="";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz ";

    if(numberAllowed) str+="0123456789"
    if(charAllowed) str+="!@#$%^&*-+=_"

    for(let i=1; i<=length; i++){
      let charNumber = Math.floor(Math.random()*str.length+1);
      pass+=str.charAt(charNumber) 
    }
    setPassword(pass);

  }, [length, numberAllowed, charAllowed, setPassword])

  const copyPasswordToClipboard = useCallback(() => {
    passwordRef.current?.select()

    window.navigator.clipboard.writeText(password)
  }, [password])

  useEffect(()=>{
    passwordGenerator()
  }, [length, numberAllowed, charAllowed, passwordGenerator])
  
  return (
    <>
      <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 py-3 text-orange-500 bg-gray-700'> 
        <h1 className='text-white text-center py-2'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input 
             type='text'
             value={password}
             className='outline-none w-full py-1 px-3'
             placeholder="Password"
             readOnly
             ref = {passwordRef }
           />

           <button
           onClick={copyPasswordToClipboard} 
           className='outline-none bg-blue-700 text-white px-3 py-0.5 shrink-0'>Copy</button>
        </div>

        <div className='flex text-sm gap-x-2'>
            {/* Range input */}
            <div className='flex item-center gap-x-1'>
              <input 
              type="range"
              min={8}
              max={100}
              value={length}
              className = 'cursor-pointer' 
              onChange={(e) => {setLength(e.target.value)}}
              />
              <label>Length : {length}</label>
            </div>

            {/* Number checkkbox */}
             <div className='flex item-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked = {numberAllowed}
              id="numberInput"
              onChange={() => {
                setNumberAllowed((prev) => !prev);}}
               />
               <label htmlFor='numberInput'>Numbers</label>
             </div>
 
             {/* characters checkbox */}
             <div className='flex item-center gap-x-1'>
              <input 
              type="checkbox"
              defaultChecked = {charAllowed}
              id="charInput"
              onChange={() => {setCharAllowed((prev) => !prev);}}
               />
               <label htmlFor='numberInput'>Characters</label>
             </div>
        </div>
      </div>
    </>
  )
}

export default App
