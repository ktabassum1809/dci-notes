import { Fragment } from "react";
import styled from "styled-components";
import Header from "./components/Header";

 const Wrapper = styled.section`
  background-color: lightblue;
  padding: 50px;
  border: 1px solid black;
`;

 const Title = styled.h1`
  color: red;
  font-size: 40px;
`;

const SecondTitle = styled.h2`
color: green;
font-size: 30px;
`
function App() {
  return (
    <Fragment>
      <Header test="hi" />
      <Wrapper>
        <Title> Hello World </Title>
        <SecondTitle> hi again </SecondTitle>
      </Wrapper>
      <Wrapper as="div"> this is a div </Wrapper>
    </Fragment>
  );
}

export default App;
