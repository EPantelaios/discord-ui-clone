import styled from 'styled-components';

import { ReactComponent as DownloadIcon } from '../../../assets/download_button_icon.svg';
import colors from '../../../config/colors';
import { size, device } from '../../../config/device';

type PropsContainer = {
  backgroundColor?: string;
};

type imgProps = {
  src: string;
};

export const FooterContainer = styled.div<PropsContainer>`
  background-color: ${(props) => props?.backgroundColor || 'white'};
  padding-right: 1.5rem;
  padding-left: 1.5rem;
  padding-bottom: 3.5rem;

  @media ${device.tablet} {
    padding-right: 2.5rem;
    padding-left: 2.5rem;
    padding-bottom: 5rem;
  }

  @media ${device.desktop} {
    padding-bottom: 6.5rem;
  }
`;

export const FooterWrapper = styled.div`
  max-width: ${size.maxWidthContentDesktop};
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media ${device.tablet} {
    align-items: center;
    text-align: center;
  }
`;

export const IconWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const FooterStarsIcon = styled.img.attrs((props: imgProps) => ({
  src: props.src,
}))`
  user-select: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  -webkit-user-drag: none;
  -webkit-touch-callout: none;
  pointer-events: none;
  width: 550px;
  height: auto;
  margin-bottom: -1rem;
`;

export const FooterTitle = styled.h1`
  font-size: 2.4rem;
  align-self: center;
`;

export const ButtonWrapper = styled.div`
  margin-top: 2.5rem;
`;

export const DownloadButtonIcon = styled(DownloadIcon)``;

export const DownloadButton = styled.span`
  all: inherit;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  color: ${colors.white};
  background-color: ${colors.blurple};

  :hover,
  :active {
    background-color: ${colors.lightpurple};
  }
`;
