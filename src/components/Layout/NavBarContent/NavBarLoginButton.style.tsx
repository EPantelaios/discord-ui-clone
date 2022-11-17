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
  margin-left: auto;

  :hover,
  :active {
    cursor: pointer;
    color: ${colors.blurple};
    font-weight: 500;
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;
