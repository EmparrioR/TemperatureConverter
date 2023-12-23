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

export default {getKelvin,getFarenheit}  