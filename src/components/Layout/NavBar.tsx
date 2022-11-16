import { useMemo, useState } from 'react';

import { Link } from 'react-router-dom';
import useResizeObserver from 'use-resize-observer';

import { deviceSize } from '../../config/device';
import Modal from '../UI/Modal';
import HamburgerMenu from './HamburgerMenu/HamburgerMenu';
import {
  NavBarContainer,
  NavBarWrapper,
  NavBarLogoWrapper,
  // NavBarItem,
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

  // const NavBarItems = navBarContent.map((item) => {
  //   <NavBarItem key={index} item={item}>
  //     {item}
  //   </NavBarItem>;
  // });
  console.log('isBigScreen', isBigScreen);

  return (
    <>
      {!isBigScreen && isMenuOpen && (
        <Modal onClose={() => setIsMenuOpen(false)}>
          {/* <HamburgerMenuContent /> */}
        </Modal>
      )}
      <NavBarContainer ref={ref}>
        <NavBarWrapper>
          <NavBarLogoWrapper>
            <NavBarLogo />
          </NavBarLogoWrapper>
          {/* {isBigScreen && NavBarItems} */}
          <NavBarLoginButton>
            {/* <Link to="/login">Login</Link> */}
            Login
          </NavBarLoginButton>
          {!isBigScreen && (
            <HamburgerMenu onClick={() => setIsMenuOpen(true)} />
          )}
        </NavBarWrapper>
      </NavBarContainer>
      {/* {NavBarItems} */}
    </>
  );
}

export default NavBar;
