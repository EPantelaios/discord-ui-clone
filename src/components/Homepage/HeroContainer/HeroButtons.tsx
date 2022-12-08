import { DownloadButtonIcon } from '../Layout/HamburgerMenu/HamburgerMenuModalContent.style';
import {
  HeroButtonsContainer,
  HeroButtonDownload,
  HeroButtonOpenApp,
} from './HeroButtons.style';

function HeroButtons() {
  return (
    <HeroButtonsContainer>
      <HeroButtonDownload>
        <DownloadButtonIcon />
        Download for Windows
      </HeroButtonDownload>
      <HeroButtonOpenApp>Open Discord in your browser</HeroButtonOpenApp>
    </HeroButtonsContainer>
  );
}

export default HeroButtons;
