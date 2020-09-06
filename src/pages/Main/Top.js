import React, { useLayoutEffect, useState } from "react";
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

const ScrollComponent = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  opacity: 0;
  background-color: #000;

  ${({ show }) =>
    show &&
    `
      opacity: 1;
    `}
`;
const ScrollContainer = styled.div`
  width: 1392px;
  margin: 0 auto;
`;
const ScrollTitle = styled(Top)``;
const ScrollTitleCol = styled(TopCol)``;
const ScrollTitleContent = styled(TopColContent)``;

const ScrollNav = styled.div`
  display: flex;
  flex-direction: row;
  height: 46px;
`;
const ScrollNavColNumber = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
  margin-right: 8px;

  ${({ active }) => active && `background-color: #fff; color #000;`}
`;
const ScrollNavCol = styled.div`
  flex: 1;
  padding-left: 8px;
  padding-right: 8px;
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;

  &:hover {
    ${ScrollNavColNumber} {
      background-color: #fff;
      color #000;
    }
  }
`;
const ScrollNavColText = styled.div`
  font-size: 18px;
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
  padding-bottom: 19px;
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

const ABSTRACT_OFFSET = 538;
const CONCEPT_OFFSET = 1162;
const RESEARCH_OFFSET = 2578;
const EXPERIMENT_OFFSET = 5602;
const CONCLUSION_OFFSET = 16938;
const BIBLIOGRAPHY_OFFSET = 17490;

const ABSTRACT = "ABSTRACT";
const CONCEPT = "CONCEPT";
const RESEARCH = "RESEARCH";
const EXPERIMENT = "EXPERIMENT";
const CONCLUSION = "CONCLUSION";
const BIBLIOGRAPHY = "BIBLIOGRAPHY";

function TopComponent() {
  const [scrolled, setScrolled] = useState(false);
  const [current, setCurrent] = useState(false);

  const handleScroll = (e) => {
    let scrollTop = e.srcElement.scrollingElement.scrollTop;

    console.log("scrollTop", scrollTop);
    if (scrollTop > 526) {
      setScrolled(true);
    } else {
      setScrolled(false);
    }

    if (scrollTop >= BIBLIOGRAPHY_OFFSET) {
      setCurrent(BIBLIOGRAPHY);
    } else if (scrollTop >= CONCLUSION_OFFSET) {
      setCurrent(CONCLUSION);
    } else if (scrollTop >= EXPERIMENT_OFFSET) {
      setCurrent(EXPERIMENT);
    } else if (scrollTop >= RESEARCH_OFFSET) {
      setCurrent(RESEARCH);
    } else if (scrollTop >= CONCEPT_OFFSET) {
      setCurrent(CONCEPT);
    } else if (scrollTop >= ABSTRACT_OFFSET) {
      setCurrent(ABSTRACT);
    } else {
      setCurrent("");
    }
  };

  useLayoutEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const linkSection = (_top) => {
    window.scrollTo({ top: _top, behavior: "smooth" });
  };

  return (
    <>
      <ScrollComponent show={scrolled}>
        <ScrollContainer>
          <ScrollTitle>
            <ScrollTitleCol>
              <ScrollTitleContent>
                How to Visualize Emotional Expressions <br />
                of Artificial Intelligence
              </ScrollTitleContent>
            </ScrollTitleCol>
            <ScrollTitleCol>
              <ScrollTitleContent>
                Designing for an Affective <br />
                Human - A.I. Interaction
              </ScrollTitleContent>
            </ScrollTitleCol>
            <ScrollTitleCol>
              <ScrollTitleContent>
                Master Thesis Project
                <br />
                by Jingyu Lee
              </ScrollTitleContent>
            </ScrollTitleCol>
          </ScrollTitle>
          <ScrollNav>
            <ScrollNavCol onClick={() => linkSection(ABSTRACT_OFFSET)}>
              <ScrollNavColNumber active={current === ABSTRACT}>
                1
              </ScrollNavColNumber>
              <ScrollNavColText>Abstract</ScrollNavColText>
            </ScrollNavCol>
            <ScrollNavCol onClick={() => linkSection(CONCEPT_OFFSET)}>
              <ScrollNavColNumber active={current === CONCEPT}>
                2
              </ScrollNavColNumber>
              <ScrollNavColText>Concept</ScrollNavColText>
            </ScrollNavCol>
            <ScrollNavCol onClick={() => linkSection(RESEARCH_OFFSET)}>
              <ScrollNavColNumber active={current === RESEARCH}>
                3
              </ScrollNavColNumber>
              <ScrollNavColText>Research</ScrollNavColText>
            </ScrollNavCol>
            <ScrollNavCol onClick={() => linkSection(EXPERIMENT_OFFSET)}>
              <ScrollNavColNumber active={current === EXPERIMENT}>
                4
              </ScrollNavColNumber>
              <ScrollNavColText>Experiment</ScrollNavColText>
            </ScrollNavCol>
            <ScrollNavCol onClick={() => linkSection(CONCLUSION_OFFSET)}>
              <ScrollNavColNumber active={current === CONCLUSION}>
                5
              </ScrollNavColNumber>
              <ScrollNavColText>Conclusion</ScrollNavColText>
            </ScrollNavCol>
            <ScrollNavCol onClick={() => linkSection(BIBLIOGRAPHY_OFFSET)}>
              <ScrollNavColNumber active={current === BIBLIOGRAPHY}>
                6
              </ScrollNavColNumber>
              <ScrollNavColText>Bibliography</ScrollNavColText>
            </ScrollNavCol>
          </ScrollNav>
        </ScrollContainer>
      </ScrollComponent>

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
