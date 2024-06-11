import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup"; 
import Images from "../Images.json";
import GameContainer from "./components/GameContainers";


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
        <div>
          <GameContainer></GameContainer>
          <Button className="GC-Bttn" ><a href="/#">Link to website 1</a></Button>
        </div>
        <div>
          <GameContainer></GameContainer>
          <Button className="GC-Bttn"><a href="/#">Link to website 2</a></Button>
        </div>            
        <div>
          <GameContainer></GameContainer>
          <Button className="GC-Bttn"><a href="/#">Link to website 3</a></Button>
        </div>  
        <div>
          <GameContainer></GameContainer>
          <Button className="GC-Bttn"><a href="/#">Link to website 4</a></Button>
        </div>
        <div>
          <GameContainer></GameContainer>
          <Button className="GC-Bttn"><a href="/#">Link to website 5</a></Button>
        </div>
        <div>
          <GameContainer></GameContainer>
          <Button className="GC-Bttn"><a href="/#">Link to website 6</a></Button>
        </div>
        <div>
          <GameContainer></GameContainer>
          <Button className="GC-Bttn"><a href="/#">Link to website 7</a></Button>
        </div>  
        <div>
          <GameContainer></GameContainer>
          <Button className="GC-Bttn"><a href="/#">Link to website 7</a></Button>
        </div>  
      </div>
    </div>
    {/* {[0, 1, 2].map((item => <img src="https://picsum.photos/150/150" />))} */}
    <Button color="secondary" onClick={() => setAlertVisibility(true)}>This is a button</Button>

    
  </div>
  );
}

export default App;