import {useRef} from "react";
import {FaBars, FaTimes} from "react-icons/fa";
import "../Styles/main.css";
import Message from "../Message";
import { BsFillPersonLinesFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

function LeftPannel(){

  const navRef = useRef();
  const name = '';
  const showNavbar = () => {
    navRef.current.ClassList.toggle("responsive_nav");
  }

  return (
    <header>
      <nav ref={navRef}>
        <li><Link to="/latest-games">Latest Games</Link></li>
        <li><Link to="/latest-games">Best of the Year</Link></li>
        <li><Link to="/latest-games">Popular in </Link></li>
        <li><Link to="/Contact-us">lastYear</Link></li>
        <li><Link to="/latest-games">All Time Top 250</Link></li>
        <li><Link to="/latest-games">PC Games</Link></li>
        <li><Link to="/Contact-us">Xbox Games</Link></li>
        <li><Link to="/latest-games">PS Games</Link></li>
        <li><Link to="/Contact-us">Android Games</Link></li>
      </nav>
    </header>
  );

}

export default LeftPannel;
