import styled from 'styled-components';
import colors from '../../config/colors';

const DropDown = styled.div`
  position: absolute;
  transform: translateX(-2rem) translateY(-9.5rem);
  max-height: 320px;
  min-width: 150px;
  z-index: 10;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 8px;
  background-color: ${colors.white};

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

const DropDownItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem 2rem;
  font-size: 0.9rem;

  :hover {
    background-color: ${colors.light};
  }
`;
export { DropDown, DropDownItemContainer, DropDownItem };
