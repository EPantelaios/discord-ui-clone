import styled from 'styled-components';

import colors from '../../config/colors';
import { size, device, deviceSize } from '../../config/device';

export const HeroContainerWrapper = styled.div`
  padding: 2.5rem 1.5rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: ${size.maxWidthContentDesktop};

  @media ${device.tablet} {
    padding: 5rem 2.5rem 7rem 2.5rem;
    max-width: ${size.maxWidthContentTablet};
  }

  @media ${device.desktop} {
    text-align: center;
    margin: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 1rem;
  }
`;
