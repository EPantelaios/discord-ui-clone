import styled from 'styled-components';

import colors from '../../../config/colors';
import { device, size } from '../../../config/device';

export const FooterContainer = styled.div`
  width: 100%;
  background-color: ${colors.darker};
`;

export const FooterWrapper = styled.div`
  max-width: ${size.maxWidthContentDesktop};
  padding: 5rem 1.5rem;

  @media ${device.tablet} {
    padding: 5rem 2.5rem;
  }
`;

export const FooterMainWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-wrap: wrap;
  gap: 2rem;
`;
