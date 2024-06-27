import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import Message from "../Message";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function NavBar(){

  const navRef = useRef();
  const name = '';
  const showNavbar = () => {
    navRef.current.ClassList.toggle("responsive_nav");
  }

  return (
    <header>
      <img className="Logo" src="./Images/VortexGaming LogoNoColor.png"></img>
      <nav ref={navRef}>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/latest-games">Latest Games</Link></li>
        <li><Link to="/latest-games">Game hub</Link></li>
        <li><Link to="/Contact-us">Contact us</Link></li>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <Message>Hello {name}</Message>
      <li><Link to=""><BsFillPersonLinesFill className="profile-icon"/></Link></li>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );

}

export default NavBar;
