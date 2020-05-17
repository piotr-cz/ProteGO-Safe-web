import styled from 'styled-components';
import { Color } from "../../theme/colors";
import { FontWeight } from "../../theme/fonts";

export const Title = styled.h1`
  margin-top: 0;
  margin-bottom: 24px;
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.3;
  color: ${Color.lightBlack};
`;

export const FaqWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  .collapse + .title {
    margin-top: 26px;
  }
`;

export const FaqIntro = styled.p`
  font-size: 14px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.57;
  color: ${Color.lightBlack};
`;

export const FaqTitle = styled.h2`
  margin-top: 0;
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.3;
  color: ${Color.lightBlack};
  + p {
    margin-top: 0;
  }
`;

export const FaqSubtitle = styled.p`
  font-size: 14px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.57;
  color: ${Color.lightBlack};
`;

export const FaqUppercase = styled.p`
  margin-top: 32px;
  margin-bottom: 18px;
  font-size: 14px;
  font-weight: ${FontWeight.Bold};
  text-transform: uppercase;
  line-height: 1.43;
  color: ${Color.lightBlack};
`;

export const FaqParagraph = styled.p`
  margin-bottom: 8px;
  font-size: 14px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.57;
  color: ${Color.lightBlack};
`;

export const SearchWrapper = styled.div`
  display: block;
  width: 100%;
  margin-top: 24px;
  margin-bottom: 26px;
`;

export const Highlight = styled.mark`
  display: inline;
  background-color: ${Color.info};
`;
