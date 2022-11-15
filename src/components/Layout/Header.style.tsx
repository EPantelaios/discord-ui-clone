import styled from 'styled-components';
import colors from '../../config/colors';

export const HeaderContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  justify-content: flex-end;
  align-items: center;
  height: 5rem;
  border: 6px solid pink;
  background-color: ${colors.blurple};
`;
