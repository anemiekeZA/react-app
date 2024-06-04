import Alert from "./components/Alert";
import Button from "./components/button";

function App(){

  return 
    <div>
    <Alert>
      Hello <span>World</span>
    </Alert>
    <Button color="secondary" onClick={() => console.log('Clicked')}>This is a button</Button>
    </div> //Self closing syntax
}

export default App;