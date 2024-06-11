import React  from "react";

interface Props {
    children: string;
    color?: 'primary'| 'secondary'| 'danger'; // string literal
    onClick: () => void;
}

const GameContainer = ({children,onClick,color='secondary'}: Props) => {
  return (
    <div className="Game-container">
          <img className="img" src={"./Images/AssasinsCreed.jpg"}></img>
          <p>This is text</p>
          <a className="icon" href="/#"> Like Icon</a>
    </div>      
  )
}

export default GameContainer
