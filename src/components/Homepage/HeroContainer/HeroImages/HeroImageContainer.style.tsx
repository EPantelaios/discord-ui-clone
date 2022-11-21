import styled from 'styled-components';

import { device } from '../../../../config/device';

export const HeroImageWrapper = styled.div`
  position: relative;
  z-index: 0;
  -webkit-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;

  @media ${device.tablet} {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
