import { Link } from 'react-router-dom';

import { navBarContent } from '../../../../utils/navBarText';
import {
  MainNavigationMenuWrapper,
  MainNavigationMenuItem,
} from './NavBarMainNavigation.style';

function NavBarMainNavigation() {
  const mainNavigationMenuItems = navBarContent.map((item) => {
    return (
      <Link key={item} to={item.toLowerCase()}>
        <MainNavigationMenuItem>{item}</MainNavigationMenuItem>
      </Link>
    );
  });

  return (
    <MainNavigationMenuWrapper>
      {mainNavigationMenuItems}
    </MainNavigationMenuWrapper>
  );
}

export default NavBarMainNavigation;
