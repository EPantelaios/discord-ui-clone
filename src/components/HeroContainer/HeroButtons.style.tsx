import styled from 'styled-components';

import colors from '../../config/colors';
import { device } from '../../config/device';

export const HeroButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 1.5rem;

  @media ${device.tablet} {
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
  }

  @media ${device.desktop} {
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
`;

export const HeroButtonDownload = styled.span`
  all: inherit;
  padding: 1rem 2rem;
  font-size: 1.2rem;

  :hover,
  :active {
    color: ${colors.lightpurple};
  }
`;

export const HeroButtonOpenApp = styled.span`
  all: inherit;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: ${colors.white};
  background-color: ${colors.darker};

  :hover,
  :active {
    background-color: ${colors.darkestgrey};
  }
`;
