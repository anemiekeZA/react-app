import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/button";
import ListGroup from "./components/ListGroup"; 

function App(){
  const [alertVisible, setAlertVisibility] = useState(false);

  return (
    <div>{ alertVisible && <Alert onClose={() => setAlertVisibility(false)}>Alert</Alert>}
    <Button color="secondary" onClick={() => setAlertVisibility(true)}>This is a button</Button>
    </div> //Self closing syntax
  )

}

export default App;