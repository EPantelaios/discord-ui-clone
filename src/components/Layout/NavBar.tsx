import { useMemo, useState } from 'react';

import { Link } from 'react-router-dom';
import useResizeObserver from 'use-resize-observer';

import { deviceSize } from '../../config/device';
import Modal from '../UI/Modal';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import HamburgerMenuModalContent from './HamburgerMenu/HamburgerMenuModalContent';
import {
  NavBarContainer,
  NavBarWrapper,
  NavBarLogoWrapper,
} from './NavBar.style';
import NavBarLoginButton from './NavBarContent/NavBarLoginButton';
import NavBarLogo from './NavBarContent/NavBarLogo';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { ref, width } = useResizeObserver<HTMLDivElement>({
    box: 'border-box',
  });

  const isBigScreen = useMemo(() => {
    console.log('width', width);
    if (width && width >= deviceSize.desktop) {
      setIsMenuOpen(false);
      return true;
    }
    return false;
  }, [ref, width]);

  console.log('isBigScreen', isBigScreen);

  return (
    <>
      {!isBigScreen && isMenuOpen && (
        <Modal onClose={() => setIsMenuOpen(false)}>
          <HamburgerMenuModalContent />
        </Modal>
      )}
      <NavBarContainer ref={ref}>
        <NavBarWrapper>
          <NavBarLogoWrapper>
            <NavBarLogo />
          </NavBarLogoWrapper>
          <NavBarLoginButton>
            {/* <Link to="/login">Login</Link> */}
            Login
          </NavBarLoginButton>
          {!isBigScreen && (
            <HamburgerMenu onClick={() => setIsMenuOpen(true)} />
          )}
        </NavBarWrapper>
      </NavBarContainer>
    </>
  );
}

export default NavBar;
