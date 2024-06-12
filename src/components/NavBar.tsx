import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import Message from "../Message";
import { BsFillPersonLinesFill } from "react-icons/bs";

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
        <a href='/#'>Home</a>
        <a href='/#'>Latest games</a>
        <a href='/#'>Game hub</a>
        <a href='/#'>Contact us</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <Message>Hello {name}</Message>
      <a href="#"><BsFillPersonLinesFill className="profile-icon"/></a>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );

}

export default NavBar;