import HomePageButton from '../../UI/HomePageButton';
import { NavBarLogoIcon } from '../Layout/NavBarContent/NavBarLogo.style';
import { Link } from 'react-router-dom';
import {
  FooterSignatureContainer,
  HeaderSpacer,
  SignUpButton,
} from './FooterSignature.style';

function FooterSignature() {
  return (
    <>
      <HeaderSpacer />
      <FooterSignatureContainer>
        <NavBarLogoIcon />
        <Link to="register">
          <HomePageButton>
            <SignUpButton>Sign Up</SignUpButton>
          </HomePageButton>
        </Link>
      </FooterSignatureContainer>
    </>
  );
}

export default FooterSignature;
