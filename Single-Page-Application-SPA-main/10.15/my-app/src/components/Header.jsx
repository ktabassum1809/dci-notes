import { useState } from "react";
import styled from "styled-components";

const Button = styled.button`
  margin: 10px;
  cursor: pointer;
  padding: 5px;
  border-radius: 5px;
  color: white;
  border: none;
  background: ${({ $toggle }) => ($toggle ? "blue" : "gray")};
`;

export default function Header({ test }) {
  const [toggleBackground, setToggleBackground] = useState(false);
  const [count, setCount] = useState(0);

  console.log(test);

  return (
    <div>
      header
      {" " + count}
      <Button
        $toggle
        onClick={() => {
          setCount((prevState)=> prevState + 1);
          setCount((prevState)=> prevState + 1);
        }}
      >
        Sign up
      </Button>
      <Button
        onClick={() => setToggleBackground((prevState) => !prevState)}
        $toggle={toggleBackground}
      >
        Login
      </Button>
    </div>
  );
}
