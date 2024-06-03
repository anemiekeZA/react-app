import { MouseEvent } from "react";

function ListGroup() {
    // () <-- allows you to write JSX on multiple lines, 
    //can't add in an H1 element because the component only returns one element. 
    // <h1>List</h1> // React.createElement('h1) will be returned like this in JavaScript format.
    // Need to wrap it in a div, if we want to display more than one element or use fragments.
    // when this component is rendered on the screen we wont have an additional element like a div on the screen.
    // instead of importing react (import {Fragment} from "react";) and writing fragment in the <> brackets we can just leave it empty and react will 
    // render it as fragments.
    // instead of hard coding our elements we can put it in a const and display it dynamically.
    //        <ul className="list-group">
    //<ul>
    //    <li className="list-group-item">An item</li>
    //    <li className="list-group-item">A second item</li>
    //    <li className="list-group-item">A third item</li>
    //    <li className="list-group-item">A fourth item</li>
    //    <li className="list-group-item">And a fifth one</li>
    //</ul>

    let items = ["New York","San Francisco", "Tokyo","London","Paris"];

    // Event Handler
    const handleClick = (event: MouseEvent) => console.log(event);

  return (   
    <>
        <h1>List </h1>
        {items.length === 0 && <p>No items found</p>}
        <ul className="list-group">
            {items.map((item, index) => (
            <li className="list-group-item" key={item} onClick={handleClick}>{item}</li>
        ))}  
        </ul>
    </>
  );
}

export default ListGroup;
