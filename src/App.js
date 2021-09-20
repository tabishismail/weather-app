
import React from 'react';
import './App.css';
import { Input, Button } from './components';
import { useState, useEffect } from "react"
function App() {
  const [data, setData] = useState("")
  const [click, setClick] = useState(true);
  const [city, setCity] = useState("");


useEffect(() => {
if(city){
  fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c2cae07ef5408abb344eee6a90c0874`)
  .then(response => response.json())
  .then(json => console.log(json)
  ).catch((err) => {
    console.log(err)
  })
}else{
  
}
},[city])

let searchcity=()=>{
  console.log(document.getElementById("search").value)    
  setCity(document.getElementById("search").value)
  console.log(city)    


      setClick(!click)
}
  return (
    <div>
      <div className="searchBar">
      <Input id="search" placeholder="Enter City Name" type="text" myClass="myInput"/>
      <Button onClick={()=>searchcity()} myClass="myBtn">Click Me</Button>
      </div>
    </div>
  )
}

export default App;
