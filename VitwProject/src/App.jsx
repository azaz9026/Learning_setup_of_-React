import { useState } from "react";



function App() {

  const [counter, setcounter] = useState(15)

  const addValue = () => {
    setcounter(counter + 1)
    setcounter(counter + 1)
    setcounter(counter + 1)
    setcounter(counter + 1)
  }

  const removeValue = () => {
    setcounter(counter - 1)
  }


  return (
    <>

      <h1 className="text-center bg-green-400">Chai aur React</h1>

      <h2>Counter Value :- {counter} </h2>

      <button onClick={addValue}>Add Value</button>

      <button onClick={removeValue}>Remove Value</button>

   </> 
  )
}

export default App
