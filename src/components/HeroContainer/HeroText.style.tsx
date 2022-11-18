import styled from 'styled-components';

import colors from '../../config/colors';
import { device, size } from '../../config/device';

export const HeroTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media ${device.tablet} {
    max-width: 500px;
  }

  @media ${device.desktop} {
    max-width: ${size.maxWidthContentDesktop};
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto 2rem;
    gap: 2rem;
  }
`;

export const HeroTitle = styled.h1`
  font-size: calc(1.5rem + 1.8vw);
  text-transform: uppercase;
  color: ${colors.white};
  text-shadow: 0px 1px 1px ${colors.white};
  font-stretch: expanded;

  @media ${device.tablet} {
    font-size: 3.8rem;
  }
`;

export const HeroParagraph = styled.div`
  font-family: 'Whitney Book';
  color: ${colors.white};
  line-height: calc(1.5rem + 0.3vw);
  transition: font 0.1s ease;

  @media ${device.tablet} {
    font-size: calc(0.3rem + 1.5vw);
  }

  @media ${device.desktop} {
    font-size: 1.25rem;
    line-height: 1.8rem;
  }
`;
