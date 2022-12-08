import styled from 'styled-components';

import colors from '../../../../config/colors';
import HomePageButton from '../../../UI/HomePageButton';

export const LoginButton = styled(HomePageButton)`
  background-color: white;
  color: black;
  padding: 0.7rem 1rem;

  :hover,
  :active {
    color: ${colors.blurple};
  }
`;
