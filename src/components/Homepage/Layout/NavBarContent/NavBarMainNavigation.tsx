import React from 'react';

import { Link } from 'react-router-dom';

import { navBarContent } from '../../../../utils/navBarText';
import {
  MainNavigationMenuWrapper,
  MainNavigationMenuItem,
} from './NavBarMainNavigation.style';

function NavBarMainNavigation() {
  const mainNavigationMenuItems = React.Children.toArray(
    navBarContent.map((item) => {
      return (
        <Link to={item.toLowerCase()}>
          <MainNavigationMenuItem>{item}</MainNavigationMenuItem>
        </Link>
      );
    })
  );

  return (
    <MainNavigationMenuWrapper>
      {mainNavigationMenuItems}
    </MainNavigationMenuWrapper>
  );
}

export default NavBarMainNavigation;
