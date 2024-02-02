import axios from "axios";
import { useState } from "react";
function App() {
  const [deg, setDeg] = useState("0");
  const [wea, setWea] = useState("Raining");
  const [city, setCity] = useState("London");
  const [entered, setEntered] = useState("");
  function handleInput(event) {
    setEntered(event.target.value)
  }
  function getData() {
    var weather = axios(`https://api.openweathermap.org/data/2.5/weather?q=${entered}&appid=e49003c458df2e52ec0ca1ae3e1a5121`)
    weather.then(function (dalta) {
      console.log(dalta)
      setDeg(dalta.data.main.temp)
      setWea(dalta.data.weather[0].main)
      setCity(dalta.data.name)
    })
  }
  return (
    <>
      <div className="flex flex-row justify-center h-[100vh] items-center" >
        <div style={{
          backgroundImage: "linear-gradient(120deg,#a6c0fe 0%,#f68084 100%)"
        }} className="p-2 rounded-md">
          <h2 className="font-medium">Hey!🌧️</h2>
          <p className="text-xs">Enter the city name to get weather Report</p>
          <input onChange={handleInput} type="text" className="rounded-md
        h-6 text-sm mt-2 p-1 outline-none" placeholder="CityName" />
          <br />
          <button onClick={getData} className="bg-black text-white rounded-lg p-1 text-xs mt-2" >Get Report</button>
          <p className="text-xs mt-2"> Degree:{deg} | city: {city}  | weather: {wea}</p>
        </div>
      </div>

    </>
  )
}
export default App;