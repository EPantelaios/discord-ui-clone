import styled from 'styled-components';

import { ReactComponent as hamburgerMenuIcon } from '../../../../assets/hamburger_icon.svg';

export const HamburgerMenuWrapper = styled.div`
  :hover,
  :active {
    cursor: pointer;
  }
`;

export const HamburgerMenuLogo = styled(hamburgerMenuIcon)``;
