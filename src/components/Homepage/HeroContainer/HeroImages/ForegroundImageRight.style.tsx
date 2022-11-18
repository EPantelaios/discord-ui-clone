import styled from 'styled-components';

import foregroundImageRight from '../../../../assets/right_bg_landing_header.svg';
import { device } from '../../../../config/device';

export const ForegroundImageRightIcon = styled.img`
  display: none;
  position: absolute;

  @media ${device.tablet} {
    display: block;
    top: 22.2rem;
    left: 50%;
    margin-left: -70px;
  }

  @media ${device.desktop} {
    display: block;
    top: 13.7rem;
    left: 50%;
    margin-left: 23rem;
  }
`;

ForegroundImageRightIcon.defaultProps = {
  src: foregroundImageRight,
};
