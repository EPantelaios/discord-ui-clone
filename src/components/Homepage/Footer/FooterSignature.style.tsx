import styled from 'styled-components';

import colors from '../../../config/colors';

export const FooterSignatureContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-top: 2rem;
`;

export const HeaderSpacer = styled.div`
  width: 100%;
  height: 1px;
  margin-top: 1.5rem;
  margin-bottom: 1rem;
  background: ${colors.blurple};
`;
