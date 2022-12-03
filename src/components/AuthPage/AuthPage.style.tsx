import styled from 'styled-components';

import colors from '../../config/colors';

export const Container = styled.div`
  width: 100%;
  background-color: ${colors.blurple};
`;

export const CardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  z-index: 1;
`;
