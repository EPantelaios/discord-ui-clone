import styled from 'styled-components';

import colors from '../../../config/colors';

export const NavBarLoginButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  text-align: center;
  padding: 0.7rem 1rem;
  border-radius: 40px;
  outline: none;
  border: none;
  background-color: white;
  color: black;
  font-size: 14px;
  transition: all 0.2s ease-in-out;

  :hover {
    cursor: pointer;
    color: ${colors.blurple};
    font-weight: 500;
    box-shadow: 0 1px 4px 1px ${colors.dark};
  }
`;
