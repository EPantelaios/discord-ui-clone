import HeroContainer from '../../HeroContainer/HeroContainer';
import NavBar from '../NavBar/NavBar';
import { HeaderContainer } from './Header.style';

function Header() {
  return (
    <HeaderContainer>
      <NavBar />
      <HeroContainer />
    </HeaderContainer>
  );
}

export default Header;
