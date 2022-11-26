import {
  FooterContainer,
  FooterWrapper,
  FooterContentWrapper,
} from './Footer.style';
import FooterMainContent from './FooterMainContent';
import FooterSignature from './FooterSignature';
import FooterInfo from './FooterInfo';

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
