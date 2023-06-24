

import React from "react";
import './Navbar.css'
import {Link} from 'react-router-dom';
import RecordVoiceOverIcon from '@mui/icons-material/RecordVoiceOver';
import ChatIcon from '@mui/icons-material/Chat';
import HomeIcon from '@mui/icons-material/Home';
import MenuIcon from '@mui/icons-material/Menu';
import { Button } from "@mui/material";

function Navbar(){
  return(
    <>
    
    <div className="anu">
    <ul className="navbar">
     <div className="d-flex">
    <img className="image" height={36}  width={50} src="https://cdn-icons-png.flaticon.com/512/5088/5088984.png"/> 
     <li className="heading">Alexa</li>
      </div> 
      <li className="hide" ><Link to="/Home"><HomeIcon/>Home</Link></li>
      
      <li className="hide1"><Link to="/Tts"><ChatIcon/>Text To Speech</Link></li>
      
      <li className="hide1"><Link to="/stt"><RecordVoiceOverIcon/>Speech To Text</Link></li>


      <div class="dropdown">
       <button class="dropbtn"><MenuIcon/></button>
        <div class="dropdown-content">
          <Link className='li'  to="/Home">Home</Link>
         <Link className='li'  to="/Sign">Sign in</Link>
         <Link className='li' to="/LoginPage">Login</Link>
         <Link className='li' to="/About">AboutUs</Link>
         <Link className='li' to="/Contact">Contact</Link>
          <Link className='li' to="/Ourteam">Ourteam</Link>
          
      </div>
    </div>

    </ul>
    
    </div>
    </>
  );
}

export default Navbar;