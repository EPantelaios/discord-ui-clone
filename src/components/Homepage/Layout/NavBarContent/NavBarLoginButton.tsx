import HomePageButton from '../../../UI/HomePageButton';
import { NavBarLoginButtonStyled } from './NavBarLoginButton.style';

type Props = {
  children: React.ReactNode;
};

function NavBarLoginButton(props: Props) {
  return (
    <>
      <HomePageButton>
        <NavBarLoginButtonStyled>{props.children}</NavBarLoginButtonStyled>
      </HomePageButton>
    </>
  );
}

export default NavBarLoginButton;
