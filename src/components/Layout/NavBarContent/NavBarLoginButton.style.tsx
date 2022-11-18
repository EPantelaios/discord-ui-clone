import styled from 'styled-components';

import colors from '../../../config/colors';

export const NavBarLoginButtonStyled = styled.span`
  all: inherit;
  background-color: white;
  color: black;
  padding: 0.7rem 1rem;

  :hover,
  :active {
    color: ${colors.blurple};
  }
`;
