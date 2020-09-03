import React from "react";
import styled from "styled-components";

const Top = styled.div`
  display: flex;
  flex-direction: row;
  border-right: 1px solid #fff;
  border-bottom: 2px solid #fff;
`;
const TopCol = styled.div`
  flex: 1;
  padding-left: 7px;
  padding-right: 7px;
  height: 48px;
  display: flex;
  align-items: center;
  border-left: 1px solid #fff;
`;
const TopColContent = styled.div`
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 18px;
`;

const Title = styled.div`
  display: flex;
  flex-direction: row;
  border-left: 1px solid #fff;
  border-right: 1px solid #fff;
`;
const TitleCol = styled.div`
  flex: 1;
  padding-left: 7px;
  padding-right: 7px;
`;
const TitleColHeader = styled.div`
  padding-top: 27px;
  padding-bottom: 22px;
  font-size: 60px;
  line-height: 48px;
`;
const TitleColDesc = styled.div`
  height: 48px;
  display: flex;
  align-items: center;
`;
const TitleColDescContent = styled.div`
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 18px;
`;

function TopComponent() {
  return (
    <>
      <Top>
        <TopCol>
          <TopColContent>
            The Visual Communication Institute HGK
            <br />
            Basel School of Design
          </TopColContent>
        </TopCol>
        <TopCol>
          <TopColContent>
            College of Architecture, Design &#38; Arts UIC
            <br />
            University of Illinois at Chicago
          </TopColContent>
        </TopCol>
        <TopCol>
          <TopColContent>
            International Master of Design
            <br />
            MDes UIC/HGK
          </TopColContent>
        </TopCol>
      </Top>
      <Title>
        <TitleCol>
          <TitleColHeader>
            How to
            <br />
            Visualize
          </TitleColHeader>
          <TitleColDesc>
            <TitleColDescContent>
              Designing for an Affective
              <br />
              Human - A.I. Interaction
            </TitleColDescContent>
          </TitleColDesc>
        </TitleCol>
        <TitleCol>
          <TitleColHeader>
            Emotional
            <br />
            Expressions
          </TitleColHeader>
          <TitleColDesc>
            <TitleColDescContent>
              Master Thesis Project
              <br />
              by Jingyu Lee
            </TitleColDescContent>
          </TitleColDesc>
        </TitleCol>
        <TitleCol>
          <TitleColHeader>
            of Artificial
            <br />
            Intelligence
          </TitleColHeader>
          <TitleColDesc>
            <TitleColDescContent>
              Mentors: Mischa Leiner, Theodore Davis,
              <br />
              Dr. Invar-Torre Hollaus
            </TitleColDescContent>
          </TitleColDesc>
        </TitleCol>
      </Title>
    </>
  );
}

export default TopComponent;
