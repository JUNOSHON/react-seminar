import {useEffect, useState} from "react";

export default function Counter369() {
  
  const [count, setCount] = useState(0);
  const handleOnClick = () => {
    setCount(count + 1);
  };
  
  useEffect(() => {
    const countStr = count.toString();
    
    if (countStr.includes("3") || countStr.includes("6") || countStr.includes("9")) {
      setTimeout(() => {
        alert("짝!");
      }, 1);
    }
  }, [count]);
  
  
  return (
    <div>
      {count}
      <button onClick={handleOnClick}>+</button>
    
    </div>
  );
}
