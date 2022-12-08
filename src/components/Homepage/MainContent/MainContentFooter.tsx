import { DownloadButtonIcon } from '../Layout/HamburgerMenu/HamburgerMenuModalContent.style';
import {
  FooterContainer,
  FooterWrapper,
  IconWrapper,
  FooterStarsIcon,
  FooterTitle,
  ButtonWrapper,
  DownloadButton,
} from './MainContentFooter.style';

type Props = {
  backgroundColor?: string;
  src: string;
  title: string;
};

function MainContentFooter(props: Props) {
  return (
    <FooterContainer backgroundColor={props.backgroundColor}>
      <FooterWrapper>
        <IconWrapper>
          <FooterStarsIcon src={props.src} />
        </IconWrapper>
        <FooterTitle>{props.title}</FooterTitle>
        <ButtonWrapper>
          <DownloadButton>
            <DownloadButtonIcon />
            Download for Windows
          </DownloadButton>
        </ButtonWrapper>
      </FooterWrapper>
    </FooterContainer>
  );
}

export default MainContentFooter;
