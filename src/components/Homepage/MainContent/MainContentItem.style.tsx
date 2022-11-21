import styled from 'styled-components';

import { size, device } from '../../../config/device';

type PropsContainer = {
  backgroundColor?: string;
};

type PropsWrapper = {
  isEven: boolean;
};

export const MainContentItemContainer = styled.div<PropsContainer>`
  background-color: ${(props) => props?.backgroundColor || 'white'};
  padding: 3.5rem 1.5rem;

  @media ${device.tablet} {
    padding: 5rem 2.5rem;
  }

  @media ${device.desktop} {
    padding: 7.5rem 2.5rem;
  }
`;

export const MainContentItemWrapper = styled.div<PropsWrapper>`
  max-width: ${size.maxWidthContentDesktop};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 1rem;

  @media ${device.tablet} {
    display: flex;
    flex-direction: ${(props) => (props.isEven ? 'row' : 'row-reverse')};
    justify-content: space-around;
    align-items: center;
    flex-wrap: nowrap;
    gap: 3rem;
  }

  @media ${device.desktop} {
  }
`;

export const MainContentItemImg = styled.img.attrs((props) => ({
  src: props.src,
}))`
  width: 100%;

  @media ${device.tablet} {
    max-width: 50%;
  }
`;

export const MainContentItemText = styled.div`
  margin-top: 1.25rem;
  font-size: clamp(1rem, 2vw, 1.25rem);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  @media ${device.desktop} {
    max-width: 330px;
    gap: 2rem;
  }
`;

export const MainContentItemTitle = styled.h1`
  font-family: 'Open Sans', sans-serif;
  font-size: 3rem;
  line-height: 1.2;
`;

export const MainContentItemParagraph = styled.div`
  font-family: 'Open Sans', sans-serif;
  font-size: 1.2rem;
  font-weight: 300;
  line-height: 1.5;
`;
