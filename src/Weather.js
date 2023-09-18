import React, { useState } from 'react'
import searchicon from './Assets/search.png';
import cloudicon from './Assets/cloud.png';
import clearicon from './Assets/clear.png';
import drizzleicon from './Assets/drizzle.png';
import rainicon from './Assets/rain.png';
import snowicon from './Assets/snow.png';
import humidity from './Assets/humidity.png';
import wind from './Assets/wind.png';
import './weather.css'

const Weather =() => {
    let apikey = '5ca5ece7a7d7f25a1ff511c22d106c64';
    const [icon,seticons]= useState(clearicon,cloudicon,drizzleicon,rainicon,snowicon);
    const search = async  () =>{
       const element = document.getElementsByClassName("search-input");
       if(element[0].value===""){
        return 0;
       }
       let url = `https://api.openweathermap.org/data/2.5/weather?q=${element[0].value}&appid=${apikey}`;
       let response = await fetch(url);
       let data = await response.json();
       console.log(data)
       const humidity = document.getElementsByClassName("humidity-percentage");
       const wind = document.getElementsByClassName("wind");
       const temperature = document.getElementsByClassName("weather-temp");
       const Location = document.getElementsByClassName("Location")
       Location[0].innerHTML = data.name;
       temperature[0].innerHTML=Math.ceil(data.main.temp-273.15) + '°C';
       wind[0].innerHTML=data.wind.speed+ "KM/hr";
       humidity[0].innerHTML=data.main.humidity+ '%';

       if(data.weather[0].icon==='01d' || data.weather[0].icon==='01n'){
        seticons(clearicon);
       }
       else if(data.weather[0].icon==='02d' || data.weather[0].icon==='02n'){
        seticons(cloudicon);
       }
       else if(data.weather[0].icon==='03d' || data.weather[0].icon==='03n'){
        seticons(drizzleicon);
       }
       else if(data.weather[0].icon==='04d' || data.weather[0].icon==='04n'){
        seticons(drizzleicon);
       }
       else if(data.weather[0].icon==='09d' || data.weather[0].icon==='09n'){
        seticons(rainicon);
       }
       else if(data.weather[0].icon==='10d' || data.weather[0].icon==='10n'){
        seticons(rainicon);
       }
       else if(data.weather[0].icon==='13d' || data.weather[0].icon==='13n'){
        seticons(snowicon);
       }
       else{
        seticons(clearicon);
       }
    }
  return (
    <div className='container'>
     <div className='top-bar'>
        <input className='search-input' placeholder='Enter the city'/>
        <div className='search-icon' onClick={()=>{search()}}>
            <img src={searchicon} alt=''/>
        </div>
     </div>
     <div className='cloudimg'>
        <img src={cloudicon} alt=''></img>
     </div>
     <div className='weather-temp'>24 deg</div>
     <div className='Location'>Tirunelveli</div>
     <div className='data-container'>
        <div className='element'>
            <img src={humidity} alt=''/>
        </div>
        <div className='data'>
            <div className='humidity-percentage'>64%</div>
            <div className='text'>Humidity</div>
        </div>
        <div className='element1'>
            <img src={wind} alt=''/>
        </div>
        <div className='data'>
            <div className='wind'>5.4 KM/hr</div>
            <div className='text'>Wind speed</div>
        </div>
     </div>
     
    </div>
  )
}

export default Weather
