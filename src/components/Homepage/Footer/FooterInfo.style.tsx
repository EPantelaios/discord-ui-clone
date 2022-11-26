import styled from 'styled-components';

import { ReactComponent as ArrowDown } from '../../../assets/arrow_down.svg';
import { ReactComponent as facebookIcon } from '../../../assets/facebook_icon.svg';
import { ReactComponent as instagramIcon } from '../../../assets/instagram_icon.svg';
import { ReactComponent as twitterIcon } from '../../../assets/twitter_icon.svg';
import FlagIcon from '../../../assets/usa_flag.png';
import { ReactComponent as youtubeIcon } from '../../../assets/youtube_icon.svg';
import colors from '../../../config/colors';
import { device } from '../../../config/device';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  flex-grow: 1;
  gap: 1.5rem;
  max-width: 80vw;

  @media ${device.tablet} {
    max-width: 230px;
  }
`;

export const Title = styled.h1`
  font-size: 2.5rem;
  text-transform: uppercase;
  color: ${colors.blurple};
  text-shadow: 0px 1px 1px ${colors.blurple};
  line-height: 95%;
`;

export const LanguageWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 1rem;

  :hover {
    cursor: pointer;
  }
`;

export const LanguageIcon = styled.img.attrs(() => ({
  src: FlagIcon,
}))`
  width: 1.5rem;
  height: 1rem;
`;

export const LanguageText = styled.div`
  color: ${colors.white};
  flex-grow: 0;
  flex-shrink: 0;
`;

export const LanguageArrow = styled(ArrowDown)``;

export const SocialMediaIcons = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 2rem;
  color: ${colors.white};
`;

export const TwitterLink = styled.a.attrs(() => ({
  href: 'https://twitter.com/discord',
}))``;

export const TwitterIcon = styled(twitterIcon)``;

export const InstagramLink = styled.a.attrs(() => ({
  href: 'https://instagram.com/discord',
}))``;

export const InstagramIcon = styled(instagramIcon)``;

export const FacebookLink = styled.a.attrs(() => ({
  href: 'https://facebook.com/discord',
}))``;

export const FacebookIcon = styled(facebookIcon)``;

export const YoutubeLink = styled.a.attrs(() => ({
  href: 'https://youtube.com/discord',
}))``;

export const YoutubeIcon = styled(youtubeIcon)``;
