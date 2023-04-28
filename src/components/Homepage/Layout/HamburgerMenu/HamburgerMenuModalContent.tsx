import React from 'react';

import { Link } from 'react-router-dom';

import {
  ContainerWrapper,
  HamburgerMenuLogo,
  CloseButtonIcon,
  HeaderSpacer,
  HamburgerMenuItemsWrapper,
  HamburgerMenuItem,
  Footer,
  DownloadButtonIcon,
  DownloadButton,
} from './HamburgerMenuModalContent.style';
import colors from '../../../../config/colors';
import { navBarHamburgerMenuContent } from '../../../../utils/navBarText';

type Props = {
  onClick: () => void;
};

const HamburgerMenuContent = (props: Props) => {
  const vh = window.innerHeight * 0.01;
  document.documentElement.style.setProperty('--vh', `${vh}px`);

  const menuItems = React.Children.toArray(
    navBarHamburgerMenuContent.map((item, index) => {
      return (
        <Link to={item.replace(/\s/g, '').toLowerCase()}>
          <HamburgerMenuItem isSelected={index === 0}>{item}</HamburgerMenuItem>
        </Link>
      );
    })
  );

  return (
    <>
      <ContainerWrapper>
        <Link to="/">
          <HamburgerMenuLogo color={colors.black} />
        </Link>
        <CloseButtonIcon onClick={props.onClick} />
        <HeaderSpacer />
        <HamburgerMenuItemsWrapper>{menuItems}</HamburgerMenuItemsWrapper>
      </ContainerWrapper>
      <Footer>
        <DownloadButton>
          <DownloadButtonIcon />
          Download
        </DownloadButton>
      </Footer>
    </>
  );
};

export default HamburgerMenuContent;
