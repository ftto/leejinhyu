import styled from "styled-components";

export const Section = styled.div`
  display: flex;
  flex-direction: row;
  padding-bottom: 60px;
`;

export const Title = styled.div`
  width: 472px;
  border-top: 1px solid #fff;
  height: 36px;
  border-left: 4px solid #fff;
  padding-left: 12px;
  padding-top: 11px;
`;
export const TitleWrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
export const TitleNumber = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #fff;
  border-radius: 50%;
  font-size: 18px;
  line-height: 21px;
  text-align: center;
`;
export const TitleText = styled.div`
  padding-left: 8px;
  font-size: 18px;
`;

export const Body = styled.div`
  border-top: 4px solid #fff;
  flex: 1;
  display: flex;
  flex-direction: row;
  padding-top: 10px;
  flex-wrap: wrap;
  position: relative;
`;
export const Col = styled.div`
  width: 448px;
  ${({ left }) => left && `margin-right: 16px;`}
`;
export const Text = styled.div`
  flex: 1;
  font-size: 18px;
  line-height: 24px;
`;

export const Gray = styled.span`
  color: #aaa;
  ${({ active }) => active && `color: #0076ff;`}
`;

export const Image = styled.img`
  width: 100%;
  margin-top: 21px;
  display: block;
`;
export const ImageRemark = styled.div`
  height: 48px;
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #aaaaaa;
  padding-top: 3px;
`;

export const BookmarkWrap = styled.div`
  width: 216px;
  position: absolute;
  left: -232px;
`;
export const Bookmark = styled.div`
  font-size: 14px;
  line-height: 18px;
  letter-spacing: 0.5px;
  color: #aaa;
  ${({ active }) => active && `color: #0076ff;`}
`;
