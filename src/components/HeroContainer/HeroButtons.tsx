import React from 'react';

import { DownloadButtonIcon } from '../Layout/HamburgerMenu/HamburgerMenuModalContent.style';
import HomePageButton from '../UI/HomePageButton';
import {
  HeroButtonsContainer,
  HeroButtonDownload,
  HeroButtonOpenApp,
} from './HeroButtons.style';

function HeroButtons() {
  return (
    <HeroButtonsContainer>
      <HomePageButton>
        <HeroButtonDownload>
          <DownloadButtonIcon />
          Download for Windows
        </HeroButtonDownload>
      </HomePageButton>
      <HomePageButton>
        <HeroButtonOpenApp>Open Discord in your browser</HeroButtonOpenApp>
      </HomePageButton>
    </HeroButtonsContainer>
  );
}

export default HeroButtons;
