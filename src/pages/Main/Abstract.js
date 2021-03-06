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

const AbstractSection = styled(Section)`
  padding-bottom: 58px;
`;

function AbstractComponent() {
  return (
    <AbstractSection>
      <Title>
        <TitleWrap>
          <TitleNumber>1 </TitleNumber>
          <TitleText>Abstract</TitleText>
        </TitleWrap>
      </Title>
      <Body>
        <Row>
          <Col>
            <Text>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Nowadays, with
              the development of Artificial
              <br />
              Intelligence technology, AI services are a major
              <br />
              influence and change in people's everyday lives. While
              <br />
              AI technology has become a convenient part of people's
              <br />
              daily lives, people have shifted their focus from the
              <br />
              physical world to the digital world, so there is an
              <br />
              increasing demand for AI services that can produce
              <br />
              emotional interaction. As a result, emotional AI systems
              <br />
              and emotional calculations are the main part of any IT-
              <br />
              industry research. In the existing AI assistant services, it
              <br />
              mostly focus on improving the practical functions based
              <br />
              on useful information and data, but lacks any
              <br />
              personalized emotional services for users.
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The key aspect of
              this project is to develop a<br />
              simulation of a natural conversation between a human
              <br />
              and an artificial-intelligence service. The aim of this
              <br />
              research is to produce visual experiments based on
              <br />
              emotional expressions that can be applied to the AI
              <br />
              service that, thereupon, has a real-time emotional
              <br />
              reaction. Therefore, in this thesis project, the author
              <br />
              proposes an emotional visual system for an AI service,
              <br />
              which casts emotion as a communication medium in the
              <br />
              network and makes the emotional-communication
            </Text>
          </Col>
          <Col>
            <Text>
              system more intelligent by combining it with AI tech-
              <br />
              nology. It can be applied to an AI-enabled emotional
              <br />
              communication, that is, to an emotional social AI
              <br />
              assistant service to provide users with a personalized
              <br />
              service emotion.
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; At the beginning,
              the research explores the
              <br />
              process of communication through general human
              <br />
              interaction. The study of human facial expressions and
              <br />
              the color theory to show basic emotions are introduced
              <br />
              in detail, and visual experiments are done to improve an
              <br />
              AI's emotional expressions in the AI-enabled emotion
              <br />
              communication system and the accuracy of the
              <br />
              recognition of emotions. The outcome of the practical
              <br />
              experiments created a series of visual languages:
              <br />
              graphic shapes, color system and movements, and
              <br />
              more. For the final output, the prototype with a scenario
              <br />
              in a specific situation that simulates the AI voice
              <br />
              recognition service is shown. The prototype is then
              <br />
              compared with existing AI services; it verifies how the
              <br />
              thesis project can improve the emotional
              <br />
              communication between a human and an AI assistant
              <br />
              service.
            </Text>
          </Col>
        </Row>
      </Body>
    </AbstractSection>
  );
}

export default AbstractComponent;
