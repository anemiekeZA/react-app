import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup"; 
import Images from "../Images.json";


function App(){
    let items = ["New York","San Francisco", "Tokyo","London","Paris"];
    const [alertVisible, setAlertVisibility] = useState(false);
    const handleSelectItem = (item: string) => {
    console.log(item);
  };

  return (
  <div>
    <React.Fragment>
      <NavBar/>
    </React.Fragment>
    { alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>}
    <div className="parent">
      <div className="Left-side-panel"><ListGroup items={items} onSelectItem={handleSelectItem}/></div>
      <div className="Right-side-panel">
        <div className="Game-container">
          <img className="img" src="./Images/AssasinsCreed.jpg"></img>
          <p>This is text</p>
          <Button className="GC-Bttn" ><a href="/#">Link to website 1</a></Button>
          <a className="icon" href="/#"> Like Icon</a>
        </div>
        <div className="Game-container">
          <img className="img" src="./Images/CallOfDutyModernWarfare3.jpg"></img>
          <p>This is text</p>
          <Button className="GC-Bttn"><a href="/#">Link to website 2</a></Button>
          <a className="icon" href="/#"> Like Icon</a>
        </div>
        <div className="Game-container">
          <img className="img" src="./Images/DoomEternal.jpg"></img>
          <p>This is text</p>
          <Button className="GC-Bttn"><a href="/#">Link to website 3</a></Button>
          <a className="icon" href="/#"> Like Icon</a>
        </div>
        <div className="Game-container">
          <img className="img" src="./Images/DungeonsAndDragons.jpg"></img>
          <p>This is text</p>
          <Button className="GC-Bttn"><a href="/#">Link to website 4</a></Button>
          <a className="icon" href="/#"> Like Icon</a>
        </div>
        <div className="Game-container">
          <img className="img" src="./Images/ForestLegends.jpg"></img>
          <p>This is text</p>
          <Button className="GC-Bttn"><a href="/#">Link to website 5</a></Button>
          <a className="icon" href="/#"> Like Icon</a>
        </div>
        <div className="Game-container">
          <img className="img" src="./Images/Fortnite.jpg"></img>
          <p>This is text</p>
          <Button className="GC-Bttn"><a href="/#">Link to website 6</a></Button>
          <a className="icon" href="/#"> Like Icon</a>
        </div>
        <div className="Game-container">
          <img className="img" src="./Images/ForzaHorizon5.jpg"></img>
          <p>This is text</p>
          <Button className="GC-Bttn"><a href="/#">Link to website 7</a></Button>
          <a className="icon" href="/#"> Like Icon</a>
        </div>
        <div className="Game-container">
          <img className="img" src="./Images/LeagueOfLegends.jpg"></img>
          <p>This is text</p>
          <Button className="GC-Bttn"><a href="/#">Link to website 7</a></Button>
          <a className="icon" href="/#"> Like Icon</a>
        </div>
      </div>
    </div>
    {/* {[0, 1, 2].map((item => <img src="https://picsum.photos/150/150" />))} */}
    <Button color="secondary" onClick={() => setAlertVisibility(true)}>This is a button</Button>

    
  </div>
  );
}

export default App;