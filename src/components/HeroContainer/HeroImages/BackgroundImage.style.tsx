import styled from 'styled-components';
import { device } from '../../../config/device';
import backgroundImage from '../../../assets/center_bg_landing_header.svg';

export const BackgroundImageIcon = styled.img`
  display: none;
  position: absolute;
  top: 0;
  left: 50%;

  @media ${device.tablet} {
    display: block;
    position: relative;
    top: 5.6rem;
    margin-left: -82.5rem;
  }

  @media ${device.desktop} {
    top: -3rem;
    margin-left: -80rem;
  }
`;

BackgroundImageIcon.defaultProps = {
  src: backgroundImage,
};
