import {useState} from "react";
import "./App.css";
import Counter369 from "./components/Counter369.jsx";
import {useRecoilState, useRecoilValue} from "recoil";
import {count369State} from "../atoms/index.js";
import styled from "styled-components";

function App() {
  
  const Typo = styled.span`
    font-size: 2rem;
    font-weight: bold;
  `;
  const count = useRecoilValue(count369State);
  
  return (
    <>
      <Typo>
        {count}
      </Typo>
      <Counter369 name="주노"/>
      <Counter369 name="준호"/>
    </>
  );
}

export default App;
