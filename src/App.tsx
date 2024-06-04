import React from "react";
import NavBar from "./components/NavBar";
import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup"; 
import Message from "./Message";


function App(){
    let items = ["New York","San Francisco", "Tokyo","London","Paris"];
    const [alertVisible, setAlertVisibility] = useState(false);
    const name = '';
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
      <Message>Hello {name}</Message>
    </div>
    <Button color="secondary" onClick={() => setAlertVisibility(true)}>This is a button</Button>
  </div>
  );
}

export default App;