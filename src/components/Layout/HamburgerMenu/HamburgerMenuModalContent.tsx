import { Link } from 'react-router-dom';

import colors from '../../../config/colors';
import { navBarHamburgerMenuContent } from '../../utils/NavBarText';
import {
  ContainerWrapper,
  HamburgerMenuLogo,
  HeaderSpacer,
  HamburgerMenuItemsWrapper,
  HamburgerMenuItem,
  Footer,
  DownloadButtonIcon,
  DownloadButton,
} from './HamburgerMenuModalContent.style';

const HamburgerMenuContent = () => {
  const menuItems = navBarHamburgerMenuContent.map((item, index) => {
    return (
      <Link key={item} to={item}>
        <HamburgerMenuItem isSelected={index === 0}>{item}</HamburgerMenuItem>
      </Link>
    );
  });

  return (
    <>
      <ContainerWrapper>
        <HamburgerMenuLogo color={colors.black} />
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
