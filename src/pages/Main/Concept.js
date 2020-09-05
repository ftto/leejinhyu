import React, { useState } from "react";
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
  Gray,
  Image,
  ImageRemark,
  BookmarkWrap,
  Bookmark,
} from "../../components";

const ImageFig1 = styled(Image)``;
const ImageFig1Remark = styled(ImageRemark)``;

const Bookmark1 = styled(Bookmark)`
  margin-top: 290px;
`;

const BOOKMARK_1 = "BOOKMARK_1";

function ConceptComponent() {
  const [bookmarkActive, setBookmarkActive] = useState("");

  const hoverBookmark = (bookmark) => {
    setBookmarkActive(bookmark);
  };

  return (
    <Section>
      <Title>
        <TitleWrap>
          <TitleNumber>2</TitleNumber>
          <TitleText>Concept</TitleText>
        </TitleWrap>
      </Title>
      <Body>
        <BookmarkWrap>
          <Bookmark1
            onMouseEnter={() => hoverBookmark(BOOKMARK_1)}
            onMouseLeave={() => hoverBookmark("")}
            active={bookmarkActive === BOOKMARK_1}
          >
            ¹ Jossey-Bass, Pfeiffer, The <br />
            Pfeiffer Library Volume 25, 2nd <br />
            Edition, 1998
          </Bookmark1>
        </BookmarkWrap>
        <Row>
          <Col>
            <Text>
              2.1 Background
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Several of the
              globally leading IT companies are <br />
              integrating Artificial Intelligence Services into their <br />
              products such as Siri by Apple, Google Assistant by <br />
              Google, and Alexa by Amazon. These products play a<br />
              role as an assistant in our digital devices. Users can use <br />
              these products as an assistant to call up specific <br />
              functions and ask questions. Updates of these products <br />
              often offer new features that enable AI products to <br />
              provide more efficient functions. For this, a natural <br />
              communication environment is required that users can <br />
              feel comfortable with.{" "}
              <Gray
                onMouseEnter={() => hoverBookmark(BOOKMARK_1)}
                onMouseLeave={() => hoverBookmark("")}
                active={bookmarkActive === BOOKMARK_1}
              >
                “Effective communication <br />
                frequently results in friendships that are more <br />
                meaningful, smoother, and more rewarding <br />
                relationships with people on and off the job, and <br />
                increased ability to meet personal needs. Psychologist <br />
                Abraham Maslow (1970) suggests that the capability to <br />
                satisfy personal needs arises mainly from the ability to <br />
                communicate.” ¹
              </Gray>{" "}
              That is, a natural conversation-based <br />
              environment could improve effective communication. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; As people
              increasingly use AI assistant services, <br />
              there are some demands to use an AI service not only as <br />
              an assistant but also like a friend who can share one’s <br />
              emotional feelings. In the video advertisement of “Hey <br />
              Kakao,” an AI product by Kakao Inc. in South Korea, the <br />
              video shows people having a casual talk with an AI the <br />
              way they would talk with a human being. This <br />
              commercial reflects the interaction between human and <br />
              an AI showing feelings and emotions from both sides. <br />
              The advertisement states that the AI is not only seen as <br />
              an assistant manager, but has almost become a “friend.” <br />
              For this, the AI should be improved in terms of not only <br />
              offering voice or text messages but also a visual <br />
              interface.
            </Text>
          </Col>
          <Col>
            <Text>
              2.2 Idea
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The initial idea
              of the thesis project is to improve <br />
              the emotional communication between human and AI. <br />
              The image (Fig.1) shows the basic communication <br />
              process. The basic concept of the communication <br />
              process is as follows: the sender sends a message to <br />
              the receiver, and the receiver sends a feedback to the <br />
              sender. This interaction takes place contemporaneously. <br />
              In order to send both a message and a feedback, texts, <br />
              voice exchanges, and nonverbal expressions can be <br />
              used as channels. “Once a message has been encoded, <br />
              the next level in the communication process is to <br />
              transmit or communicate the message to a receiver. <br />
              This can be done in many ways: during face-to-face <br />
              verbal interaction, over the telephone, through printed <br />
              materials (letters, newspapers, etc.), or through visual <br />
              media (television, photographs). Verbal, written, and <br />
              visual media are three examples of possible <br />
              communication channels used to transmit messages <br />
              between senders and receivers. Other transmission <br />
              channels include touch, gestures, clothing, and physical <br />
              distances between sender and receiver (proxemics).” <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In AI assistant
              services based on voice <br />
              recognition technology, people mainly use voice <br />
              exchanges when communicating with an AI. Users can <br />
              use the text mode via the digital device environment as <br />
              well, but it is not fully efficient. On the other hand, in <br />
              human-to-human interaction (Fig.1), people can use not <br />
            </Text>
            <ImageFig1
              src="/assets/images/fig-1.png"
              alt="Fig. 1: Basic Communication Process, 2020"
            />
            <ImageFig1Remark>
              Fig. 1: Basic Communication Process, 2020
            </ImageFig1Remark>
            <Text>
              only the text and voice-exchange mode, but also <br />
              nonverbal expressions such as body language. Through <br />
              these emotional clues, people can understand and <br />
              engage in a more efficient way. In fact, facial <br />
              expressions are one of the most particularly powerful <br />
              ways to express a person’s emotions. Sometimes facial <br />
              expressions can express human emotions better than <br />
              any text and words. People can sympathize with others’ <br />
              emotions by following their facial expressions. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The goal of this
              thesis project is to develop an <br />
              AI's emotional expressions, so people can understand <br />
              and experience them in a natural way, and improve the <br />
              interaction between a human and an AI-assistant <br />
              service.
            </Text>
          </Col>
        </Row>
      </Body>
    </Section>
  );
}

export default ConceptComponent;
