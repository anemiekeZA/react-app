import React from 'react';
import { BsBuilding } from "react-icons/bs";
import { BsHeadset } from "react-icons/bs";
import { BsTwitterX } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { FaConnectdevelop } from "react-icons/fa";
import '../Styles/main.css'; 

const Footer = () => {
  return (
    <div className="Footer">

      <div className="office-building-container">
        <BsBuilding />
        <p>1 Park, Develton Drive</p>
        <p>Durban, Kwa-Zulu Natal</p>
        <p>4639</p>
      </div>
      <div className="support-container">
        <BsHeadset />
        <p>Contact Support</p>
        <MdEmail/>
        <a href="mailto: anemieke.van.vuuren16@gmail.com"> anemieke.van.vuuren16@gmail.com</a>
      </div>
      <div className="social-media-container">
        <FaConnectdevelop/>
        <p>Connect with us</p>
        <div>
            <BsTwitterX />
            <a href="https://twitter.com/rawgtheworld"> Follow us</a>
        </div>
        <div>
            <FaDiscord/>
            <a href="https://discord.gg/erNybDp"> Join our channel</a>
        </div>
      </div>
    </div>
  );
};

export default Footer;

