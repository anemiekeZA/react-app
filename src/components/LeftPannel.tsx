import { useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "../Styles/main.css";
import { Link } from 'react-router-dom';

function LeftPannel() {
  const navRef = useRef();

  return (
    <nav ref={navRef} >
      <div>
        <ul className="left-side-nav"> 
          <li><Link to="/latest-games">Latest Games</Link></li>
          <li><Link to="/best-of-the-year">Best of the Year</Link></li>
          <li><Link to="/popular">Popular in </Link></li>
          <li><Link to="/contact-us">Last Year</Link></li>
          <li><Link to="/all-time-top-250">All Time Top 250</Link></li>
          <li><Link to="/pc-games">PC Games</Link></li>
          <li><Link to="/xbox-games">Xbox Games</Link></li>
          <li><Link to="/ps-games">PS Games</Link></li>
          <li><Link to="/android-games">Android Games</Link></li>
        </ul>
      </div>
    </nav>
  );
};

export default LeftPannel;
