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
  Image,
  ImageRemark,
} from "../../components";

const PracticalExperimentSection = styled(Section)`
  padding-bottom: 52px;
`;

const RowMargin = styled(Row)`
  ${({ margin }) => margin && `margin-top: ${margin}px;`}
`;

const ImageFig6 = styled(Image)`
  margin-top: 22px;
`;
const ImageFig6Remark = styled(ImageRemark)``;
const ImageFig7 = styled(Image)`
  margin-top: 0;
`;
const ImageFig7Remark = styled(ImageRemark)``;
const ImageFig8 = styled(Image)`
  margin-top: 0;
`;
const ImageFig8Remark = styled(ImageRemark)``;
const ImageFig9 = styled(Image)`
  margin-top: 24px;
`;
const ImageFig9Remark = styled(ImageRemark)``;

const ImageFig10 = styled(Image)``;
const ImageFig10Remark = styled(ImageRemark)``;

const ImageFig11 = styled(Image)`
  outline: 1px solid #111;
  margin-top: 0;
`;
const ImageFig11Comment = styled.div`
  height: 73px;
  font-size: 12px;
  line-height: 16px;
  color: #aaa;
`;
const ImageFig11Remark = styled(ImageRemark)``;

const ImageFig12 = styled(Image)`
  margin-top: 0;
  outline: 1px solid #111;
`;
const ImageFig12Comment = styled.div`
  height: 40px;
  font-size: 12px;
  line-height: 16px;
  color: #aaa;
  margin-top: 10px;
`;
const ImageFig12Remark = styled(ImageRemark)``;

const ImageFig13 = styled(Image)`
  outline: 1px solid #111;
  margin-top: 0;
`;
const ImageFig13Remark = styled(ImageRemark)``;

const ImageFig14 = styled(Image)`
  margin-top: 0;
  outline: 1px solid #111;
`;
const ImageFig14Remark = styled(ImageRemark)``;

function PracticalExperimentComponent() {
  return (
    <PracticalExperimentSection>
      <Title>
        <TitleWrap>
          <TitleNumber>4</TitleNumber>
          <TitleText>Experiment</TitleText>
        </TitleWrap>
      </Title>
      <Body>
        <Row>
          <Col>
            <Text>
              4.1 Shape
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; At the beginning
              of the practical experiment, a <br />
              basic setting to develop a graphic image series is <br />
              required. This visual experiment uses an eight-by-eight <br />
              basic grid system. In the digital environment, designers <br />
              and developers are using a multiplication by eight. For <br />
              example, most screens of digital products follow eight-
              <br />
              bit resolution systems such as 360px, 720px, or 1280px. <br />
              The sequencing system is adapted to each graphic <br />
              series. Through this sequential system, graphic images <br />
              could be predicted as an animation with various <br />
              movements. Each sequence has 5 scenes, and each <br />
              scene is arranged in chronological order. Paul Ekman's <br />
              six universal facial expressions are applied to this <br />
              experiment: happiness, sadness, fear, disgust, anger, <br />
              and surprise. In addition, the neutral position is also <br />
              considered in the experiment. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; According to
              form-based research at the <br />
              Pennsylvania State University, features of graphic <br />
              shapes can affect one’s experience of emotions. Line <br />
              segments, angles, continuous lines, and curves can be <br />
              features of graphic shapes, and these features affect <br />
              visual recognition. Features of human facial expressions <br />
              are also studied in the process. In addition, not only <br />
              visual and physical elements, but also emotional and <br />
              abstract emotions were used in the visual experiment. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The visual
              experiment started with the line-image <br />
              series (Fig. 6). The horizontal line is used in a neutral <br />
              situation. On the black background, the graphics are <br />
              presented by white lines. The images are designed to be <br />
              simple but considered readable and distinguished. The <br />
              interesting point of the experiment is that, based on the <br />
              horizontal line, the higher the line, the more positive it
            </Text>
          </Col>
          <Col>
            <Text>
              <br />
              <br />
              feels, while the lower the line, the more negative it feels.{" "}
              <br />
              For example, the lines in the happiness images are <br />
              going up, and represent a positive feeling. However, in <br />
              general the lines in the sadness images are going down <br />
              and represent negative feelings. Another interesting <br />
              aspect of the experiment is that, in general, lines are <br />
              used in the experiment to express natural and organic <br />
              feelings in the image curves; however, to express the <br />
              emotion of anger, sharp angles are used in the images <br />
              as a rule. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The second visual
              experiment (Fig. 7) uses a solid <br />
              form. The circle is used for a neutral emotion in this <br />
              series. Compared to the line-image series, the second <br />
              series shows a more organic mood. And in the case of <br />
              lines, the movement is limited on the left and right <br />
              because the double-ended points are fixed, while solid <br />
              shapes have no restrictions on the up and down <br />
              movement. However, because the outline of the shape <br />
              has to be connected, the amount of space that can be <br />
              expressed is smaller. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The third series
              (Fig. 8) of the basic shape also is <br />a solid form, but the
              rectangle is used for the neutral <br />
              emotion. Some of the images in this series are inspired <br />
              by Ellsworth Kelly's artwork, which has a very clear and <br />
              minimal shape but creates a strong impression. In this <br />
              series, the solid form can be divided, cut, and dissolved. <br />
              As the image series of the anger emotion shows, some <br />
              of the angles cut into the form itself. Compared to the <br />
              second series (Fig. 9), the third series shows a sharper <br />
              and more angular feeling. Because the graphic shapes <br />
              start to change from a shape with four sharp angles.
            </Text>
          </Col>
        </Row>
        <Row>
          <Col>
            <ImageFig6
              src="/assets/images/fig-6.png"
              alt="Fig. 6: Jingyu Lee, visual experiment, starting from a horizontal line, 2020"
            />
            <ImageFig6Remark>
              Fig. 6: Jingyu Lee, visual experiment, starting from a horizontal
              line, 2020
            </ImageFig6Remark>
            <ImageFig7
              src="/assets/images/fig-7.png"
              alt="Fig. 7: Jingyu Lee, visual experiment, starting from a circle shape, 2020"
            />
            <ImageFig7Remark>
              Fig. 7: Jingyu Lee, visual experiment, starting from a circle
              shape, 2020
            </ImageFig7Remark>
            <ImageFig8
              src="/assets/images/fig-8.png"
              alt="Fig. 8: Jingyu Lee, visual experiment, based on a rectangular shape, 2020"
            />
            <ImageFig8Remark>
              Fig. 8: Jingyu Lee, visual experiment, based on a rectangular
              shape, 2020
            </ImageFig8Remark>
          </Col>
        </Row>
        <RowMargin margin={25}>
          <Col>
            <Text>
              4.2 Color
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In this chapter,
              color is associated with the <br />
              graphic images developed. In the color scheme of <br />
              Plutchik, sadness and surprise are the same as blue. <br />
              Also, Plutchik's color scheme is based on eight basic <br />
              emotions, while this experiment is based on six basic <br />
              emotions. To solve this problem, the other color table is <br />
              applied in the experiment. The color table used in <br />
              research published in HRI 2013 is adapted in this study. <br />
              The colors added to each facial expression were as <br />
              follows. <br />
              <br />• Happiness: orange <br />• Sadness: blue <br />• Fear:
              green
              <br />• Disgust: purple <br />• Anger: red <br />• Surprise:
              yellow
            </Text>
          </Col>
          <Col>
            <Text>
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The selected
              colors are applied to each series of <br />
              the experiment. The image (Fig.9) shows afterimages of <br />a
              movement. With the afterimage, movements could be <br />
              read in one scene. In the visual experiment with the color <br />
              system, each emotion-image series is imbued with a <br />
              more individual character. However, the color system <br />
              could be subjective due to cultural and social factors; <br />
              thus, someone can agree and disagree with the colors. <br />
              For example, blue color for sadness or red color for <br />
              anger can be agreed to by the vast majority of people. <br />
              But green as a color for fear could be controversial. <br />
              However, even though the color system does not work <br />
              perfectly for the reader, the color system still has an <br />
              essential function: that of classifying the six emotions. <br />
              Readers can easily recognize and distinguish each <br />
              expression of an emotion.
            </Text>
          </Col>
        </RowMargin>
        <Row>
          <Col>
            <ImageFig9
              src="/assets/images/fig-9-1.png"
              alt="Fig. 9-1: Jingyu Lee, visual experiment, graphic shape with color system, 2020"
            />
            <ImageFig9
              src="/assets/images/fig-9-2.png"
              alt="Fig. 9-2: Jingyu Lee, visual experiment, graphic shape with color system, 2020"
            />
            <ImageFig9
              src="/assets/images/fig-9-3.png"
              alt="Fig. 9-3: Jingyu Lee, visual experiment, graphic shape with color system, 2020"
            />
            <ImageFig9Remark>
              Fig. 9: Jingyu Lee, visual experiment, graphic shape with color
              system, 2020
            </ImageFig9Remark>
          </Col>
        </Row>
        <RowMargin margin={25}>
          <Col>
            <Text>
              4.3 Movement
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In the visual
              experiment with movement (Fig.10), <br />
              each moving shape showed how detailed options of <br />
              animation affect a natural movement. In order to create <br />a
              natural-looking movement, many kinds of animation <br />
              options are considered. For example, if the animation <br />
              speed is just same in every sequence, it looks unnatural. <br />
              Variable speed effects in the animation make the shape <br />
              look more natural and organic. The six-emotion series,
            </Text>
          </Col>
          <Col>
            <Text>
              <br />
              <br />
              which are developed by the former experiment, were <br />
              tested in the movement experiment, and each emotion <br />
              needed different animation effects. For example, the <br />
              movement for the emotions of sadness or disgust is very <br />
              slow, while the movement for the emotions of fear or <br />
              surprise is quick and subject to diverse changes. Each <br />
              emotion has its own features and character, thus the <br />
              animation effects should suitably express each emotion.
            </Text>
          </Col>
        </RowMargin>
        <RowMargin margin={24}>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_1.gif" alt="Fig. 10-1" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_2.gif" alt="Fig. 10-2" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_3.gif" alt="Fig. 10-3" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_4.gif" alt="Fig. 10-4" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_5.gif" alt="Fig. 10-5" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_6.gif" alt="Fig. 10-6" />
          </Col>
        </RowMargin>
        <RowMargin margin={3}>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_7.gif" alt="Fig. 10-7" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_8.gif" alt="Fig. 10-8" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_9.gif" alt="Fig. 10-9" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_10.gif" alt="Fig. 10-10" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_11.gif" alt="Fig. 10-11" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_12.gif" alt="Fig. 10-12" />
          </Col>
        </RowMargin>
        <RowMargin margin={3}>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_13.gif" alt="Fig. 10-13" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_14.gif" alt="Fig. 10-14" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_15.gif" alt="Fig. 10-15" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_16.gif" alt="Fig. 10-16" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_17.gif" alt="Fig. 10-17" />
          </Col>
          <Col>
            <ImageFig10 src="/assets/images/fig-10_18.gif" alt="Fig. 10-18" />
          </Col>
        </RowMargin>

        <RowMargin margin={25}>
          <Col>
            <ImageFig10Remark>
              Fig. 10: Jingyu Lee, visual experiment, graphic shape with
              movement, 2020
            </ImageFig10Remark>
          </Col>
        </RowMargin>
        <RowMargin margin={24}>
          <Col>
            <Text>
              4.4 Prototype
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The graphic
              animation series developed with the <br />
              movement experiment were applied and tested as a <br />
              prototype in the following step. The structure of the <br />
              prototype was based on a general AI assistant service, <br />
              but the prototype was developed and emphasized to <br />
              show emotional expressions. For this, it needed to have <br />a
              space in which to apply the graphic images to express <br />
              emotions. The user interface layout is designed like the <br />
              image (Fig.11). The upper part is the input area. It shows <br />
              text from the user's voice input. The rest of the area is for{" "}
              <br />
              the output and shows the emotional expressions of <br />
              artificial intelligence. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; Animation images
              from the formal visual <br />
              experiment are tested in the prototype with a scenario <br />
              specific to a situation. In the scenario, simple questions, <br />
              that is, a very basic function of an AI assistant service <br />
              were used. The first scenario for the prototype test is to <br />
              ask about news. At the beginning of the conversation, <br />
              when the user calls the AI, the AI greets him or her with <br />
              the emotional expression for happiness. When the user <br />
              asks about breaking news, the AI shows a neutral <br />
              emotion along with the news. Then, the user asks about <br />a
              detail of the breaking news, and the AI displays the <br />
              emotional expression of, e.g., sadness with detailed <br />
              information about the news. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; The first
              prototype experiment illustrates that the
            </Text>
          </Col>
          <Col>
            <Text>
              <br />
              <br />
              emotional expressions developed in the experiment <br />
              could be applied in a natural manner to the AI assistant <br />
              service. On the other hand, the prototype images show <br />
              the limits of emotional expression. In the animation, it is
              <br />
              somewhat difficult to understand the level of the <br />
              emotional expressions. Such as how happy an <br />
              expression is or how sad. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In the second
              prototype experiment, the user <br />
              asked the AI assistant service about the weather. The AI <br />
              could express happiness with good weather, and <br />
              sadness with bad weather. In the sample image (Fig.12), <br />
              the AI expresses anger at very hot weather. The line-
              <br />
              graphic animation is applied to the example, and with <br />
              the option of the line animation, it can show the level of
              <br />
              emotions from zero percent to one hundred percent. <br />
              Not only color changes but also graphic shapes and <br />
              movement can show the level of the emotional <br />
              expressions. <br />
              &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; In the third
              prototype experiment, a different style <br />
              of graphic animation is applied. In the sample image <br />
              (Fig.13), the AI is asked the same question as in the <br />
              second prototype, and then shows the emotion of fear <br />
              given a typhoon alarm. With the aggressive zigzag <br />
              graphic shapes, the image makes tension visible on-
              <br />
              screen. From the experiment, new style of graphic <br />
              images in material effects are developed.
            </Text>
          </Col>
        </RowMargin>
        <RowMargin margin={47}>
          <Col>
            <ImageFig11 src="/assets/images/fig-11.gif" alt="Fig. 11" />
          </Col>
          <Col>
            <ImageFig11Comment>
              Motion Sequence #01.1
              <br />
              Emotion Type: Happiness
              <br />
              Color: Orange (#FF9600)
            </ImageFig11Comment>
            <ImageFig11Comment>
              Motion Sequence #01.2
              <br />
              Emotion Type: Neutral
              <br />
              Color: White (#FFFFFF)
            </ImageFig11Comment>
            <ImageFig11Comment>
              Motion Sequence #01.3
              <br />
              Emotion Type: Sadness
              <br />
              Blue (#0000FF)
            </ImageFig11Comment>
          </Col>
          <Col>
            <ImageFig13 src="/assets/images/fig-13_1.gif" alt="Fig. 13-1" />
          </Col>
          <Col>
            <ImageFig13 src="/assets/images/fig-13_2.gif" alt="Fig. 13-2" />
          </Col>
        </RowMargin>
        <RowMargin margin={8}>
          <Col>
            <ImageFig11Remark>
              Fig. 11: Jingyu Lee, visual experiment, prototype with news
              information, 2020
            </ImageFig11Remark>
          </Col>
          <Col>
            <ImageFig13Remark>
              Fig. 13: Jingyu Lee, visual experiment, prototype with new graphic
              style, 2020
            </ImageFig13Remark>
          </Col>
        </RowMargin>
        <RowMargin margin={16}>
          <Col>
            <ImageFig12 src="/assets/images/fig-12_1.gif" alt="Fig. 12-1" />
            <ImageFig12Comment>
              Emotion Type: Happiness
              <br />
              Weather: Sunny
            </ImageFig12Comment>
          </Col>
          <Col>
            <ImageFig12 src="/assets/images/fig-12_2.gif" alt="Fig. 12-2" />
            <ImageFig12Comment>
              Emotion Type: Sadness
              <br />
              Weather: Rainy
            </ImageFig12Comment>
          </Col>
          <Col>
            <ImageFig12 src="/assets/images/fig-12_3.gif" alt="Fig. 12-3" />
            <ImageFig12Comment>
              Emotion Type: Anger
              <br />
              Weather: Hot &#38; Humid
            </ImageFig12Comment>
          </Col>
          <Col>
            <ImageFig12 src="/assets/images/fig-12_4.gif" alt="Fig. 12-4" />
            <ImageFig12Comment>
              Emotion Type: Fear
              <br />
              Weather: Thunderstorm
            </ImageFig12Comment>
          </Col>
        </RowMargin>
        <RowMargin margin={5}>
          <Col>
            <ImageFig12Remark>
              Fig. 12: Jingyu Lee, visual experiment, prototype with weather
              information, 2020
            </ImageFig12Remark>
          </Col>
          <Col></Col>
        </RowMargin>
        <RowMargin margin={17}>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_1.gif" alt="Fig. 14-1" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_2.gif" alt="Fig. 14-2" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_3.gif" alt="Fig. 14-3" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_4.gif" alt="Fig. 14-4" />
          </Col>
        </RowMargin>
        <RowMargin margin={24}>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_5.gif" alt="Fig. 14-5" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_6.gif" alt="Fig. 14-6" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_7.gif" alt="Fig. 14-7" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_8.gif" alt="Fig. 14-8" />
          </Col>
        </RowMargin>
        <RowMargin margin={24}>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_9.gif" alt="Fig. 14-9" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_10.gif" alt="Fig. 14-10" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_11.gif" alt="Fig. 14-11" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_12.gif" alt="Fig. 14-12" />
          </Col>
        </RowMargin>
        <RowMargin margin={24}>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_13.gif" alt="Fig. 14-13" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_14.gif" alt="Fig. 14-14" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_15.gif" alt="Fig. 14-15" />
          </Col>
          <Col>
            <ImageFig14 src="/assets/images/fig-14_16.gif" alt="Fig. 14-16" />
          </Col>
        </RowMargin>
        <RowMargin margin={8}>
          <Col>
            <ImageFig14Remark>
              Fig. 14: Jingyu Lee, visual experiment, prototype with material
              effects, 2020
            </ImageFig14Remark>
          </Col>
          <Col></Col>
        </RowMargin>
      </Body>
    </PracticalExperimentSection>
  );
}

export default PracticalExperimentComponent;
