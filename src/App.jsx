import { useRef, useState } from "react";
import './App.css'


function App() {
  const [output, setOutput] = useState('')
  const inputRef = useRef(null)

  
  function getKelvin() {
    const input = inputRef.current.value;
    const tempK = `${(Math.floor(parseInt(input) + 273.15))} ºK`
    setOutput(tempK)
  }

  function getFarenheit() {
    const input = inputRef.current.value
    const tempF = `${(Math.floor(input * (9/5) + 32))} ºF`
    setOutput(tempF)
  }


  return (
    <div >
      <div>
        <div>
          <div>
            <h1>Sıcaklık Birimi Dönüştürücü</h1>
            <p>
              Sıcaklıklar Arasında Kolaylıkla Dönüşüm Yapın
            </p>
          </div>
          <div >
      
            <input
              type="text"
              id="tempInput"
              ref={inputRef}
              placeholder="ºC (Celsius)"
              className=""
            />
           
          </div>
          <div >
            <button id="convertC" onClick={getKelvin}>
              Kelvin'e Dönüştür
            </button>
            
            <button  id="convertF" onClick={getFarenheit}>
              Fahrenheit'a Dönüştür
            </button>
          </div>
          <span >{output}</span>
        </div>
      </div>
    </div>
  );
}

export default App;