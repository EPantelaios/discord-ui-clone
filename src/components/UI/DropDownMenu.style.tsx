import styled from 'styled-components';

import colors from '../../config/colors';

export const DropDown = styled.div`
  position: absolute;
  transform: translateY(-9.5rem);
  max-height: 320px;
  min-width: 150px;
  z-index: 1000;
  overflow-x: hidden;
  overflow-y: auto;
  border-radius: 8px;
  background-color: ${colors.white};

  ::-webkit-scrollbar {
    width: 8px;
  }

  ::-webkit-scrollbar-thumb {
    background-clip: padding-box;
    background: ${colors.grey};
    border-radius: 8px;
  }

  :hover {
    cursor: pointer;
  }
`;

export const DropDownItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.2rem;
`;

export const DropDownItem = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 0.6rem 1rem;
  font-size: 0.9rem;

  :hover {
    background-color: ${colors.light};
  }
`;
