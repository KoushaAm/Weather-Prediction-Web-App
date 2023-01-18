import './button.css';
// import {forecast} from './Forecast.js'
import './Future.css';
import './report.css';
import Day from './Day.js';
import { useState } from 'react';
import { logDOM } from '@testing-library/react';


export default function Report() {

  let city = "Vancouver";
  let cityTemp; 
  let url = ''; 
  let cityInfo;
  let data_copy;
  
  let pred = [];
  let [IsPred, setPred] = useState([]);
  const [isAvailable, setAvailable] = useState(false);
  
  


  function display() {
    
    showWeather();
  
  }

  function forecast(cityName) {


    let difulte_name = "Vancouver"
    let url = 'https://api.openweathermap.org/data/2.5/forecast?q=' + cityName +
    '&appid=54b326b5c998bbc5d16901feb16ae0da&units=metric';

    console.log(url);
    // const days_data = [];
    fetch(url)
    .then(response => response.json())
    .then(data => {
        let days = data['list'];

        let n = 0;

        for (const day of days) { 
            if (String(day['dt_txt']).includes("12:00:00")) {
                let f = day['dt_txt'];
                let dateVal;
                let timeVal;
                let tempVal;
                let descVal;

                tempVal = day['main']['temp_max'];
                descVal = day['weather'][0]['description']

                for (let i = 0; i < 10; i++) {
                    dateVal += f[i].toString();
                }
                // for (let i = 11; i < f.length; i++) { // skip the space
                //     timeVal += f[i].toString();
                // }

                
                dateVal = dateVal.slice(9, dateVal.length);
                // timeVal = timeVal.slice(9, timeVal.length);
            

                let tempId = "temp" + n.toString();
                let dateId = "date" + n.toString();
                let descId = "desc" + n.toString();
                let iconId = "icon" + n.toString();

                
                
                document.getElementById(tempId).innerHTML = tempVal + "°";
                document.getElementById(dateId).innerHTML = dateVal;
                document.getElementById(descId).innerHTML = descVal;
                document.getElementById(iconId).src = `http://openweathermap.org/img/w/${ day['weather'][0]['icon'] }.png`;

                n+=1; 
            }
        }

      


        
    });
    setAvailable(true);
  }

  function searchDays(city) {
    setTimeout(() => {
      forecast(city);
    }, 3000);
    
    
      
    
    
  }

  function getCity() {
    if (document.getElementById("city-name").value.length == 0) {
      city = "Vancouver";
    } else {
      city = document.getElementById("city-name").value;
    }
  }


  function showWeather() {
    setPred([]);
    
    // city = document.getElementById("city-name").value;
    getCity();

    if (city == null) {
      document.getElementById("temp").innerHTML = '--' + '°';
    } else {
      city = document.getElementById("city-name").value;
      url = 'https://api.openweathermap.org/data/2.5/weather?q=' + city + '&appid=54b326b5c998bbc5d16901feb16ae0da&units=metric';
      
      fetch(url)
        .then(response => response.json())
        .then(data => {
          data_copy = data;
          
          searchDays(city);

          
          cityInfo = data;
          cityTemp = data['main']['temp'];
          // timeZone = data['timezone'];
          document.getElementById("temp").innerHTML = cityTemp + "°";
          document.getElementById("desc").innerHTML = data['weather'][0]['description'];
          document.getElementById('icon').src = `http://openweathermap.org/img/w/${ data['weather'][0]['icon'] }.png`;
        });

    }
    
  }

  
  return (
    <div>
      <div>
          <h3>Search a city</h3>
          <div className='box-alignment'>
            <input 
            type="text"
            placeholder="city name"
            className="box--search" 
            id = 'city-name'
            />

            <button class='button' onClick={showWeather}><span>Search</span></button>
          </div>
          
          <div className = 'div--info'>

            <h1 id = "temp"></h1>
            <h4 id = "desc">""</h4>

            <div className='square'>
              <img id="icon" height={100} width={100} src= "https://images.emojiterra.com/google/android-pie/512px/1f321.png"/>
            </div>
            
          </div>
      
      </div>


          
      {(isAvailable? <div className='future'> 
        
            <div className='future--card'>
              <h2 id="date0"></h2>
              <h4 id="temp0"></h4>
              <h4 id="desc0"></h4>
              <img id="icon0" height={50} width={50}/>

              <img></img>
            </div>

            <div className='future--card'>
              <h2 id="date1"></h2>
              <h4 id="temp1"></h4>
              <h4 id="desc1"></h4>
              <img id="icon1" height={50} width={50}/>

            </div>

            <div className='future--card'>
              <h2 id="date2"></h2>
              <h4 id="temp2"></h4>
              <h4 id="desc2"></h4>
              <img id="icon2" height={50} width={50}/>

            </div>

            <div className='future--card'>
              <h2 id="date3"></h2>
              <h4 id="temp3"></h4>
              <h4 id="desc3"></h4>
              <img id="icon3" height={50} width={50}/>
            </div>

            <div className='future--card'>
              <h2 id="date4"></h2>
              <h4 id="temp4"></h4>
              <h4 id="desc4"></h4>
              <img id="icon4" height={50} width={50}/>

            </div>

          </div>: null)}

      
    </div>
    
  );
}

