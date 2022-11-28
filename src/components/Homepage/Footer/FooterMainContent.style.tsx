import styled from 'styled-components';

import colors from '../../../config/colors';
import { device } from '../../../config/device';

type Props = {
  src?: string;
};

export const FooterMainContentContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-row: auto auto;
  grid-gap: 3rem;
  color: ${colors.white};
  width: 100%;

  @media ${device.tablet} {
    max-width: 50%;
  }

  @media ${device.desktop} {
    max-width: 65%;
  }
`;

export const FooterColumn = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  row-gap: 1rem;
  column-gap: 1rem;
  grid-column: span 2;

  @media ${device.desktop} {
    grid-column: span 1;
  }
`;

export const FooterColumnTitle = styled.h5`
  color: ${colors.blue};
`;

export const FooterColumnItem = styled.span`
  :hover {
    cursor: pointer;
    text-decoration: underline;
  }
`;
