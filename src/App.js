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

 async function fetchApi (event) {
   if( city != "") {
  event.preventDefault();
  const cityvalor = city;
   let key = process.env.REACT_APP_API_KEY;
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityvalor},BR&appid=${key}&units=metric&lang=pt_br`;
  const response = await fetch(url);
  const data = await response.json();
  cidade.textContent = `${data.name}-BR`;
  temp.textContent = Math.floor(data.main.temp);
  humidade.textContent = `${data.main.humidity}%`;
  ceu.textContent = data.weather[0].description;
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
     <p className="Temp">34</p>
     <div className="Celsius">
     <span>°C</span></div>
     <div className="Ventos">
     <p>vel. do vento:</p>
     <img src="#" />
     </div>
     </div>
     <div className="Dados-extras">
     <div className="Humidade">
     <h2>Humidade:</h2>
     <p>60%</p>
     </div>
     <div className="Ceu">
     <h2>Agora:</h2>
     <p>Nublado</p>
     </div>
     </div>
     </div>
    </div>
   );
}
export default App;


