import React from 'react';
import './NavBar.css';
import { NavLink } from "react-router-dom";


  
const Navbar2 = () => {
  return (
    <body class="news">
        <header>
            <div class="nav">
            <ul>
                <div className='home1'>
                <li class="home"><a  href="#">OverallCritic</a></li>
                </div>
                
                <li class="opencritic"><a  href="#"> <img className='imgo' src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/41/OpenCritic_Logo.svg/2560px-OpenCritic_Logo.svg.png" ></img>Opencritic</a></li>
                <li class="metacritic"><a href="#"><img className='imgm' src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/Metacritic_logo_original.svg/1200px-Metacritic_logo_original.svg.png" ></img>Metacritic</a></li>
                <li class="agregados"><a href="#"> <NavLink to="/App2.js"> Agregados</NavLink></a></li>
                <li class="browse"><a href="#" ><NavLink to="/App3.js"> Notas</NavLink></a></li>
                <li class="usuario"><a href="#" ><NavLink to="/App4.js">Usuario</NavLink></a></li>
                <input class="buscador" type="text" placeholder="Buscar Juego.."></input>
            </ul>
            </div>
        </header>
    </body>
  );
};
  
export default Navbar2;