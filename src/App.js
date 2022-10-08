import React, { useState } from 'react';
import './App.css';

function App() {
const [ city, setCity ] = useState('');
const input = document.querySelector('.Input');
const search = document.querySelector('.Search');
const humidade = document.querySelector('.Humidade p');
const ceu = document.querySelector('.Ceu p');
const cidade = document.querySelector('.Cidade');
const vento = document.querySelector('.Ventos p');
const temp = document.querySelector('.Temp');
const weatherIcon = document.querySelector('.Weather-icon');
 async function fetchApi (event) {
   if( city != "") {
  event.preventDefault();
  const cityvalor = city;
   let key = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalor},BR&appid=${key}&units=metric&lang=pt_br`;
  const response = await fetch(url);
  const data = await response.json();
  if(response.status == 404) {
    alert("Cidade não encontrada");
    window.location.reload();
  }
  cidade.textContent = `${data.name} 🇧🇷`;
  temp.textContent = Math.floor(data.main.temp);
  humidade.textContent = `${data.main.humidity}%`;
  ceu.textContent = data.weather[0].description;
  weatherIcon.src = 'http://openweathermap.org/img/wn/'+data.weather[0].icon+'@2x.png';
  vento.textContent = `${Math.floor(data.wind.speed)}km/h`;
 } else {
  alert("você não digitou nenhuma cidade");
}
}
  return (
    <div className="App">
    <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet' />
     <div className="Card">
     <form>
     <input className="Input"
     onChange={(event) => setCity (event.target.value.trim())}
     placeholder="Digite a cidade" />
     <button className="Search" onClick={ fetchApi }>
     <i class='bx bx-search' id="Icon-lupa"></i>
     </button>
     </form>
     <div className="Dados">
     <h1 className="Cidade">Cidade</h1>
     <div className="Temp-celsius">
     <h2 className="Temp">!</h2>
     <span className="Celsius">°C</span>
     </div>
     <div className="Ventos">
     <h2>Vel do Vento:</h2>
     <div className="Vel-do-vento">
     <p>0 km/h</p>
     <i class='bx bx-wind' id="Icon-wind"></i>
     </div>
     </div>
     <img src="http://openweathermap.org/img/wn/03n@2x.png" class="Weather-icon" />
     </div>
     <div className="Dados-extras">
     <div className="Humidade">
     <h2>Humidade:</h2>
     <p>0%</p>
     </div>
     <div className="Ceu">
     <h2>Agora:</h2>
     <p>--</p>
     </div>
     </div>
     </div>
    </div>
   );
}
export default App;


