
import React from 'react';
import './App.css';
import { Input, Button } from './components';
import { useState, useEffect } from "react"
function App() {
  const [click, setClick] = useState(true);
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState("");

  let lat;
  let lon;
  // let body = document.querySelector("body")


  useEffect(() => {
    if (city) {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=0c2cae07ef5408abb344eee6a90c0874`)
        .then(response => response.json())
        .then(json => {
          setWeather(json)
          // console.log(json)
        }
        ).catch((err) => {
          console.log(err)
        })
    } else {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition)
      } else {
        alert("Geolocation is not supported by this browser.");
      }
      function showPosition(position) {
        lat = position.coords.latitude;
        lon = position.coords.longitude;
        fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=0c2cae07ef5408abb344eee6a90c0874`)
          .then(response => response.json())
          .then(json => setWeather(json)
          ).catch((err) => {
            console.log(`Something went wrong!\n${err}`)

          })
      }
    }
  }, [city, lat, lon])

  let searchcity = () => {
    let search = document.getElementById("search")
    // console.log(document.getElementById("search").value)
    setCity(search.value)
    // console.log(weather)
    setClick(!click)

  }
  if (weather) {
    return (
      <div className={weather.weather[0].main}>
        <div className="searchBar">
          <Input id="search" placeholder="Enter City Name" type="text" myClass="myInput" />
          <Button onClick={() => searchcity()} myClass="myBtn">Search</Button>
        </div>
        <div className="weatherMain">
          <div>
            <h1 className="weatherHead">{weather.name}</h1>
            <h3 className="weather">{weather.weather[0].description}</h3>
            <h1 className="weatherHead">{weather.main.temp}'C</h1>
            <h4 className="weather">Latitude: {weather.coord.lat}</h4>
            <h4 className="weather">Longitude: {weather.coord.lon}</h4>
          </div>
          <div className="weatherMini">
            <ul>
              <li>Country : {weather.sys.country}</li>
              <li>Feels Like : {weather.main.feels_like}'C</li>
              <li>Humidity : {weather.main.humidity}g/kg</li>
              <li>Pressure : {weather.main.pressure} Pa</li>
              <li>Max Temperature : {weather.main.temp_max}'C</li>
              <li>Min Temperature : {weather.main.temp_min}'C</li>
              <li>Wind Direction : {weather.wind.deg} degree</li>
              <li>Wind Speed : {weather.wind.speed}m/s</li>
            </ul>
          </div>
        </div>
      </div>
    )
  } else {
    return (
      <div>
        <div className="searchBar">
          <Input id="search" placeholder="Enter City Name" type="text" myClass="myInput" />
          <Button onClick={() => searchcity()} myClass="myBtn">Search</Button>
        </div>
      </div>
    )

  }
}

export default App;
