import styled from 'styled-components';

import colors from '../../../config/colors';

import { size, device } from '../../../config/device';

type PropsContainer = {
  backgroundColor?: string;
};

type imgProps = {
  src: string;
};

export const MainContentItemFooterContainer = styled.div<PropsContainer>`
  background-color: ${(props) => props?.backgroundColor || 'white'};
  padding: 3.5rem 1.5rem;

  @media ${device.tablet} {
    padding: 5rem 2.5rem;
  }

  @media ${device.desktop} {
    padding: 7.5rem 2.5rem;
  }
`;

export const MainContentItemFooterWrapper = styled.div`
  max-width: ${size.maxWidthContentDesktop};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const MainContentItemFooterImg = styled.img.attrs((props: imgProps) => ({
  src: props.src,
}))`
  width: 100%;
  margin-top: 1.25rem;

  @media ${device.desktop} {
    max-width: 90%;
  }
`;

export const MainContentItemFooterText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  gap: 1rem;

  @media ${device.tablet} {
    align-items: center;
    text-align: center;
    max-width: 980px;
  }
`;

export const MainContentItemFooterTitle = styled.h1`
  text-transform: uppercase;
  font-size: clamp(1.5rem, 4vw, 3.2rem);

  @media ${device.tablet} {
    font-size: clamp(3rem, 4vw, 3.2rem);
  }
`;

export const MainContentItemFooterParagraph = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: clamp(1rem, 2vw, 1.2rem);
  font-weight: 300;
  line-height: 1.8;

  @media ${device.tablet} {
    font-size: clamp(1.05rem, 2vw, 1.2rem);
  }
`;

export const MainContentFooterButtonDownload = styled.span`
  all: inherit;
  padding: 1rem 2rem;
  font-size: 1.2rem;

  :hover,
  :active {
    color: ${colors.lightpurple};
  }
`;
