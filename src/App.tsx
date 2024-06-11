import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Alert from "./components/Alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup";
import imageData from "./Images.json";
import GameContainer from "./components/GameContainers"; 

function App() {
  let items = ["Latest Games", "PC Games", "X box Games", "PS Games", "Android Games"];
  const [alertVisible, setAlertVisibility] = useState(false);
  const handleSelectItem = (item: string) => {
    console.log(item);
  
  };

  return (
    <div>
      <React.Fragment>
        <NavBar />
      </React.Fragment>
      {alertVisible && (
        <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>
      )}
      <div className="banner">
        <Button color="secondary" onClick={() => setAlertVisibility(true)}>
          This is a button
        </Button>
        <img  className="banner-img" src="./Images/VortexGamingLogo.png"></img> 
      </div>
      <div className="parent">
        <div className="Left-side-panel">
          <ListGroup items={items} onSelectItem={handleSelectItem} />
        </div>
        <div className="Right-side-panel">
          <div className="Game-container-outer">
            <GameContainer imageData={imageData} id={1} />
            <Button className="GC-Bttn">
              <a href="/#">Link to website 1</a>
            </Button>
          </div>
          <div className="Game-container-outer">
            <GameContainer imageData={imageData} id={2} />
            <Button className="GC-Bttn">
              <a href="/#">Link to website 2</a>
            </Button>
          </div>
          <div className="Game-container-outer">
            <GameContainer imageData={imageData} id={3} />
            <Button className="GC-Bttn">
              <a href="/#">Link to website 3</a>
            </Button>
          </div>
          <div className="Game-container-outer">
            <GameContainer imageData={imageData} id={4} />
            <Button className="GC-Bttn">
              <a href="/#">Link to website 4</a>
            </Button>
          </div>
          <div className="Game-container-outer">
            <GameContainer imageData={imageData} id={5} />
            <Button className="GC-Bttn">
              <a href="/#">Link to website 5</a>
            </Button>
          </div>
          <div className="Game-container-outer">
            <GameContainer imageData={imageData} id={6} />
            <Button className="GC-Bttn">
              <a href="/#">Link to website 6</a>
            </Button>
          </div>
          <div className="Game-container-outer">
            <GameContainer imageData={imageData} id={7} />
            <Button className="GC-Bttn">
              <a href="/#">Link to website 7</a>
            </Button>
          </div>
          <div className="Game-container-outer">
            <GameContainer imageData={imageData} id={8} />
            <Button className="GC-Bttn">
              <a href="/#">Link to website 8</a>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
