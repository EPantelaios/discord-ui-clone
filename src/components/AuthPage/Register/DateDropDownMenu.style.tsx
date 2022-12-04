import styled from 'styled-components';

import colors from '../../../config/colors';

type Props = {
  backgroundColor?: string;
  backgroundColorItem?: string;
};

const DropDown = styled.div<Props>`
  position: absolute;
  transform: translateY(-11rem);
  max-height: 320px;
  min-width: 120px;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: auto;
  background-color: ${colors.darkestgrey};
  border: 1px solid ${colors.darkest};
  scrollbar-width: thin;

  :hover {
    cursor: pointer;
  }
`;

const DropDownItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

const DropDownItem = styled.div<Props>`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem 1rem;
  font-size: 1rem;

  :hover {
    background-color: ${colors.dark};
  }
`;
export { DropDown, DropDownItemContainer, DropDownItem };
