import styled from 'styled-components';
import { FontWeight } from '../../theme/fonts';
import { Color } from '../../theme/colors';

const resolveDefaultColor = defaultColor => ({ color }) =>
  color || defaultColor;

export const IconWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  img {
    display: block;
    width: auto;
    height: 60px;
  }
`;

export const Title = styled.h1`
  margin-top: 24px;
  margin-bottom: 10px;
  font-size: 20px;
  font-weight: ${FontWeight.Bold};
  line-height: 1.5;
  color: ${resolveDefaultColor(Color.lightBlack)};
`;

export const Text = styled.p`
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: ${FontWeight.Normal};
  line-height: 1.44;
  color: ${Color.lightBlack};
`;

export const ButtonWrapper = styled.div`
  display: flex;
  flex-flow: wrap row;
  width: 100%;
  padding-top: 24px;
  margin-top: auto;
  margin-bottom: 46px;
  * {
    margin-bottom: 24px;
    &:last-child {
      margin-bottom: 0;
    }
  }
`;
