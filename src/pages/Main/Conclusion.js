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

const ConclusionSection = styled(Section)`
  padding-bottom: 82px;
`;

function ConclusionComponent() {
  return (
    <ConclusionSection>
      <Title>
        <TitleWrap>
          <TitleNumber>5</TitleNumber>
          <TitleText>Conclusion</TitleText>
        </TitleWrap>
      </Title>
      <Body>
        <Row>
          <Col>
            <Text>
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In order to
              improve emotional communication <br />
              between a human and an AI assistant service, this thesis <br />
              project was based on research and visual <br />
              experimentation. To achieve this, Ekman's six universal <br />
              facial expressions, Plutchik's color theory of human <br />
              emotions and features of facial expressions were <br />
              studied. Based on the study, it found out that the <br />
              features of graphic shapes are related to emotions and <br />
              could be applied to creating graphic images to express <br />
              an AI's emotions. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; For the sake of
              readability and usability, the <br />
              digital product should have a clean and simple interface. <br />
              To achieve this goal, simplified graphic images were <br />
              developed in the practical experiment. The experiment <br />
              uses the whole gamut from very basic graphic elements, <br />
              lines and dots, to complex solid shapes. The study and <br />
              experiment conclude that simplified graphic images that <br />
              contain emotional information could be used as the <br />
              main graphic element of the emotional interaction
            </Text>
          </Col>
          <Col>
            <Text>
              between a human and an AI assistant service. This could <br />
              greatly improve the emotional interaction between <br />
              human subjects and an AI. To create a natural <br />
              conversation between humans and an AI, further studies <br />
              will be required, but the experiments show possibilities <br />
              to improve the way to express an AI's emotions. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; I think that the
              contribution by this thesis project <br />
              to the topic discussed takes us closer to understanding <br />
              emotions in graphic images. A color system, features of <br />
              graphic form, and movements can be applied to create <br />
              emotional graphic images. The present experiment <br />
              could be considered and applied to the process of <br />
              developing an AI assistant service able to have an <br />
              emotional conversation with a human. Given that the <br />
              technological development of an AI has become <br />
              possible, a coexistence of humans and AI has become a <br />
              necessity. I hope this research will help humans and AIs <br />
              coexist in the future.
            </Text>
          </Col>
        </Row>
      </Body>
    </ConclusionSection>
  );
}

export default ConclusionComponent;
