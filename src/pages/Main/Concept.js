import React from "react";
import styled from "styled-components";

const Section = styled.div`
  display: flex;
  flex-direction: row;
`;

const Title = styled.div`
  width: 472px;
  border-top: 1px solid #fff;
  height: 36px;
  border-left: 4px solid #fff;
  padding-left: 12px;
  padding-top: 11px;
`;
const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const TitleNumber = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 18px;
  line-height: 24px;
  text-align: center;
`;

const TitleText = styled.div`
  padding-left: 8px;
  font-size: 18px;
`;

const Body = styled.div`
  border-top: 4px solid #fff;
  flex: 1;
  display: flex;
  flex-direction: row;
`;
const Col = styled.div`
  width: 448px;
  ${({ left }) => left && `margin-right: 16px;`}
`;
const Text = styled.div`
  flex: 1;
  padding-top: 8px;
  font-size: 18px;
  line-height: 24px;
`;

function ConceptComponent() {
  return (
    <Section>
      <Title>
        <TitleWrap>
          <TitleNumber>1 </TitleNumber>
          <TitleText>Abstract</TitleText>
        </TitleWrap>
      </Title>
      <Body></Body>
    </Section>
  );
}

export default ConceptComponent;
