import React from "react";
import styled from "styled-components";

const Index = styled.div`
  padding-bottom: 12px;
`;
const IndexTitle = styled.div`
  height: 24px;
  background-color: #fff;
  display: flex;
  align-items: center;
  padding-left: 472px;
`;
const IndexTitleText = styled.div`
  color: #000;
  font-size: 14px;
  letter-spacing: 0.5px;
  line-height: 18px;
`;
const IndexBody = styled.div`
  padding-left: 472px;
`;
const IndexGroup = styled.div`
  border-bottom: 1px solid #fff;
  ${({ noBorder }) => noBorder && `border-bottom: none;`}
`;
const IndexRow = styled.div`
  display: flex;
  flex-direction: row;
`;
const IndexCol = styled.div`
  ${({ flex }) => flex && `flex: 1;`}
  ${({ first }) => first && `width: 232px;`}
`;
const IndexTextWrap = styled.div`
  ${({ border }) => border && `border-bottom: 1px solid #fff;`}
  position: relative;
`;

const IndexText = styled.div`
  font-size: 18px;
  height: 23px;
  display: flex;
  align-items: center;
  flex-direction: row;
`;

const IndexArrow = styled.div`
  background-image: url(/assets/images/arrow.png);
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  width: 20px;
  height: 20px;
  position: absolute;
  top: 2px;
  right: 8px;
`;

function IndexComponent() {
  return (
    <Index>
      <IndexTitle>
        <IndexTitleText>TABLE OF CONTENTS</IndexTitleText>
      </IndexTitle>
      <IndexBody>
        <IndexGroup>
          <IndexRow>
            <IndexCol flex>
              <IndexTextWrap>
                <IndexText>Abstract</IndexText>
              </IndexTextWrap>
            </IndexCol>
          </IndexRow>
        </IndexGroup>
        <IndexGroup>
          <IndexRow>
            <IndexCol first>
              <IndexTextWrap>
                <IndexText>Concept</IndexText>
              </IndexTextWrap>
            </IndexCol>
            <IndexCol flex>
              <IndexTextWrap border>
                <IndexText>2.1 Background</IndexText>
                <IndexArrow />
              </IndexTextWrap>
              <IndexTextWrap>
                <IndexText>2.2 Idea</IndexText>
                <IndexArrow />
              </IndexTextWrap>
            </IndexCol>
          </IndexRow>
        </IndexGroup>
        <IndexGroup>
          <IndexRow>
            <IndexCol first>
              <IndexTextWrap>
                <IndexText>Research</IndexText>
              </IndexTextWrap>
            </IndexCol>
            <IndexCol flex>
              <IndexTextWrap border>
                <IndexText>
                  3.1 Universal Facial Expressions of Human Emotion
                </IndexText>
                <IndexArrow />
              </IndexTextWrap>
              <IndexTextWrap border>
                <IndexText>3.2 Method to Express an AI's Emotions</IndexText>
                <IndexArrow />
              </IndexTextWrap>
              <IndexTextWrap border>
                <IndexText>3.3 Color Theory</IndexText>
                <IndexArrow />
              </IndexTextWrap>
              <IndexTextWrap>
                <IndexText>3.4 Features of Human Facial Expressions</IndexText>
                <IndexArrow />
              </IndexTextWrap>
            </IndexCol>
          </IndexRow>
        </IndexGroup>
        <IndexGroup>
          <IndexRow>
            <IndexCol first>
              <IndexTextWrap>
                <IndexText>Practical Experiment</IndexText>
              </IndexTextWrap>
            </IndexCol>
            <IndexCol flex>
              <IndexTextWrap border>
                <IndexText>4.1 Grahic Shape</IndexText>
                <IndexArrow />
              </IndexTextWrap>
              <IndexTextWrap border>
                <IndexText>4.2 Color system</IndexText>
                <IndexArrow />
              </IndexTextWrap>
              <IndexTextWrap border>
                <IndexText>4.3 Movement</IndexText>
                <IndexArrow />
              </IndexTextWrap>
              <IndexRow>
                <IndexCol first>
                  <IndexTextWrap>
                    <IndexText>4.4 Prototype</IndexText>
                  </IndexTextWrap>
                </IndexCol>
                <IndexCol flex>
                  <IndexTextWrap border>
                    <IndexText>News Information</IndexText>
                    <IndexArrow />
                  </IndexTextWrap>
                  <IndexTextWrap border>
                    <IndexText>Weather Information</IndexText>
                    <IndexArrow />
                  </IndexTextWrap>
                  <IndexTextWrap>
                    <IndexText>3-Dimensional Effects</IndexText>
                    <IndexArrow />
                  </IndexTextWrap>
                </IndexCol>
              </IndexRow>
            </IndexCol>
          </IndexRow>
        </IndexGroup>
        <IndexGroup>
          <IndexRow>
            <IndexCol flex>
              <IndexTextWrap>
                <IndexText>Conclusion</IndexText>
                <IndexArrow />
              </IndexTextWrap>
            </IndexCol>
          </IndexRow>
        </IndexGroup>
        <IndexGroup noBorder>
          <IndexRow>
            <IndexCol flex>
              <IndexTextWrap>
                <IndexText>Bibliography</IndexText>
                <IndexArrow />
              </IndexTextWrap>
            </IndexCol>
          </IndexRow>
        </IndexGroup>
      </IndexBody>
    </Index>
  );
}

export default IndexComponent;
