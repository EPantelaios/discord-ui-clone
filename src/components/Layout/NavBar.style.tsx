import styled from 'styled-components';
import { ReactComponent as discordLogo } from '../../assets/discord_main_logo.svg';
import colors from '../../config/colors';

export const NavContainer = styled.nav`
  position: fixed;
  width: 100%;
  max-width: 1180px;
  height: 80px;
  top: 0;
  z-index: 100;
  display: flex;
  flex-wrap: nowrap;
  justify-content: space-between;
`;

export const NavLogoWrapper = styled.div`
  /* width: 300px; */
`;

export const NavLogo = styled(discordLogo)`
  /* background-color: #5865f2; */
  /* z-index: 1000; */
`;
