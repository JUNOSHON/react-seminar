import {useEffect, useState} from "react";
import styled from "styled-components";

export default function Counter369() {
  
  const [count, setCount] = useState(0);
  const add1 = () => {
    setCount(count + 1);
  };
  
  const add3 = () => {
    setCount(count + 3);
  };
  
  useEffect(() => {
    const countStr = count.toString();
    
    if (countStr.includes("3") || countStr.includes("6") || countStr.includes("9")) {
      setTimeout(() => {
        alert("짝!");
      }, 100);
    }
  }, [count]);
  
  const Typo = styled.span`
    font-size: 2rem;
    font-weight: bold;
  `;
  
  const WrapperButton = styled.div`
    display: flex;
  `;
  
  const Button = styled.div`
    width: 4rem;
    height: 4rem;
  `;
  
  
  return (
    <div>
      <Typo>
        {count}
      </Typo>
      <WrapperButton>
        <Button>
          <button onClick={add1}>+1</button>
        </Button>
        
        <Button>
          <button onClick={add3}>+3</button>
        </Button>
      </WrapperButton>
    </div>
  );
}
