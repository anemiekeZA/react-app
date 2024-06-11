import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import Message from "../Message";

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
        <a href='/#'>Work</a>
        <a href='/#'>Blog</a>
        <a href='/#'>About Me</a>
        <button className="nav-btn nav-close-btn" onClick={showNavbar}>
          <FaTimes/>
        </button>
      </nav>
      <Message>Hello {name}</Message>
      <button className="nav-btn" onClick={showNavbar}>
        <FaBars/>
      </button>
    </header>
  );

}

export default NavBar;