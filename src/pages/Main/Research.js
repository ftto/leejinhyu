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

const RowSecond = styled(Row)`
  margin-top: 72px;
`;

const ImageFig2 = styled(Image)`
  margin-top: 23px;
`;
const ImageFig2Remark = styled(ImageRemark)`
  padding-top: 5px;
`;
const ImageFig3 = styled(Image)`
  margin-top: 23px;
`;
const ImageFig3Remark = styled(ImageRemark)`
  margin-bottom: 2px;
`;
const ImageFig4 = styled(Image)`
  margin-top: 21px;
`;
const ImageFig4Remark = styled(ImageRemark)``;
const ImageFig5 = styled(Image)`
  margin-top: 21px;
`;
const ImageFig5Remark = styled(ImageRemark)`
  margin-bottom: 1px;
`;

const Bookmark2 = styled(Bookmark)`
  margin-top: 52px;
  height: 163px;
`;
const Bookmark4 = styled(Bookmark)`
  margin-top: 104px;
  height: 109px;
`;
const Bookmark3 = styled(Bookmark)`
  margin-top: 8px;
  height: 112px;
`;
const Bookmark5 = styled(Bookmark)`
  margin-top: 776px;
  height: 135px;
`;
const Bookmark6 = styled(Bookmark)`
  margin-top: 9px;
  height: 115px;
`;
const Bookmark7 = styled(Bookmark)`
  margin-top: 197px;
  height: 136px;
`;
const Bookmark8 = styled(Bookmark)`
  margin-top: 176px;
  height: 136px;
`;

const BOOKMARK_2 = "BOOKMARK_2";
const BOOKMARK_3 = "BOOKMARK_3";
const BOOKMARK_4 = "BOOKMARK_4";
const BOOKMARK_5 = "BOOKMARK_5";
const BOOKMARK_6 = "BOOKMARK_6";
const BOOKMARK_7 = "BOOKMARK_7";
const BOOKMARK_8 = "BOOKMARK_8";

function ResearchComponent() {
  const [bookmarkActive, setBookmarkActive] = useState("");

  const hoverBookmark = (bookmark) => {
    setBookmarkActive(bookmark);
  };

  return (
    <Section>
      <Title>
        <TitleWrap>
          <TitleNumber>3</TitleNumber>
          <TitleText>Research</TitleText>
        </TitleWrap>
      </Title>
      <Body>
        <BookmarkWrap>
          <Bookmark2
            onMouseEnter={() => hoverBookmark(BOOKMARK_2)}
            onMouseLeave={() => hoverBookmark("")}
            active={bookmarkActive === BOOKMARK_2}
          >
            ² Paweł Tarnowski, Marcin Kołodziej, Andrzej Majkowski, Remigiusz J.
            Rak, Emotion recognition using facial expressions, International
            Conference on Computational Science, ICCS 2017
          </Bookmark2>
          <Bookmark4
            onMouseEnter={() => hoverBookmark(BOOKMARK_4)}
            onMouseLeave={() => hoverBookmark("")}
            active={bookmarkActive === BOOKMARK_4}
          >
            ⁴ MacDorman, K. F.; Ishiguro, H., “The uncanny advantage of using
            androids in social and cognitive science research.” Interaction
            Studies. 297–337, 2006
          </Bookmark4>
          <Bookmark3
            onMouseEnter={() => hoverBookmark(BOOKMARK_3)}
            onMouseLeave={() => hoverBookmark("")}
            active={bookmarkActive === BOOKMARK_3}
          >
            ³ Ekman, Paul. “Universal Facial Expressions of Emotions,”
            California Mental Health Research Digest. 151–158, 1970
          </Bookmark3>
          <Bookmark5
            onMouseEnter={() => hoverBookmark(BOOKMARK_5)}
            onMouseLeave={() => hoverBookmark("")}
            active={bookmarkActive === BOOKMARK_5}
          >
            ⁵ Dieter Rams, "Commencement Speech", Art Center News, 22.04.2013,
            blogs.artcenter.edu/dottedline/2013/04/22/dieter-rams-graduation-speech/
            (accessed 20.07.2020)
          </Bookmark5>
          <Bookmark6
            onMouseEnter={() => hoverBookmark(BOOKMARK_6)}
            onMouseLeave={() => hoverBookmark("")}
            active={bookmarkActive === BOOKMARK_6}
          >
            ⁶ Dieter Rams, "interview with Kinfolk Magazine", Kinfolk,
            21.02.2017, kinfolk.com/dieter-rams-little-design-possible/
            (accessed 20.07.2020)
          </Bookmark6>
          <Bookmark7
            onMouseEnter={() => hoverBookmark(BOOKMARK_7)}
            onMouseLeave={() => hoverBookmark("")}
            active={bookmarkActive === BOOKMARK_7}
          >
            ⁷ John H Xin, Analysis of cross‐cultural color emotion, Color
            Research &#38; Application 32(3):223 - 229, 2007
          </Bookmark7>
          <Bookmark8
            onMouseEnter={() => hoverBookmark(BOOKMARK_8)}
            onMouseLeave={() => hoverBookmark("")}
            active={bookmarkActive === BOOKMARK_8}
          >
            ⁸ Kazunori Terada, Artificial emotion expression for a robot by
            dynamic color change, IEEE International Symposium on Robot and
            Human Interactive Communication, 2012
          </Bookmark8>
        </BookmarkWrap>
        <Row>
          <Col>
            <Text>
              3.1 Universal Facial Expressions of Human Emotion
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;{" "}
              <Gray
                onMouseEnter={() => hoverBookmark(BOOKMARK_2)}
                onMouseLeave={() => hoverBookmark("")}
                active={bookmarkActive === BOOKMARK_2}
              >
                “Facial expressions play an important role in the <br />
                recognition of emotions and are used in the process of <br />
                non-verbal communication, as well as to identify people. <br />
                They are very important in daily emotional <br />
                communication, just next to the tone of voice. They are <br />
                also an indicator of feelings, allowing a man to express <br />
                an emotional state. People can immediately recognize <br />
                the emotional state of a person.” ²{" "}
              </Gray>
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; As a nonverbal
              expression, facial expression is <br />
              one of the most powerful ways to express human <br />
              emotions. Paul Ekman is a psychologist and professor <br />
              who is a pioneer in the study of emotions and their <br />
              relation to facial expressions. According to his research <br />
              in 1970, human emotion can be expressed by six basic <br />
              facial expressions: fear, anger, sadness, happiness, <br />
              disgust, and surprise(fig. 2).{" "}
              <Gray
                onMouseEnter={() => hoverBookmark(BOOKMARK_3)}
                onMouseLeave={() => hoverBookmark("")}
                active={bookmarkActive === BOOKMARK_3}
              >
                “In other words, emotions
                <br /> prepare us to deal with important events without having{" "}
                <br />
                to think about them. These emotional responses are an <br />
                unbidden occurrence, meaning that we don’t choose to <br />
                feel them, they just happen to us automatically. Of all the{" "}
                <br />
                human emotions we experience, there are six universal <br />
                emotions that we all feel, transcending language, <br />
                regional, cultural, and ethnic differences.” ³{" "}
              </Gray>
              As Paul <br />
              Ekman explained, facial expressions are the prompt and <br />
              instinctive reactions caused by human emotions. This <br />
              shows, moreover, that facial expressions are deeply <br />
              connected to emotional communication.
            </Text>
            <ImageFig2
              src="/assets/images/fig-2.png"
              alt="Fig. 2: Ekman Paul, Universal facial expressions of emotion, 1970"
            />
            <ImageFig2Remark>
              Fig. 2: Ekman Paul, Universal facial expressions of emotion, 1970
            </ImageFig2Remark>
          </Col>
          <Col>
            <Text>
              3.2 Method to Express an AI's Emotions
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; What kind of
              graphic style is fitting to express an <br />
              AI's emotions? In the robotics field, robot designers tried <br />
              to make a robot's face resemble a real human’s face. <br />
              Sophia, the most famous humanoid robot, is known for <br />
              its man-like appearance and behavior compared to <br />
              previous robotic variants. Sophia imitates human <br />
              gestures and facial expressions, is able to answer <br />
              certain questions and to conduct simple conversations <br />
              on predefined topics. While Sophia was developed to be <br />
              able to conduct a natural conversation with humans, she <br />
              is also well known as a famous example of the uncanny <br />
              valley.{" "}
              <Gray
                onMouseEnter={() => hoverBookmark(BOOKMARK_4)}
                onMouseLeave={() => hoverBookmark("")}
                active={bookmarkActive === BOOKMARK_4}
              >
                “In aesthetics, the uncanny valley is a <br />
                hypothesized relationship between the degree an object <br />
                resembles a human being and the emotional response <br />
                to such an object. The concept suggests that humanoid <br />
                objects which imperfectly resemble actual human <br />
                beings provoke uncanny or strangely familiar feelings of <br />
                eeriness and revulsion in observers. ‘Valley’ denotes a <br />
                dip in the human observer's affinity for the replica, a <br />
                relation that otherwise increases with the replica's <br />
                human likeness.” ⁴
              </Gray>
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; People are apt to
              feel uncomfortable if robots <br />
              had realistic human faces; this phenomenon is called <br />
              uncanny valley. In the respective section of the graph <br />
              (Fig. 3), the more a robot’s face resembles a human’s, <br />
              the more negatively a human will react. However, the AI <br />
              assistant service should look familiar and friendly, and it <br />
              needs to show intuitive graphics easy to understand.
            </Text>
            <ImageFig3
              src="/assets/images/fig-3.png"
              alt="Fig. 3: MacDorman, The uncanny valley graph, 2016"
            />
            <ImageFig3Remark>
              Fig. 3: MacDorman, The uncanny valley graph, 2016
            </ImageFig3Remark>
            <Text>
              As an assistant service in digital devices, the visual <br />
              graphics would be implemented on a digital screen. One <br />
              of the important keywords of design in the IT field is <br />
              simplicity. For design quality control, Apple introduces <br />
              its design principles through the Apple Human Interface <br />
              Guideline. Google also illustrates its design method by <br />
              the Google Material Design. Both have a point in <br />
              common, which is simplicity. In order to efficiently use <br />
              the interface system, they emphasize the need for clarity <br />
              and simplicity of every component of the interface. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Dieter Rams, a
              legendary product designer in <br />
              Germany, commented that simplicity is a major principle <br />
              of Apple's design philosophy.{" "}
              <Gray
                onMouseEnter={() => hoverBookmark(BOOKMARK_5)}
                onMouseLeave={() => hoverBookmark("")}
                active={bookmarkActive === BOOKMARK_5}
              >
                “...Simplicity is the ultimate <br />
                sophistication.” That’s the maxim that Steve Jobs used. <br />
                It is a quote of Leonardo da Vinci’s. And of course Apple <br />
                has been, in recent years, the company that most <br />
                represented and constituted that aspect of design... .” ⁵{" "}
              </Gray>
              <br />
              In the interview with Kinfolk Magazine by Dieter Rams, <br />
              he again emphasizes the value of simplicity.{" "}
              <Gray
                onMouseEnter={() => hoverBookmark(BOOKMARK_6)}
                onMouseLeave={() => hoverBookmark("")}
                active={bookmarkActive === BOOKMARK_6}
              >
                “...The only <br />
                plausible way forward is the less-but-better way: back to <br />
                purity, back to simplicity. Simplicity is the key to <br />
                excellence! ...” ⁶{" "}
              </Gray>
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; As Dieter Rams
              explained the impact of <br />
              simplicity, pursuing simplicity is essential to enhancing <br />
              the completeness of modern digital design.
            </Text>
          </Col>
        </Row>
        <RowSecond>
          <Col>
            <Text>
              3.3 Color Theory
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Color can also be
              an essential factor to express <br />
              human emotion.{" "}
              <Gray
                onMouseEnter={() => hoverBookmark(BOOKMARK_7)}
                onMouseLeave={() => hoverBookmark("")}
                active={bookmarkActive === BOOKMARK_7}
              >
                “It is known that color may influence <br />
                human emotions or feelings, in the sense that some <br />
                colors may make one happy, while some colors may <br />
                make one depressive. Simultaneously, the color itself <br />
                has some characteristics, which can be described by <br />
                semantic words, such as 'warm-cool,’ ‘light-dark,’ 'soft-
                <br />
                hard,’ etc. The semantic words describing the <br />
                characteristics of colors and a human's emotional <br />
                response to colors are generally termed as color <br />
                emotion.” ⁷{" "}
              </Gray>
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; There are many
              color researches and studies <br />
              about human emotions, but one of the most famous <br />
              color theories of emotion is Robert Plutchik's theory. <br />
              <Gray
                onMouseEnter={() => hoverBookmark(BOOKMARK_8)}
                onMouseLeave={() => hoverBookmark("")}
                active={bookmarkActive === BOOKMARK_8}
              >
                “Plutchik suggested eight primary bipolar emotions: joy <br />
                versus sadness; anger versus fear; trust versus disgust; <br />
                and surprise versus anticipation. In addition, his <br />
                circumplex model makes connections between the idea <br />
                of an emotion circle and a color wheel. As with colors, <br />
                primary emotions can be expressed at different <br />
                intensities and can mix with one another to form <br />
                different emotions. Fig. 4 illustrates Plutchik’s wheel <br />
                model. Eight primary emotions are extended into 24 <br />
                emotions by adding two intensities (strong and weak). <br />
                Stronger emotions are located inside the wheel, and <br />
                weaker emotions are located outside the wheel. The <br />
                adjacent three emotions in the radial direction of the <br />
                wheel belong to the same emotion category. Note that <br />
                the colors in the wheel were arbitrarily assigned by <br />
                Plutchik." ⁸{" "}
              </Gray>
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In comparison to
              Paul Ekman's theory, there are <br />
              two additional emotions: anticipation and trust. He <br />
              suggested 8 primary bipolar emotions: joy versus <br />
              sadness; anger versus fear; trust versus disgust; and <br />
              surprise versus anticipation. Additionally, his circumplex <br />
              model makes connections between the idea of a circle <br />
              of emotions and a color wheel. Like colors, primary <br />
              emotions can be expressed at different intensities and <br />
              can mix with one another to form different emotions.
            </Text>
            <ImageFig4
              src="/assets/images/fig-4.png"
              alt="Fig. 4: Robert Plutchik, Plutchik's wheel of emotions, 1980"
            />
            <ImageFig4Remark>
              Fig. 4: Robert Plutchik, Plutchik's wheel of emotions, 1980
            </ImageFig4Remark>
          </Col>
          <Col>
            <Text>
              3.4 Features of Human Facial Expressions
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Each facial
              expression has its own character. <br />
              With these facial movements, people can understand <br />
              someone else’s emotions. According to the Facial Action <br />
              Coding System (FACS) by Ekman and Frisen (Figs. 5), <br />
              the relationships between the emotions and movements <br />
              of the facial action units can be as shown below. <br />
              <br />• Anger: lowering one’s brows, raising the upper eye-lid,
              <br />
              tightening the eye-lid, and tightening the lips. <br />• Disgust:
              wrinkling one’s nose, depressing a lip corner, <br />
              and depressing the lower lip. <br />• Fear: raising the inner
              angle of the brow, raising the <br />
              outer part of the brow, lowering the brows, raising the <br />
              upper eye-lid, tightening an eye-lid, stretching the lips, <br />
              and dropping one’s jaw. <br />• Happiness: raising one’s cheeks
              and pulling up the <br />
              corners of the lips. <br />• Sadness: raising the inner brows,
              lowering the brows, <br />
              and depressing the corners of the lips. <br />• Surprise: raising
              the inner brow, raising the outer brow, <br />
              raising the upper eye-lid, and dropping one’s jaw. <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; These features
              provide basic information for <br />
              computers as well as people to understand emotions <br />
              through facial expressions. Emotional recognition <br />
              technology has been developed through their study. In <br />
              addition, these features are also used in the visual <br />
              experiment in this thesis project.
            </Text>
            <ImageFig5
              src="/assets/images/fig-5.png"
              alt="Fig. 5: Examples of Action Units (AU) from the Facial Action Coding System for human expressions, 1978"
            />
            <ImageFig5Remark>
              Fig. 5: Examples of Action Units (AU) from the Facial Action
              Coding System for human expressions, 1978
            </ImageFig5Remark>
          </Col>
        </RowSecond>
      </Body>
    </Section>
  );
}

export default ResearchComponent;
