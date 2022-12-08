import { LoginButton } from './NavBarLoginButton.style';

type Props = {
  children: React.ReactNode;
};

function NavBarLoginButton(props: Props) {
  return (
    <>
      <LoginButton>{props.children}</LoginButton>
    </>
  );
}

export default NavBarLoginButton;
