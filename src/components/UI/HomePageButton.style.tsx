import styled from 'styled-components';

import colors from '../../config/colors';

type Props = {
  fontSize?: string;
  color?: string;
  colorHover?: string;
  backgroundColor?: string;
  backgroundColorHover?: string;
  padding?: string;
};

export const HomePageButtonStyled = styled.button<Props>`
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
  border-radius: 40px;
  writing-mode: horizontal-tb !important;
  border: none;
  outline: none;
  text-decoration: none;
  text-align: center;
  z-index: 1000;
  transition: all 0.1s ease-in-out;
  font-size: ${(props) => (props.fontSize ? props.fontSize : '14px')};
  background-color: ${(props) =>
    props.backgroundColor ? props.backgroundColor : colors.white};
  color: ${(props) => (props.color ? props.color : colors.black)};

  :hover,
  :active {
    cursor: pointer;
    color: ${(props) => (props.colorHover ? props.colorHover : '')};
    background-color: ${(props) =>
      props.backgroundColorHover ? props.backgroundColorHover : ''};
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.2);
  }
`;
