import React from 'react';
import { BsFillHeartFill } from "react-icons/bs";
import '../Styles/main.css';

const GameContainer = ({ games }) => {
  return (
    <div className="game-container">
      <div className="game-items">
        {games.map((game) => (
          <div key={game.id} className="game-item">
            <h2>{game.name}</h2>
            {game.background_image && (
              <img src={game.background_image} alt={game.name} width="200" />
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default GameContainer;
