import React from "react";
import styled from "styled-components";

const Footer = styled.div``;
const FooterText = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
`;

const FooterTop = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 1px solid #fff;
  border-right: 1px solid #fff;
`;
const FooterTopCol = styled.div`
  width: 464px;
  height: 48px;
  padding-left: 7px;
  padding-right: 7px;
  display: flex;
  align-items: center;
  border-left: 1px solid #fff;
`;

const FooterBottom = styled.div`
  display: flex;
  flex-direction: row;
  border-top: 4px solid #fff;
  border-right: 1px solid #fff;
  height: 286px;
`;
const FooterBottomCol = styled.div`
  width: 928px;
  padding-left: 7px;
  padding-right: 7px;
  border-left: 1px solid #fff;
`;
const FooterBottomColLeft = styled(FooterBottomCol)`
  width: 464px;
  padding-top: 22px;
`;
const FooterBottomRow = styled.div`
  display: flex;
  flex-direction: row;
  height: 129px;
`;
const FooterBottomRowCol = styled.div`
  width: 464px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 22px;
`;
const FooterBottomRowText = styled(FooterText)`
  line-height: 16px;
`;

const FooterBiography = styled.div`
  border-top: 1px solid #fff;
  margin-left: -7px;
  margin-right: -7px;
  padding-left: 7px;
  padding-right: 7px;
  padding-top: 15px;
`;

function FooterComponent() {
  return (
    <Footer>
      <FooterTop>
        <FooterTopCol>
          <FooterText>
            Visual Communication Institute
            <br />
            Basel School of Design
          </FooterText>
        </FooterTopCol>
        <FooterTopCol>
          <FooterText>
            International Master of Design
            <br />
            MDes UIC/HGK
          </FooterText>
        </FooterTopCol>
        <FooterTopCol>
          <FooterText>
            Mentors: Mischa Leiner, Theodore Davis,
            <br />
            Dr. Invar-Torre Hollaus
          </FooterText>
        </FooterTopCol>
      </FooterTop>
      <FooterBottom>
        <FooterBottomColLeft>
          <FooterText>
            Imprint
            <br />
            <br />
            Jingyu Lee
            <br />
            Mittlere Strasse 39
            <br />
            4056 Basel
            <br />
            Switzerland
            <br />
            <br />
            M +41 78 79 681 07
            <br />
            jingyu.lee@students.fhnw.ch
            <br />
            <br />
            Concept and Design: Jingyu Lee
            <br />
            Code: ftto, Aki Kim
            <br />
            Typeface: Suisse Works Regular, Swiss Typefaces
          </FooterText>
        </FooterBottomColLeft>
        <FooterBottomCol>
          <FooterBottomRow>
            <FooterBottomRowCol>
              <FooterBottomRowText>
                Institut Visuelle Kommunikation HGK
                <br />
                <br />
                Hochschule für Gestaltung und Kunst FHNW
                <br />
                A. Münchenstein CH, Freilager-Platz 1, 4142 Basel
                <br />
                T. +41 61 228 41 11
              </FooterBottomRowText>
            </FooterBottomRowCol>
            <FooterBottomRowCol>
              <FooterBottomRowText>
                College of Architecture, Design, and the Arts
                <br />
                <br />
                University of Illinois at Chicago
                <br />
                A. 106 Jefferson Hall, 929 W Harrison St, Chicago, IL 60607
                <br />
                T. +1 312-996-3339
              </FooterBottomRowText>
            </FooterBottomRowCol>
          </FooterBottomRow>
          <FooterBiography>
            <FooterText>
              Biography
              <br />
              <br />
              Jingyu Lee studied industrial design for his Bachelor's degree.
              After graduating, he started his professional career as a UI/UX
              designer from 2014. He is interested in the high-tech IT industry
              and has already designed numerous services for a digital
              environment. On the other hand, he is into modern mid-
              20th-century graphic design, especially the Swiss International
              Style, which brought him to Basel, Switzerland. Since 2018, he has
              been studying for a Master's degree at the Basel School of Design
              and the University of Illinois at Chicago.
            </FooterText>
          </FooterBiography>
        </FooterBottomCol>
      </FooterBottom>
    </Footer>
  );
}

export default FooterComponent;
