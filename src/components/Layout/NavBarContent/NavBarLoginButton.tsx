import { NavBarLoginButtonStyled } from './NavBarLoginButton.style';

type Props = {
  children?: React.ReactNode;
};

function NavBarLoginButton(props: Props) {
  return <NavBarLoginButtonStyled>{props?.children}</NavBarLoginButtonStyled>;
}

export default NavBarLoginButton;
