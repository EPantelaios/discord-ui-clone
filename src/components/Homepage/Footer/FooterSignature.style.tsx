import styled from 'styled-components';

import colors from '../../../config/colors';

export const HeaderSpacer = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  background: ${colors.blurple};
  margin-top: 2.5rem;
`;

export const FooterSignatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const SignUpButton = styled.span`
  all: inherit;
  padding: 0.6rem 0.8rem;
  font-size: 14px;
  color: ${colors.white};
  background-color: ${colors.blurple};
  border: 1px solid ${colors.blurple};
  outline: 1px solid ${colors.blurple};

  :hover,
  :active {
    background-color: ${colors.lightpurple};
    border: 1px solid ${colors.lightpurple};
    outline: 1px solid ${colors.lightpurple};
  }
`;
