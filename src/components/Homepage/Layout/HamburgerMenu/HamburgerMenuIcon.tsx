import {
  HamburgerMenuWrapper,
  HamburgerMenuLogo,
} from './HamburgerMenuIcon.style';

type Props = {
  onClick: () => void;
};

function HamburgerMenuIcon(props: Props) {
  return (
    <HamburgerMenuWrapper onClick={() => props.onClick()}>
      <HamburgerMenuLogo />
    </HamburgerMenuWrapper>
  );
}

export default HamburgerMenuIcon;
