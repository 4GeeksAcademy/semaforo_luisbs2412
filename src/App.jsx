import { useState } from 'react'
import './App.css'

function App() {
  const [encendida, setEncendida] = useState("")
  return (
    <>
        <div className="poste"></div>
        <div className="semaforo">
          <div onClick={() => { setEncendida("roja"); }}
            className={
              "luz roja" + (encendida === "roja" ? " rencendida" : "")
            }></div>
          <div onClick={() => { setEncendida("amarilla"); }}
            className={
              "luz amarilla" + (encendida === "amarilla" ? " aencendida" : "")
            }></div>
          <div onClick={() => { setEncendida("verde"); }}
            className={
              "luz verde" + (encendida === "verde" ? " vencendida" : "")
            }></div>
        </div>
    </>
  )
}

export default App
