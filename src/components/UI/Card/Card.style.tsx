import styled from 'styled-components';

import colors from '../../../config/colors';

export const CardContainer = styled.div`
  padding: 2rem;
  border-radius: 0.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
  background-color: ${colors.darkestgrey};
  z-index: 1;
  animation: bounceOut 0.3s;

  @keyframes bounceOut {
    0% {
      transform: scale(0.5);
      opacity: 0.1;
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
`;
