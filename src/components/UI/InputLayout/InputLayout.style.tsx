import styled from 'styled-components';

import colors from '../../../config/colors';

type Props = {
  type?: string;
  placeholder?: string;
};

export const InputContainer = styled.input.attrs((props: Props) => ({
  type: props.type || 'text',
  placeholder: props.placeholder || '',
}))`
  width: 100%;
  height: 2.5rem;
  padding: 0.6rem;
  border: none;
  outline: none;
  border-radius: 0.25rem;
  font-size: 110%;
  color: ${colors.grey};
  background-color: ${colors.darkest};
`;
