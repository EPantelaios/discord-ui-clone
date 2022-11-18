import { NavBarLogoIcon } from './NavBarLogo.style';

type Props = {
  color?: string;
};

function NavBarLogo(props: Props) {
  return <NavBarLogoIcon color={props.color} />;
}

export default NavBarLogo;
