import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Link } from 'react-router-dom';
import { CgGames } from "react-icons/cg";
import { MdGames } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { GiChampions } from "react-icons/gi";
import { GiPodiumWinner } from "react-icons/gi";
import { FaPlaystation } from "react-icons/fa";
import { IoLogoAndroid } from "react-icons/io";
import { GiBackwardTime } from "react-icons/gi";
import { IoLogoXbox } from "react-icons/io5";


function LeftPannel() {
  const navRef = useRef();

  return (
    <nav ref={navRef} >
      <div>
        <ul className="left-side-nav"> 
          <li><Link to="/latest-games"><CgGames /> Latest Games</Link></li>
          <li><Link to="/best-of-the-year"><GiPodiumWinner /> Best of the Year</Link></li>
          <li><Link to="/popular"><MdGames /> Popular in </Link></li>
          <li><Link to="/contact-us"><GiBackwardTime /> Last Year</Link></li>
          <li><Link to="/all-time-top-250"><GiChampions /> All Time Top 250</Link></li>
          <li><Link to="/pc-games"><FaLaptopCode /> PC Games</Link></li>
          <li><Link to="/xbox-games"><IoLogoXbox /> Xbox Games</Link></li>
          <li><Link to="/ps-games"><FaPlaystation /> PS Games</Link></li>
          <li><Link to="/android-games"><IoLogoAndroid /> Android Games</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default LeftPannel;
