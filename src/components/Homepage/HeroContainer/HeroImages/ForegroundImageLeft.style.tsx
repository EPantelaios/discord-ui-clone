import styled from 'styled-components';

import foregroundImageLeft from '../../../../assets/left_bg_landing_header.svg';
import { device } from '../../../../config/device';

export const ForegroundImageLeftIcon = styled.img`
  display: block;
  width: 100%;
  max-width: 880px;
  position: relative;
  margin-left: -5rem;

  @media ${device.tablet} {
    display: none;
  }

  @media ${device.desktop} {
    position: absolute;
    top: 13.9rem;
    left: 50%;
    display: block;
    max-width: 700px;
    margin-left: -64rem;
    -webkit-transform: none;
    transform: none;
  }
`;

ForegroundImageLeftIcon.defaultProps = {
  src: foregroundImageLeft,
};
