import { useMemo, useState } from 'react';

import { Link } from 'react-router-dom';
import useResizeObserver from 'use-resize-observer';

import {
  NavBarContainer,
  NavBarWrapper,
  NavBarLogoWrapper,
  NavBarRightSide,
} from './NavBar.style';
import { deviceSize } from '../../../../config/device';
import Modal from '../../../UI/Modal/Modal';
import HamburgerMenuIcon from '../HamburgerMenu/HamburgerMenuIcon';
import HamburgerMenuModalContent from '../HamburgerMenu/HamburgerMenuModalContent';
import NavBarLoginButton from '../NavBarContent/NavBarLoginButton';
import NavBarLogo from '../NavBarContent/NavBarLogo';
import NavBarMainNavigation from '../NavBarContent/NavBarMainNavigation';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMenuClosing, setIsMenuClosing] = useState(false);

  const { ref, width } = useResizeObserver<HTMLDivElement>({
    box: 'border-box',
  });

  const isBigScreen = useMemo(() => {
    if (width && width >= deviceSize.desktop) {
      setIsMenuOpen(false);
      return true;
    }
    return false;
  }, [ref, width]);

  const closeMenuHandler = () => {
    setIsMenuClosing(true);
    setTimeout(() => {
      //wait for animation to finish
      setIsMenuOpen(false);
    }, 300);
  };

  const hamburgerMenuOpenHandler = () => {
    setIsMenuOpen(true);
    setIsMenuClosing(false);
  };

  return (
    <>
      {!isBigScreen && isMenuOpen && (
        <Modal onClose={closeMenuHandler} isClosing={isMenuClosing}>
          <HamburgerMenuModalContent onClick={closeMenuHandler} />
        </Modal>
      )}
      <NavBarContainer ref={ref}>
        <NavBarWrapper>
          <NavBarLogoWrapper>
            <Link to="/">
              <NavBarLogo />
            </Link>
          </NavBarLogoWrapper>
          {isBigScreen && <NavBarMainNavigation />}
          <NavBarRightSide>
            <Link to="/login">
              <NavBarLoginButton>Login</NavBarLoginButton>
            </Link>
            {!isBigScreen && (
              <HamburgerMenuIcon onClick={hamburgerMenuOpenHandler} />
            )}
          </NavBarRightSide>
        </NavBarWrapper>
      </NavBarContainer>
    </>
  );
}

export default NavBar;
