import {useEffect, useState} from "react";
import styled from "styled-components";
import {useRecoilState} from "recoil";
import {count369State} from "../../atoms/index.js";

export default function Counter369({name}) {
  
  const [count, setCount] = useRecoilState(count369State);
  
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
    justify-content: center;
    align-items: center;
  `;
  
  const Button = styled.div`
    width: 4rem;
    height: 4rem;
  `;
  
  const Wrapper = styled.div`
    border: 2px solid aqua;
    border-radius: 10px;
    width: 100%;
    height: 100%;
    margin-bottom: 30px;
  `;
  
  
  return (
    <Wrapper>
      {/*<Typo>*/}
      {/*  {count}*/}
      {/*</Typo>*/}
      <h3>{name}</h3>
      <WrapperButton>
        <Button>
          <button onClick={add1}>+1</button>
        </Button>
        
        <Button>
          <button onClick={add3}>+3</button>
        </Button>
      </WrapperButton>
    </Wrapper>
  );
}
