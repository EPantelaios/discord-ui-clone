import styled from 'styled-components';

import colors from '../../config/colors';

export const NavBarContainer = styled.nav`
  position: fixed;
  width: 100%;
  height: 5rem;
  top: 0;
  z-index: 1000;
  display: flex;
  justify-content: center;
  border: 3px solid greenyellow;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
`;

export const NavBarWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
  align-items: center;
  border: 3px solid red;
  gap: 1rem;
  color: white;
`;

export const NavBarContentItems = styled.div``;

export const NavBarLogoWrapper = styled.div`
  display: flex;
  margin-right: auto;
  justify-self: flex-start;
`;
