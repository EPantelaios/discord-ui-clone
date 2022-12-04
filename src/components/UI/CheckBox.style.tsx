import styled from 'styled-components';

import colors from '../../config/colors';

export const CheckBoxContainer = styled.div`
  display: inline-block;
  vertical-align: middle;
`;

export const HiddenCheckBox = styled.input.attrs({
  type: 'checkbox',
})`
  border: 0;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  padding: 0;
  position: absolute;
  overflow: hidden;
  white-space: nowrap;
`;

export const Icon = styled.svg`
  fill: none;
  stroke: ${colors.white};
  stroke-width: 0.1rem;
`;

export const StyledCheckBox = styled.div<{ checked: boolean }>`
  display: inline-block;
  width: 1.5rem;
  height: 1.5rem;
  background: ${(props) => (props.checked ? colors.blurple : 'transparent')};
  border: ${(props) =>
    props.checked
      ? `1px solid ${colors.lightpurple}`
      : `1px solid ${colors.darkgrey}`};
  border-radius: 0.25rem;
  transition: all 150ms;

  ${HiddenCheckBox}:focus + & {
    box-shadow: 0 0 0 3px ${colors.lightpurple};
  }

  ${Icon} {
    visibility: ${(props) => (props.checked ? 'visible' : 'hidden')};
  }

  :hover {
    cursor: pointer;
  }
`;
