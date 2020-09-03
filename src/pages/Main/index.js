import React from "react";
import styled from "styled-components";

import Top from "./Top";
import ContentsIndex from "./ContentsIndex";
import Abstract from "./Abstract";
import Concept from "./Concept";

const Container = styled.div`
  width: 1392px;
  margin: 0 auto;
`;

function Main() {
  return (
    <Container>
      <Top />
      <ContentsIndex />
      <Abstract />
      <Concept />
    </Container>
  );
}

export default Main;
