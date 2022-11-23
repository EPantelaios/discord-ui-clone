import { MainContentFooterText } from '../../../utils/mainContentItemsText';
import HomePageButton from '../../UI/HomePageButton';
import { DownloadButtonIcon } from '../Layout/HamburgerMenu/HamburgerMenuModalContent.style';
import { MainContentFooterContainer, MainContentFooterWrapper, MainContentFooterStarsIcon, MainContentFooterTextMainContentFooterButtonDownload } from './MainContentFooter.style';

function MainContentFooter(props: Props) {
  return (
    <MainContentFooterContainer>
      <MainContentFooterWrapper>
        <MainContentFooterStarsIcon>
        <MainContentFooterText>
          {props.title}
        </MainContentFooterText>

        <HomePageButton>
          <MainContentFooterButtonDownload>
            <DownloadButtonIcon />
            Download for Windows
          </MainContentFooterButtonDownload>
        </HomePageButton>
      </MainContentFooterWrapper>
    </MainContentFooterContainer>
  );
}

export default MainContentFooter;
