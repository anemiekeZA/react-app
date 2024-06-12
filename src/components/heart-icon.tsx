import { useState } from "react";

interface HeartGroupProps{
    item: string[];
    heading: string;
    onSelectItem: (item: string) => void;
} 
  
function heartGroup({items, heading, onSelectItem}: Props) {
    
    // Hook
    const [selectedIndex, setSelectedIndex] = useState(-1); // component state 


  return (   
    <>
        {items.length === 0 && <p>No items found</p>}
        <ul className="heart-icon">
            {items.map((item, index) => (
                <li className={selectedIndex === index ? 'heart-icon-item active': 'heart-icon-item'} 
                    key={item} onClick={() => {
                    setSelectedIndex(index); 
                    onSelectItem(item);}}>{item}
                </li>
            ))}  
        </ul>
    </>
  );
}

export default heartGroup;
