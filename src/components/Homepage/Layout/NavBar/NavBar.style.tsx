import styled from 'styled-components';

import colors from '../../../../config/colors';
import { size, device, deviceSize } from '../../../../config/device';

export const NavBarContainer = styled.nav`
  width: 100%;
  height: 5rem;
  z-index: 1000;
  display: flex;
  justify-content: center;
`;

export const NavBarWrapper = styled.div`
  width: 100%;
  max-width: ${size.maxWidthContentDesktop};
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  gap: 1rem;
  color: white;
  padding-left: 1.5rem;
  padding-right: 1.5rem;

  @media ${device.tablet} {
    padding-left: 2.5rem;
    padding-right: 2.5rem;
  }

  @media ${device.desktop} {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
`;

export const NavBarLogoWrapper = styled.div`
  display: flex;
  justify-self: flex-start;
`;

export const NavBarRightSide = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;
