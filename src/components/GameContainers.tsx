import React from "react";

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
        <p>No image available</p>
      )}
      <p>This is text</p>
      <a className="icon" href="/#"> Like Icon</a>
    </div>
  );
};

export default GameContainer;
