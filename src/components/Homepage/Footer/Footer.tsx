import {
  FooterContainer,
  FooterWrapper,
  FooterMainWrapper,
} from './Footer.style';
import FooterMainContent from './FooterMainContent';
import FooterSignature from './FooterSignature';
import FooterInfo from './FooterInfo';

function Footer() {
  return (
    <FooterContainer>
      <FooterWrapper>
        <FooterMainWrapper>
          <FooterInfo />
          <FooterMainContent />
        </FooterMainWrapper>
        <FooterSignature />
      </FooterWrapper>
    </FooterContainer>
  );
}

export default Footer;
