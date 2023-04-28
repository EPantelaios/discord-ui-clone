import { HeaderContainer } from './Header.style';
import HeroContainer from '../../HeroContainer/HeroContainer';
import NavBar from '../NavBar/NavBar';

function Header() {
  return (
    <HeaderContainer>
      <NavBar />
      <HeroContainer />
    </HeaderContainer>
  );
}

export default Header;
