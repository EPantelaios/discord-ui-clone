import styled from 'styled-components';

import colors from '../../../config/colors';

type Props = {
  backgroundColor?: string;
  backgroundColorItem?: string;
};

export const DropDown = styled.div<Props>`
  position: absolute;
  bottom: 28.5rem;
  max-height: 200px;
  min-width: 120px;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${colors.dark};
  border-radius: 2px;
  border: 1px solid ${colors.darkest};

  ::-webkit-scrollbar {
    width: 7px;
  }

  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background: ${colors.darkest};
    border-radius: 2px;
    border-right: 2px solid ${colors.dark};
  }
`;

export const DropDownItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
  width: 98%;

  :hover {
    cursor: pointer;
  }
`;

export const DropDownItem = styled.div<Props>`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem 1rem;
  font-size: 1rem;

  :hover {
    background-color: ${colors.darkestgrey};
    color: ${colors.light};
  }
`;
