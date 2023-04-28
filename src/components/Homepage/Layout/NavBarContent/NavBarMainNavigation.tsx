import React from 'react';

import { Link } from 'react-router-dom';

import {
  MainNavigationMenuWrapper,
  MainNavigationMenuItem,
} from './NavBarMainNavigation.style';
import { navBarContent } from '../../../../utils/navBarText';

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
