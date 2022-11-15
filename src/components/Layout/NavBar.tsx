import React from 'react';
import {
  NavLogoWrapper,
  NavLogo,
  NavContainer,
  // NavContent,
  // NavBarItem,
  // LoginButton,
} from './NavBar.style';

function NavBar() {
  const [navBarContent] = [
    'Download',
    'Nitro',
    'Discover',
    'Safety',
    'Support',
    'Blog',
    'Careers',
  ];
  // const NavBarItems = navBarContent.map((item) => {
  //   <NavBarItem key={index} item={item}>
  //     {item}
  //   </NavBarItem>;
  // });

  return (
    <>
      <NavContainer>
        <NavLogoWrapper>
          <NavLogo />
        </NavLogoWrapper>
      </NavContainer>
      {/* {NavBarItems} */}
      {/* <LoginButton /> */}
    </>
  );
}

export default NavBar;
