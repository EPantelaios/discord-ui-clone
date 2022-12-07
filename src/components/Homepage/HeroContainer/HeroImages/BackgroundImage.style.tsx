import styled from 'styled-components';

import backgroundImage from '../../../../assets/center_bg_landing_header.svg';
import { device } from '../../../../config/device';

export const BackgroundImageIcon = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;

  @media ${device.tablet} {
    display: block;
    position: relative;
    margin-top: 6rem;
    margin-left: -82.5rem;
  }

  @media ${device.desktop} {
    margin-top: 0;
    top: -3rem;
    margin-left: -80rem;
  }
`;

BackgroundImageIcon.defaultProps = {
  src: backgroundImage,
};
