import React from "react";
import { BsFillHeartFill } from "react-icons/bs";

interface Props {
  imageData: { id: number; url: string }[];
  id: number;
}

const GameContainer: React.FC<Props> = ({ imageData, id }) => {
  const image = imageData.find((item) => item.id === id);

  return (
    <div className="Game-container">
      {image ? (
        <div key={image.id}>
          <img className="img" src={image.url} alt={`Image ${image.id}`} />
        </div>
      ) : (
        <p className="p">No image available</p>
      )}
      <p className="p">This is text</p>
      <BsFillHeartFill  className="heart-icon"/>
    </div>
  );
};

export default GameContainer;
