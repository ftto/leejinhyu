import React from "react";
import styled from "styled-components";

import {
  Section,
  Title,
  TitleWrap,
  TitleNumber,
  TitleText,
  Body,
  Row,
  Col,
  Text,
} from "../../components";

const BibliographySection = styled(Section)`
  padding-bottom: 95px;
`;
const BibliographyTitle = styled(Title)`
  border-top: 1px solid #aaa;
  border-left: 4px solid #aaa;
`;
const BibliographyTitleNumber = styled(TitleNumber)`
  border: 1px solid #aaa;
  color: #aaa;
`;
const BibliographyTitleText = styled(TitleText)`
  color: #aaa;
`;
const BibliographyBody = styled(Body)`
  border-top: 4px solid #aaa;
`;
const BibliographyText = styled(Text)`
  color: #aaa;
`;

function BibliographyComponent() {
  return (
    <BibliographySection>
      <BibliographyTitle>
        <TitleWrap>
          <BibliographyTitleNumber>6</BibliographyTitleNumber>
          <BibliographyTitleText>Bibliography</BibliographyTitleText>
        </TitleWrap>
      </BibliographyTitle>
      <BibliographyBody>
        <Row>
          <Col>
            <BibliographyText>
              &nbsp; &nbsp; &nbsp; &nbsp;Jossey-Bass, Pfeiffer, The Pfeiffer
              Library Volume 25, <br />
              2nd Edition, 1998 <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Paweł Tarnowski, Marcin Kołodziej,
              Andrzej <br />
              Majkowski, Remigiusz J. Rak, Emotion recognition using <br />
              facial expressions, International Conference on <br />
              Computational Science, ICCS 2017 <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Ekman, P. “Universal Facial Expressions
              of Emotions” <br />
              California Mental Health Research Digest: 8(4), 151-158, <br />
              1970 <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;MacDorman, K. F.; Ishiguro, H., “The
              uncanny <br />
              advantage of using androids in social and cognitive <br />
              science research”. Interaction Studies. 297–337, 2006 <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Dieter Rams, “Commencement Speech,” Art
              Center <br />
              News, 22.04.2013, blogs.artcenter.edu/dottedline/
              <br />
              2013/04/22/dieter-rams-graduation-speech/ (accessed <br />
              20.07.2020) <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Dieter Rams, “Interview with Kinfolk
              Magazine,” <br />
              Kinfolk, 21.02.2017, kinfolk.com/dieter-rams-littledesign-
              <br />
              possible/ (accessed 20.07.2020) <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Abigail Cain, Picasso’s Drawings of
              Bulls Inspired <br />
              Apple’s Famously Simple Designs, Artsy, 2019,
              <br />
              www.artsy.net/article/artsy-editorial-picassos-
              <br />
              drawings-bulls-inspired-apples-famously-
              <br />
              simpledesigns (accessed 20.07.2020) <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;John H Xin, Analysis of cross‐cultural
              color emotion, <br />
              Color Research &#38; Application 32(3):223 – 229, 2007 <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Kazunori Terada, Artificial emotion
              expression for a <br />
              robot by dynamic color change, IEEE International <br />
              Symposium on Robot and Human Interactive <br />
              Communication, 2012 <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Lemaignan, Séverin, Mathieu Warnier, E.
              Akin Sisbot, <br />
              Aurélie Clodic, and Rachid Alami. “Artificial Cognition for <br />
              Social Human–Robot Interaction: An Implementation.” <br />
              Artificial Intelligence 247 : 45–69, 2017
            </BibliographyText>
          </Col>
          <Col>
            <BibliographyText>
              &nbsp; &nbsp; &nbsp; &nbsp;Jean-Paul Favre, André November, color
              and und et <br />
              communication. ABC Verlag Zürich, 1979
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Albers Josef, Interaction of Color, New
              Haven: Yale <br />
              University Press, 2013.
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Reichardt, Jasia. Robots: Fact,
              Fiction, and <br />
              Prediction. Harmondsworth, Eng.: Penguin Books, 1978
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Ekman, P. “Universal Facial Expressions
              of <br />
              Emotions,” California Mental Health Research Digest, <br />
              8(4), 151-158, 1970
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Barlett, M. S., Hager, J.C., Ekman, P.,
              &#38; Swjnowski, <br />
              T.J. “Measuring Facial Expressions By Computer Image <br />
              Analysis,” Psychophysiology, 36(2), 253-263, 1999
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Osvaldo da Pos and Paul Green-Armytage,
              “Facial <br />
              Expressions, Colours and Basic Emotions,” Color <br />
              Journal, 2, 1-20, 2007
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Deshmukh, Renuka &#38; Jagtap, Vandana
              “A Survey: <br />
              Software API and Database for Emotion Recognition.” <br />
              International Conference on Intelligent Computing and <br />
              Control Systems (ICICCS) (2017): pp. 284-289., 2016
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Renuka S. Deshmukh, A Survey: Software
              API and <br />
              Database for Emotion, Department of Computer <br />
              Engineering MIT, 2017
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Z. Hammal, L. Couvreur, A. Caplier, M.
              Rombaut. <br />
              “Facial expression classification: An approach based on <br />
              the fusion of facial deformations using the transferable <br />
              belief model,” International Journal of Approximate <br />
              Reasoning 46: 542–567, 2007
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Fujie, Y., Hori, M., Yoshimura, H., and
              Iwai, Y., <br />
              “Emotion transmission by color effects for a <br />
              teleoperated mobile communication robot,” in <br />
              Proceedings HRI 2013
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp;Workshop on Design of Human Likeness in
              HRI from <br />
              Uncanny Valley to Minimal Design (Tokyo), 2013
            </BibliographyText>
          </Col>
        </Row>
      </BibliographyBody>
    </BibliographySection>
  );
}

export default BibliographyComponent;
