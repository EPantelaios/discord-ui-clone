import { HamburgerMenuWrapper, HamburgerMenuIcon } from './HamburgerMenu.style';

type Props = {
  onClick: () => void;
};

function HamburgerMenu(props: Props) {
  return (
    <>
      <HamburgerMenuWrapper onClick={() => props.onClick()}>
        <HamburgerMenuIcon />
      </HamburgerMenuWrapper>
    </>
  );
}

export default HamburgerMenu;
