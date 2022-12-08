import { Link } from 'react-router-dom';

import { NavBarLogoIcon } from '../Layout/NavBarContent/NavBarLogo.style';
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
        <Link to="/">
          <NavBarLogoIcon />
        </Link>
        <Link to="register">
          <SignUpButton>Sign Up</SignUpButton>
        </Link>
      </FooterSignatureContainer>
    </>
  );
}

export default FooterSignature;
