import {
  FooterContainer,
  FooterWrapper,
  FooterContentWrapper,
} from './Footer.style';
import FooterInfo from './FooterInfo';
import FooterMainContent from './FooterMainContent';
import FooterSignature from './FooterSignature';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterContentWrapper>
          <FooterInfo />
          <FooterMainContent />
        </FooterContentWrapper>
        <FooterSignature />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
